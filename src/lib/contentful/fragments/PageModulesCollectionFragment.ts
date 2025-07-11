import { graphql } from "gql.tada";

export const PageModulesCollectionFragment = graphql(`
  fragment PageModulesCollectionFragment on PageModulesCollection {
    items {
      __typename
      sys {
        id
      }
      theme
      backgroundColor
      modulesCollection {
        items {
          __typename
          sys {
            id
          }
        }
      }
    }
  }
`);
