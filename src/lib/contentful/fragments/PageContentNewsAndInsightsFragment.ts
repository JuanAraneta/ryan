import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { ComponentLinkFragment } from "./ComponentLinkFragment";
import { EntryCoreFragment } from "./EntryCoreFragment";

export const PageContentNewsAndInsightsFragment = graphql(
  `
    fragment PageContentNewsAndInsightsFragment on PageContentNewsAndInsights {
      ...EntryCoreFragment
      subject {
        ...EntryCoreFragment
        title
        eyebrow
        image {
          ...AssetFragment
        }
      }
    }
  `,
  [AssetFragment, EntryCoreFragment],
);
