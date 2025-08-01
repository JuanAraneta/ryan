import { graphql } from "gql.tada";
import { SEOMetadataFragment } from "../fragments/SEOMetadataFragment";
import { HeroFragment } from "../../../modules/Hero/HeroFragment";
import { FooterFragment } from "../../../modules/Footer/FooterFragment";
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
          hero {
            ...HeroFragment
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
    HeroFragment,
    FooterFragment,
    SEOMetadataFragment,
    PageModulesCollectionFragment,
  ],
);
