import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { ComponentIconTextWrapFragment } from "./ComponentIconTextWrapFragment";
import { ComponentLinkFragment } from "./ComponentLinkFragment";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ModulePlatformFragment = graphql(
  `
    fragment ModulePlatformFragment on ModulePlatform {
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
