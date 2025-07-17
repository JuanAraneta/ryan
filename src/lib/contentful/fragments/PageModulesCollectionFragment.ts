import { graphql } from "gql.tada";
import { ThemeBackgroundFragment } from "./ThemeBackgroundFragment";

export const PageModulesCollectionFragment = graphql(
  `
    fragment PageModulesCollectionFragment on PageModulesCollection {
      items {
        __typename
        sys {
          id
        }
        backgroundColorReference {
          ...ThemeBackgroundFragment
        }
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
  `,
  [ThemeBackgroundFragment]
);
