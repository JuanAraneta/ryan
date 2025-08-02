import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";

export const GetModuleSoftwareServicesRoutingGridById = graphql(
  `
    query GetModuleSoftwareServicesRoutingGridById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleSoftwareServicesRoutingGrid(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        ...ModuleSoftwareServicesRoutingGridFragment
      }
    }

    fragment ModuleSoftwareServicesRoutingGridFragment on ModuleSoftwareServicesRoutingGrid {
      title {
        ...ModuleSoftwareServicesRoutingGrid_titleFragment
      }
      description {
        ...ModuleSoftwareServicesRoutingGrid_descriptionFragment
      }
      cta {
        ...ComponentLinkFragment
      }
      gridItemsCollection(limit: 8) {
        total
        items {
          __typename
          ... on PageSoftware {
            title
            shortDescription {
              ...PageSoftware_shortDescriptionFragment
            }
            slug
          }
          ... on PageService {
            title
            shortDescription {
              ...PageService_shortDescriptionFragment
            }
            slug
          }
        }
      }

      testimonial {
        testimonial {
          ...ComponentTestimonial_testimonialFragment
        }
        image {
          ...AssetFragment
        }
        logo {
          ...AssetFragment
        }
      }
    }
  `,
  [
    RichTextFragments.ModuleSoftwareServicesRoutingGrid_title,
    RichTextFragments.ModuleSoftwareServicesRoutingGrid_description,
    RichTextFragments.PageSoftware_shortDescription,
    RichTextFragments.PageService_shortDescription,
    RichTextFragments.ComponentTestimonial_testimonial,
    ComponentLinkFragment,
    AssetFragment,
  ],
);
