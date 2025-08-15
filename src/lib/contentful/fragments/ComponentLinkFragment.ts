import { graphql } from "gql.tada";

export const ComponentLinkFragment = graphql(`
  fragment ComponentLinkFragment on ComponentLink {
    label
    internalSource {
      __typename
      ... on Page {
        path
        market {
          slug
        }
        content {
          __typename
        }
      }
    }
    externalSource
  }
`);
