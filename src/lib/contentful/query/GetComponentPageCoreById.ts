import { graphql } from "gql.tada";
import { EntryCoreFragment } from "../fragments/EntryCoreFragment";
import { SEOMetadataFragment } from "../fragments/SEOMetadataFragment";

export const GetComponentPageCoreById = graphql(
  `
    query GetComponentPageCoreById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      componentPageCore(id: $id, preview: $preview, locale: $locale) {
        ...EntryCoreFragment
        seoMetadata {
          ...SEOMetadataFragment
        }
      }
    }
  `,
  [EntryCoreFragment, SEOMetadataFragment],
);
