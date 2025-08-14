import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const ModuleExpertsOverflowExpertsListCollectionFragment = graphql(
  `
    fragment ModuleExpertsOverflowExpertsListCollectionFragment on ModuleExpertsOverflowExpertsListCollection {
      items {
        ...EntryCoreFragment
        subject {
          ...EntryCoreFragment
          fullName
          title
          serviceLabel
          headshot {
            ...AssetFragment
          }
        }
      }
    }
  `,
  [AssetFragment, EntryCoreFragment],
);
