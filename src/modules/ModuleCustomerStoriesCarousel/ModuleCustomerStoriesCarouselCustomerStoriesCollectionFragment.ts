import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";

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
