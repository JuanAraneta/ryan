import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";

export const ModuleExpertsOverflowExpertsListCollectionFragment = graphql(
  `
    fragment ModuleExpertsOverflowExpertsListCollectionFragment on ModuleExpertsOverflowExpertsListCollection {
      items {
        fullName
        title
        serviceLabel
        slug
        headshot {
          ...AssetFragment
        }
      }
    }
  `,
  [AssetFragment]
);
