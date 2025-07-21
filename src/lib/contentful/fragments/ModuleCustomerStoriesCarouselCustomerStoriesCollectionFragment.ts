import { graphql } from "gql.tada";
import { RichTextFragment } from "./RichTextFragment";
import { AssetFragment } from "./AssetFragment";

export const ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment =
  graphql(
    `
      fragment ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment on ModuleCustomerStoriesCarouselCustomerStoriesCollection {
        items {
          customerName
          slug
          headline {
            ...RichTextFragment
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
    [RichTextFragment, AssetFragment]
  );
