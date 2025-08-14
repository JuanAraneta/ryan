import "server-only";
import { graphql, readFragment } from "gql.tada";
import { contentClient } from "../contentful/contentClient";
import { getConstants } from "../contentful/utils/getConstants";
import { MarketFragment } from "../contentful/fragments/MarketFragment";
import { introspection_types } from "@/graphql-env";
import { EntryCoreFragment } from "../contentful/fragments/EntryCoreFragment";
import { InvertRecord } from "@/types/utils/InvertRecord";
import { createInMemoryCacheMapFetcher } from "@/utils/createInMemoryCacheMapFetcher";

// TYPES
type Entry<Type extends string = string> = {
  __typename: Type;
  sys: { id: string };
};

// QUERIES

const GetMarketBySlugQuery = graphql(
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
const GetPageByPathAndMarketSlug = graphql(
  `
    query GetComponentPageCoreByPathAndMarketSlug(
      $locale: String
      $preview: Boolean
      $path: String
      $market: String
    ) {
      pageCollection(
        locale: $locale
        preview: $preview
        where: { path: $path, market: { sys: { id: $market } } }
      ) {
        items {
          ...EntryCoreFragment
          content {
            ...EntryCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment],
);
const GetPageById = graphql(
  `
    query GetPageById($locale: String, $preview: Boolean, $id: String!) {
      page(id: $id, locale: $locale, preview: $preview) {
        ...EntryCoreFragment
        path
        market {
          slug
        }
        content {
          ...EntryCoreFragment
        }
      }
    }
  `,
  [EntryCoreFragment],
);
const GetAllPages = graphql(
  `
    query GetAllPages(
      $locale: String
      $preview: Boolean
      $limit: Int!
      $skip: Int!
    ) {
      pageCollection(
        locale: $locale
        preview: $preview
        limit: $limit
        skip: $skip
      ) {
        total
        items {
          ...EntryCoreFragment
          content {
            ...EntryCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment],
);

// FUNCTIONS

// TODO - Wrap as many of these calculations in lodash/memoize as possible

// Determine the slug for the market, based on the current path
const getMarketIdFromPath = async (
  // The Array of slugs representing the full current path
  path: string,
): Promise<{
  // The slug that represents the current market
  market: string;
  // All leftover slugs after taking off the market slug,
  // or just the slugs argument if we resolved the default slug
  path: string;
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
        path: leftover.join("/"),
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

// Turn the NextJS default page/layout props into the Path type
const getPathFromProps = async (props: {
  params: Promise<{ slug?: string | Array<string> }>;
}): Promise<string> => {
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
      .join("/")
  );
};

// Route leading-segment differentiation
type PageContentTypes = Exclude<
  introspection_types["PageContent"]["possibleTypes"],
  "PageContentModular"
>;
const pageContentTypeToSlug = {
  PageContentCustomerStory: "customer-story",
  PageContentExpert: "experts",
  PageContentNewsAndInsights: "news-and-insights",
  PageContentServiceDetails: "service",
  PageContentSoftwareDetails: "software",
} as const satisfies Record<PageContentTypes, string | null>;
const slugToPageContentType: InvertRecord<typeof pageContentTypeToSlug> =
  Object.entries(pageContentTypeToSlug).reduce(
    (map, [key, value]) => {
      //@ts-expect-error reduce can't be strict typed
      // but we know this to be true
      map[value] = key;
      return map;
    },
    {} as Partial<InvertRecord<typeof pageContentTypeToSlug>>,
  ) as InvertRecord<typeof pageContentTypeToSlug>;

// How to find the proper path, based on the Page instance
const getPageEntryByPath = async (fullPath: string): Promise<Entry | null> => {
  const { market, path: pathSansMarket } = await getMarketIdFromPath(fullPath);
  const splitPathSansMarket = pathSansMarket.split("/");
  const isNonModularPage = splitPathSansMarket[0] in slugToPageContentType;
  const path = isNonModularPage
    ? splitPathSansMarket.slice(1).join("/")
    : pathSansMarket;
  const contentType: introspection_types["PageContent"]["possibleTypes"] =
    isNonModularPage
      ? slugToPageContentType[
          splitPathSansMarket[0] as keyof typeof slugToPageContentType
        ]
      : "PageContentModular";

  const pagesResult = await contentClient.query(GetPageByPathAndMarketSlug, {
    path: path || "index",
    market,
  });

  const page = pagesResult.data?.pageCollection?.items.find(
    (page) => page?.content?.__typename === contentType,
  );

  if (!page) return null;

  return page;
};

// How to find the proper path, based on the Page instance
const getPathByPage = async (pageEntry: Entry): Promise<string | null> => {
  const [page, constants] = await Promise.all([
    contentClient
      .query(GetPageById, {
        id: pageEntry.sys.id,
      })
      .then((page) => page.data?.page),
    getConstants(),
  ]);

  if (!page) {
    console.error("Page could not be found: ", page);
    return null;
  }

  const market = readFragment(MarketFragment, page.market);

  if (!market) {
    console.error("Page could not identify market: ", page);
    return null;
  }

  const defaultMarket = readFragment(MarketFragment, constants.defaultMarket);

  if (!defaultMarket) {
    throw new Error("No default market default in constants!");
  }

  const path = [];

  // If not defaultMarket, add market slug to path
  // Otherwise, skip market
  if (market.slug !== defaultMarket?.sys.id) {
    path.push(market.slug);
  }

  if (!page.content) {
    // This page might validly 404 or redirect, so no error log here
    return null;
  }

  if (page.content.__typename !== "PageContentModular") {
    path.push(pageContentTypeToSlug[page.content.__typename]);
  }

  // path may be treated as empty if path is just "index"
  if (page.path !== "index") {
    path.push(page.path);
  }

  return path.join("/");
};

const getContentIdToPageIdCache = createInMemoryCacheMapFetcher<Entry>({
  ttl: 1000 * 60 * 60 * 24, // 1 day
});
// TODO - Talk to Contentful about letting us query multi-types
// by sys.id because this is needlessly painful/inefficient
const getPageEntryByContentId = async (contentId: string) => {
  const cache = getContentIdToPageIdCache();
  if (cache.map.has(contentId)) {
    return cache.map.get(contentId)!;
  }
  const limit = 250;
  let skip = 0;

  while (true) {
    const result = await contentClient.query(GetAllPages, { limit, skip });
    const total = result.data?.pageCollection?.total;
    const items = result.data?.pageCollection?.items;
    if (
      !result.data ||
      result.error ||
      total == null ||
      items == null ||
      items.length === 0
    )
      break;
    items.forEach((page) => {
      const id = page?.content?.sys.id;
      if (id && page) cache.map.set(id, page);
    });
    if (cache.map.has(contentId)) {
      return cache.map.get(contentId)!;
    }
    if (total < skip + limit) break;
    else skip += limit;
  }

  return null;
};

const getPathByContentEntry = async (
  contentEntry: Entry<
    introspection_types["PageContent"]["possibleTypes"]
  > | null,
) => {
  if (!contentEntry) return null;
  const pageEntry = await getPageEntryByContentId(contentEntry.sys.id);
  if (!pageEntry) return null;
  return getPathByPage(pageEntry);
};

export const routingUtils = {
  // mappings
  pageContentTypeToSlug,
  slugToPageContentType,
  // helper functions
  getPathFromProps,
  getMarketIdFromPath,
  getPageEntryByPath,
  getPathByPage,
  getPathByContentEntry,
};
