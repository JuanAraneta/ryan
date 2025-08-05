import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { ComponentLinkFragment } from "./ComponentLinkFragment";

export const ComponentInsightFragment = graphql(
  `
    fragment ComponentInsightFragment on ComponentInsight {
      sys {
        id
      }
      title
      eyebrow
      image {
        ...AssetFragment
      }
      link {
        ...ComponentLinkFragment
      }
    }
  `,
  [AssetFragment, ComponentLinkFragment],
);
