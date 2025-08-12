import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { RichTextFragments } from "./RichTextFragments.generated";
import { ComponentLinkFragment } from "./ComponentLinkFragment";

export const PageSoftwareFragment = graphql(
  `
    fragment PageSoftwareFragment on PageSoftware {
      title
      slug
      shortDescription {
        ...PageSoftware_shortDescriptionFragment
      }
      image {
        ...AssetFragment
      }
      practiceArea
    }
  `,
  [
    AssetFragment,
    RichTextFragments.PageSoftware_shortDescription,
    ComponentLinkFragment,
  ],
);
