import { graphql } from "gql.tada";
import { SEOMetadataFragment } from "../fragments/SEOMetadataFragment";

export const GetPageLayoutDataByIdQuery = graphql(
  `
    query GetPageLayoutDataByIdQuery(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      page(locale: $locale, preview: $preview, id: $id) {
        seoMetadata {
          ...SEOMetadataFragment
        }
        market {
          sys {
            id
          }
        }
      }
    }
  `,
  [SEOMetadataFragment],
);
