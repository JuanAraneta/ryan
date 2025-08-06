import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentIconTextWrapFragment } from "@/lib/contentful/fragments/ComponentIconTextWrapFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";

export const GetModulePlatformById = graphql(
  `
    query GetModulePlatformById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      modulePlatform(id: $id, preview: $preview, locale: $locale) {
        ...ModulePlatformFragment
      }
    }

    fragment ModulePlatformFragment on ModulePlatform {
      sys {
        id
      }
      headline {
        ...ModulePlatform_headlineFragment
      }
      ctaButton {
        ...ComponentLinkFragment
      }
      capabilityComponentsCollection {
        items {
          ...ComponentIconTextWrapFragment
        }
      }

      image {
        ...AssetFragment
      }
      leftOverlayAsset {
        ...AssetFragment
      }
      rightOverlayAsset {
        ...AssetFragment
      }
    }
  `,
  [
    AssetFragment,
    ComponentIconTextWrapFragment,
    ComponentLinkFragment,
    RichTextFragments.ModulePlatform_headline,
  ],
);
