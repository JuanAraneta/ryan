import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";

export const ModuleExpertsOverflowExpertsListCollectionFragment = graphql(
  `
    fragment ModuleExpertsOverflowExpertsListCollectionFragment on ModuleExpertsOverflowExpertsListCollection {
      items {
        sys {
          id
        }
        fullName
        title
        serviceLabel
        headshot {
          ...AssetFragment
        }
      }
    }
  `,
  [AssetFragment],
);
