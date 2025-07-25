import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment =
  graphql(
    `
      fragment ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment on ModuleCustomerStoriesCarouselCustomerStoriesCollection {
        items {
          customerName
          slug
          richTextHeadline {
            ...ComponentCustomerStory_richTextHeadlineFragment
          }
          quoteSource
          customerLogo {
            ...AssetFragment
          }
          heroMedia {
            ...AssetFragment
          }
        }
      }
    `,
    [RichTextFragments.ComponentCustomerStory_richTextHeadline, AssetFragment],
  );
