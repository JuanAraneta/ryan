import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { PageContentSoftwareDetails } from "@/lib/contentful/fragments/PageContentSoftwareDetails";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const GetModuleSoftwareProductsCarouselById = graphql(
  `
    query GetModuleSoftwareProductsCarouselById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleSoftwareProductsCarousel(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        ...EntryCoreFragment
        headline
        body
        cta {
          ...ComponentLinkFragment
        }
        softwareProductsCollection(limit: 10) {
          items {
            ...PageContentSoftwareDetails
          }
        }
      }
    }
  `,
  [ComponentLinkFragment, PageContentSoftwareDetails, EntryCoreFragment],
);
