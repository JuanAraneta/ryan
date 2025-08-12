import { graphql, readFragment, ResultOf, TadaDocumentNode } from "gql.tada";
import { contentClient } from "../contentful/contentClient";
import { getConstants } from "../contentful/utils/getConstants";
import { MarketFragment } from "../contentful/fragments/MarketFragment";
import { introspection_types } from "@/graphql-env";
import { EntryCoreFragment } from "../contentful/fragments/EntryCoreFragment";
import { ComponentPageCoreFragment } from "../contentful/fragments/ComponentPageCoreFragment";

// TYPES
type Entry = { __typename: string; sys: { id: string } };
type Page = null | (Entry & { componentPageCore: Entry | null });

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
const GetComponentPageCoreByPathAndMarketSlug = graphql(`
  query GetComponentPageCoreByPathAndMarketSlug(
    $locale: String
    $preview: Boolean
    $path: String
    $market: String
  ) {
    componentPageCoreCollection(
      locale: $locale
      preview: $preview
      where: { path: $path, market: { sys: { id: $market } } }
      limit: 1
    ) {
      items {
        sys {
          id
        }
      }
    }
  }
`);
const GetModularPageByComponentPageCoreId = graphql(
  `
    query GetModularPageByComponentPageCoreId(
      $locale: String
      $preview: Boolean
      $filter: PageModularFilter!
    ) {
      page: pageModularCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment, ComponentPageCoreFragment],
);
const GetExpertPageByComponentPageCore = graphql(
  `
    query GetExpertPageByComponentPageCore(
      $locale: String
      $preview: Boolean
      $filter: PageExpertFilter!
    ) {
      page: pageExpertCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment, ComponentPageCoreFragment],
);
const GetCustomerStoryPageByComponentPageCore = graphql(
  `
    query GetCustomerStoryPageByComponentPageCore(
      $locale: String
      $preview: Boolean
      $filter: PageCustomerStoryFilter!
    ) {
      page: pageCustomerStoryCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment],
);
const GetNewsAndInsightsPageByComponentPageCore = graphql(
  `
    query GetNewsAndInsightsPageByComponentPageCore(
      $locale: String
      $preview: Boolean
      $filter: PageNewsAndInsightsFilter!
    ) {
      page: pageNewsAndInsightsCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment, ComponentPageCoreFragment],
);
const GetSoftwareDetailsPageByComponentPageCore = graphql(
  `
    query GetSoftwareDetailsPageByComponentPageCore(
      $locale: String
      $preview: Boolean
      $filter: PageSoftwareDetailsFilter!
    ) {
      page: pageSoftwareDetailsCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment, ComponentPageCoreFragment],
);
const GetServiceDetailsPageByComponentPageCore = graphql(
  `
    query GetServiceDetailsPageByComponentPageCore(
      $locale: String
      $preview: Boolean
      $filter: PageServiceDetailsFilter!
    ) {
      page: pageServiceDetailsCollection(
        locale: $locale
        preview: $preview
        where: $filter
        limit: 1
      ) {
        items {
          ...EntryCoreFragment
          componentPageCore {
            ...ComponentPageCoreFragment
          }
        }
      }
    }
  `,
  [EntryCoreFragment, ComponentPageCoreFragment],
);

const PageTypeToSlug = {
  PageModular: {
    slug: null,
    getByPageQuery: GetModularPageByComponentPageCoreId,
  },
  PageExpert: {
    slug: "expert",
    getByPageQuery: GetExpertPageByComponentPageCore,
  },
  PageCustomerStory: {
    slug: "customer-story",
    getByPageQuery: GetCustomerStoryPageByComponentPageCore,
  },
  PageServiceDetails: {
    slug: "service",
    getByPageQuery: GetServiceDetailsPageByComponentPageCore,
  },
  PageSoftwareDetails: {
    slug: "software",
    getByPageQuery: GetSoftwareDetailsPageByComponentPageCore,
  },
  PageNewsAndInsights: {
    slug: "news-and-insights",
    getByPageQuery: GetNewsAndInsightsPageByComponentPageCore,
  },
} satisfies {
  [key in introspection_types["Entry"]["possibleTypes"]]?: {
    slug: string | null;
    getByPageQuery: TadaDocumentNode<any, any>;
  };
};

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

// How to find the proper path, based on the Page instance
const getPageByPath = async (fullPath: string): Promise<Page | null> => {
  const { market, path: pathSansMarket } = await getMarketIdFromPath(fullPath);
  const splitPath = pathSansMarket.split("/");
  const typeSegment = Object.values(PageTypeToSlug).some(
    (mapping) => mapping.slug === splitPath[0],
  )
    ? (splitPath[0] as (typeof PageTypeToSlug)[keyof typeof PageTypeToSlug]["slug"])
    : null;

  // If the first slug matches a page.__typename slug
  // Then strip it from path, otherwise use pathSansMarket
  const path =
    typeSegment === null ? pathSansMarket : splitPath.slice(1).join("/");

  const componentPageCoreResponse = await contentClient.query(
    GetComponentPageCoreByPathAndMarketSlug,
    {
      market,
      path,
    },
  );
  const componentPageCore =
    componentPageCoreResponse.data?.componentPageCoreCollection?.items[0];

  if (!componentPageCore) return null;
  const pageResult = await contentClient.query(
    (
      Object.values(PageTypeToSlug).find(
        (mapping) => mapping.slug === typeSegment,
      ) ?? PageTypeToSlug.PageModular
    ).getByPageQuery,
    { filter: { componentPageCore } },
  );

  const page = pageResult.data?.page?.items[0];

  if (!page) return null;

  return page;
};

// # How to find the proper path, based on the Page instance
const getPathByPage = async (page: Entry): Promise<string | null> => {
  const mapping =
    PageTypeToSlug[
      (page.__typename in PageTypeToSlug
        ? page.__typename
        : "PageModular") as keyof typeof PageTypeToSlug
    ];
  const [fullPageResult, constants] = await Promise.all([
    contentClient.query(mapping.getByPageQuery, {
      filter: { sys: { id: page.sys.id } },
    }),
    getConstants(),
  ]);

  const fullPage = fullPageResult.data?.page?.items[0];

  if (!fullPage) {
    console.error("Page could not be found: ", page);
    return null;
  }

  const market = readFragment(
    MarketFragment,
    readFragment(ComponentPageCoreFragment, fullPage?.componentPageCore)
      ?.market,
  );

  if (!market) {
    console.error("Page could not identify market: ", page);
    return null;
  }

  const defaultMarket = readFragment(MarketFragment, constants.defaultMarket);

  const path = [];

  // If not defaultMarket, add market slug to path
  // Otherwise, skip market
  if (market.sys.id !== defaultMarket?.sys.id) {
    path.push(market.slug);
  }

  if (mapping.slug !== null) {
    path.push(mapping.slug);
  }

  const componentPageCore = readFragment(
    ComponentPageCoreFragment,
    fullPage.componentPageCore,
  );

  if (!componentPageCore) {
    console.error("Page could not identify componentPageCore: ", page);
    return null;
  }

  // path may be treated as empty if path is just "index"
  if (componentPageCore.path !== "index") {
    path.push(componentPageCore.path);
  }

  return path.join("/");
};

export const routingUtils = {
  getPathFromProps,
  getMarketIdFromPath,
  getPageByPath,
  getPathByPage,
};
