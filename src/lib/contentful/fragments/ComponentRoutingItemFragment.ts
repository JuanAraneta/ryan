import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "./ComponentLinkFragment";
import { AssetFragment } from "./AssetFragment";

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
  [ComponentLinkFragment, AssetFragment],
);
