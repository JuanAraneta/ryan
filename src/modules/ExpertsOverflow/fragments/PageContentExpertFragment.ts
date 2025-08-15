import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const PageContentExpertFragment = graphql(
  `
    fragment PageContentExpertFragment on PageContentExpert {
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
  `,
  [AssetFragment, EntryCoreFragment],
);
