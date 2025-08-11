import { graphql, readFragment, ResultOf } from "gql.tada";
import { contentClient } from "../contentful/contentClient";
import { getConstants } from "../contentful/utils/getConstants";
import { MarketFragment } from "../contentful/fragments/MarketFragment";

// TODO - Wrap as many of these calculations in lodash/memoize as possible

type Path = Array<string>;

// Turn the NextJS default page/layout props into the Path type
const getPathFromProps = async (props: {
  params: Promise<{ slug?: string | Path }>;
}): Promise<Path> => {
  const params = await props.params;
  return (
    (
      Array.isArray(params.slug)
        ? params.slug.flatMap((segment) => segment.split("/"))
        : typeof params.slug === "string"
          ? params.slug.split("/")
          : []
    )
      // Remove empty strings
      .filter(Boolean)
  );
};

export const GetMarketBySlugQuery = graphql(
  `
    query GetMarketBySlugQuery(
      $locale: String
      $preview: Boolean
      $slug: String!
    ) {
      marketCollection(
        limit: 1
        where: { slug: $slug }
        preview: $preview
        locale: $locale
      ) {
        items {
          ...MarketFragment
        }
      }
    }
  `,
  [MarketFragment],
);

// Determine the slug for the market, based on the current path
const getMarketIdFromPath = async (
  // The Array of slugs representing the full current path
  path: Path,
): Promise<{
  // The slug that represents the current market
  market: string;
  // All leftover slugs after taking off the market slug,
  // or just the slugs argument if we resolved the default slug
  path: Path;
}> => {
  const constants = await getConstants();

  const [firstSegment, ...leftover] = path;

  if (firstSegment) {
    const marketResult = await contentClient.query(GetMarketBySlugQuery, {
      slug: firstSegment,
    });

    const market = readFragment(
      MarketFragment,
      marketResult.data?.marketCollection?.items[0],
    );

    if (market) {
      return {
        market: market.sys.id,
        path: leftover,
      };
    }
  }

  const defaultMarket = readFragment(MarketFragment, constants.defaultMarket);

  if (!defaultMarket?.slug)
    throw new Error("No default market found to fall back to!");

  return {
    market: defaultMarket.sys.id,
    path,
  };
};

export const GetPageByVariousMeansQuery = graphql(`
  query GetPageByVariousMeansQuery(
    $locale: String
    $preview: Boolean
    $slug: String
    $market: String
    $id: String
  ) {
    pageCollection(
      locale: $locale
      preview: $preview
      where: { slug: $slug, market: { sys: { id: $market } }, sys: { id: $id } }
      limit: 100
    ) {
      items {
        market {
          slug
        }
        slug
        sys {
          id
        }
        parent {
          sys {
            id
          }
        }
      }
    }
  }
`);

const pageParentTreeMatchesPath = async (
  page: NonNullable<
    NonNullable<
      ResultOf<typeof GetPageByVariousMeansQuery>["pageCollection"]
    >["items"][number]
  >,
  // The path WITHOUT page.slug on the end
  path: Path,
  // All IDs of pages we've been through in
  // the current recursion, to prevent loops
  // INCLUDES page.sys.id
  usedIds: Set<string> = new Set([page.sys.id]),
): Promise<boolean> => {
  if (!page?.parent && path.length === 0) {
    return true;
  }

  if (
    // If the page instance identifies a parent but the path does not OR
    (!page.parent?.sys.id && path.length !== 0) ||
    // if the path identifies a parent but page instance does not
    (page.parent?.sys.id && path.length === 0)
  ) {
    return false;
  }

  // The above checks prove that the parent exists
  // in both the page instance and the path
  const parentId = page.parent!.sys.id;

  if (usedIds.has(parentId)) {
    console.error(
      `ERROR: RECURSIVE ROUTING REFERENCE FOUND IN "${page.sys.id}"`,
    );
    return false;
  }

  const parentResult = await contentClient.query(GetPageByVariousMeansQuery, {
    id: parentId,
  });

  const parent = parentResult.data?.pageCollection?.items[0];
  const slug = path[path.length - 1] ?? "index";
  const leftover = path.slice(0, -1);

  if (!parent) return false;
  if (parent.slug !== slug) return false;

  return pageParentTreeMatchesPath(
    parent,
    leftover,
    new Set([...usedIds, parent.sys.id]),
  );
};

// How to find the proper path, based on the Page instance
const getPageIdByPath = async (
  fullPath: Array<string>,
): Promise<string | null> => {
  const { market, path } = await getMarketIdFromPath(fullPath);
  // Default slug is index; this can only be used to resolve root paths after the market,
  // e.g. "", "/"., "/canada", "/canada/"
  const slug = path[path.length - 1] ?? "index";
  const leftover = path.slice(0, -1);

  const pagesResult = await contentClient.query(GetPageByVariousMeansQuery, {
    market,
    slug,
  });

  const pages = pagesResult.data?.pageCollection?.items ?? [];

  for (const index in pages) {
    // If we queried based on data it must exist
    const page = pages[index]!;
    if (await pageParentTreeMatchesPath(page, leftover)) {
      return page.sys.id;
    }
  }

  return null;
};

// # How to find the proper path, based on the Page instance
const getPathByPageId = async (
  pageId: string,
  // ▼ for recursive purposes
  ignoreMarket = false,
  idChain = new Set([pageId]),
): Promise<Array<string> | null> => {
  const pageResult = await contentClient.query(GetPageByVariousMeansQuery, {
    id: pageId,
  });
  const page = pageResult.data?.pageCollection?.items[0];
  if (!page || !page.slug) {
    console.error(`Missing page or slug for "${pageId}"`);
    return null;
  }

  if (!ignoreMarket && !page.market?.slug) {
    console.error(`Missing market for "${pageId}"`);
    return null;
  }

  const marketPath = await (async (): Promise<Array<string> | null> => {
    const constants = await getConstants();
    if (ignoreMarket) return [];

    if (!page.market?.slug) return null;
    const defaultSlug = readFragment(
      MarketFragment,
      constants.defaultMarket,
    )?.slug;

    if (page.market.slug === defaultSlug) return [];
    else return [page.market.slug];
  })();
  if (marketPath === null) {
    console.error(`No market slug found for "${pageId}"`);
    return null;
  }

  if (!page.parent?.sys.id) {
    return [...marketPath, page.slug];
  }

  if (idChain.has(page.parent.sys.id)) {
    console.error(
      `Self referential loop found for parent linking of "${page.parent.sys.id}"`,
    );
    return null;
  }

  const superPath = await getPathByPageId(
    page.parent.sys.id,
    true,
    new Set([...idChain, page.parent.sys.id]),
  );

  if (superPath === null) return null;

  return [...marketPath, ...superPath, page.slug];
};

export const routingUtils = {
  getPathFromProps,
  getMarketIdFromPath,
  getPageIdByPath,
  getPathByPageId,
};
