import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { PageSoftwareFragment } from "@/lib/contentful/fragments/PageSoftwareFragment";

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
        sys {
          id
        }
        headline
        body
        cta {
          ...ComponentLinkFragment
        }
        softwareProductsCollection(limit: 10) {
          items {
            ...PageSoftwareFragment
          }
        }
      }
    }
  `,
  [ComponentLinkFragment, PageSoftwareFragment],
);
