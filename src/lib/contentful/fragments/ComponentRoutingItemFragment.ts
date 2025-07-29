import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { ComponentLinkFragment } from "./ComponentLinkFragment";

export const ComponentRoutingItemFragment = graphql(
  `
    fragment ComponentRoutingItemFragment on ComponentRoutingItem {
      __typename
      sys {
        id
      }
      heading
      eyebrowText
      subheadingText
      description
      link {
        ...ComponentLinkFragment
      }
      image {
        ...AssetFragment
      }
    }
  `,
  [AssetFragment, ComponentLinkFragment],
);
