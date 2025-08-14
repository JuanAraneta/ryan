import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

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
      sys {
        id
      }
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
          ... on PageContentSoftwareDetails {
            ...EntryCoreFragment
            subject {
              ...EntryCoreFragment
              title
              shortDescription {
                ...ComponentSoftwareDetails_shortDescriptionFragment
              }
            }
          }
          ... on PageContentServiceDetails {
            ...EntryCoreFragment
            subject {
              ...EntryCoreFragment
              title
              shortDescription {
                ...ComponentServiceDetails_shortDescriptionFragment
              }
            }
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
    RichTextFragments.ComponentSoftwareDetails_shortDescription,
    RichTextFragments.ComponentServiceDetails_shortDescription,
    RichTextFragments.ComponentTestimonial_testimonial,
    ComponentLinkFragment,
    AssetFragment,
    EntryCoreFragment,
  ],
);
