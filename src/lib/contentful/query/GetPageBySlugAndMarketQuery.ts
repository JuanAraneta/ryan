import { graphql } from "gql.tada";
import { SEOMetadataFragment } from "../fragments/SEOMetadataFragment";
import { HeaderFragment } from "../fragments/HeaderFragment";
import { FooterFragment } from "../fragments/FooterFragment";
import { PageModulesCollectionFragment } from "../fragments/PageModulesCollectionFragment";

export const GetPageBySlugAndMarketQuery = graphql(
  `
    query GetPageBySlugAndMarketQuery(
      $locale: String
      $preview: Boolean
      $slug: String
      $marketSlug: String
    ) {
      pageCollection(
        locale: $locale
        preview: $preview
        where: { slug: $slug, market: { slug: $marketSlug } }
        limit: 1
      ) {
        items {
          modulesCollection {
            ...PageModulesCollectionFragment
          }
          header {
            ...HeaderFragment
          }
          footer {
            ...FooterFragment
          }
          seoMetadata {
            ...SEOMetadataFragment
          }
        }
      }
    }
  `,
  [
    HeaderFragment,
    FooterFragment,
    SEOMetadataFragment,
    PageModulesCollectionFragment
  ]
);
