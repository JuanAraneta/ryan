import { graphql } from "gql.tada";

export const ModuleExpertsOverflowExpertsListCollectionFragment = graphql(`
  fragment ModuleExpertsOverflowExpertsListCollectionFragment on ModuleExpertsOverflowExpertsListCollection {
    items {
      fullName
      title
      serviceLabel
      headshot {
        url
      }
    }
  }
`);
