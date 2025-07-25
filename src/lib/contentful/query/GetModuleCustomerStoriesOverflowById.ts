import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "../fragments/ComponentLinkFragment";
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from "../fragments/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment";
import { RichTextFragments } from "../fragments/RichTextFragments.generated";

export const GetModuleCustomerStoriesOverflowById = graphql(
  `
    query GetModuleCustomerStoriesOverflowById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleCustomerStoriesCarousel(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        ...ModuleCustomerStoriesOverflowFragment
      }
    }

    fragment ModuleCustomerStoriesOverflowFragment on ModuleCustomerStoriesCarousel {
      richTextTitle {
        ...ModuleCustomerStoriesCarousel_richTextTitleFragment
      }
      callToAction {
        ...ComponentLinkFragment
      }
      customerStoriesCollection {
        ...ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment
      }
    }
  `,
  [
    RichTextFragments.ModuleCustomerStoriesCarousel_richTextTitle,
    ComponentLinkFragment,
    ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment,
  ],
);
