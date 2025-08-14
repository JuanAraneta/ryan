import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment =
  graphql(
    `
      fragment ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment on ModuleCustomerStoriesCarouselCustomerStoriesCollection {
        items {
          ...EntryCoreFragment
          subject {
            ...EntryCoreFragment
            customerName
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
      }
    `,
    [
      RichTextFragments.ComponentCustomerStory_richTextHeadline,
      AssetFragment,
      EntryCoreFragment,
    ],
  );
