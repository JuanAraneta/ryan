import { graphql } from "gql.tada";

export const ComponentLinkFragment = graphql(`
  fragment ComponentLinkFragment on ComponentLink {
    label
    internalSource {
      __typename
      ... on Page {
        slug
      }
      ... on PageService {
        slug
      }
      ... on PageSoftware {
        slug
      }
      ... on ComponentCustomerStory {
        slug
      }
      ... on ComponentExpert {
        slug
      }
      ... on ComponentInsight {
        slug
      }
    }
    externalSource
  }
`);
