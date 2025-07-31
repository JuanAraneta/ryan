import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";

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
  [AssetFragment],
);
