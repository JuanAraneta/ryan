import { graphql } from "gql.tada";
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from "./ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";

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
        sys {
          id
        }
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
