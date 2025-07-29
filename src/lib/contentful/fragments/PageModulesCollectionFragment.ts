import { graphql } from "gql.tada";

export const PageModulesCollectionFragment = graphql(`
  fragment PageModulesCollectionFragment on PageModulesCollection {
    items {
      __typename
      sys {
        id
      }
      moduleBackground
      modulesCollection {
        items {
          ...EntryFragment
        }
      }
    }
  }

  fragment EntryFragment on Entry {
    __typename
    sys {
      id
    }
  }
`);
