import { graphql } from "gql.tada";
import { SEOMetadataFragment } from "../fragments/SEOMetadataFragment";

export const GetLayoutById = graphql(
  `
    query GetLayoutById($locale: String, $preview: Boolean, $id: String!) {
      layout: page(locale: $locale, preview: $preview, id: $id) {
        seoMetadata {
          ...SEOMetadataFragment
        }
      }
    }
  `,
  [SEOMetadataFragment],
);
