import { graphql } from "gql.tada";

export const ComponentRoutingItemFragment = graphql(`
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
      ... on ComponentLink {
        __typename
        label
        internalSource {
          slug
        }
        externalSource
      }
    }
    image {
      ... on Asset {
        url
        contentType
      }
    }
  }
`);
