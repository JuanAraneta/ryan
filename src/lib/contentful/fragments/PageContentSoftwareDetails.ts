import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { RichTextFragments } from "./RichTextFragments.generated";
import { EntryCoreFragment } from "./EntryCoreFragment";

export const PageContentSoftwareDetails = graphql(
  `
    fragment PageContentSoftwareDetails on PageContentSoftwareDetails {
      ...EntryCoreFragment
      subject {
        ...EntryCoreFragment
        title
        shortDescription {
          ...ComponentSoftwareDetails_shortDescriptionFragment
        }
        image {
          ...AssetFragment
        }
        practiceArea
      }
    }
  `,
  [
    AssetFragment,
    EntryCoreFragment,
    RichTextFragments.ComponentSoftwareDetails_shortDescription,
  ],
);
