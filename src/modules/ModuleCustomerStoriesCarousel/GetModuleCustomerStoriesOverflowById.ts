import { graphql } from "gql.tada";
import { PageContentCustomerStoryFragment } from "./PageContentCustomerStoryFragment";
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
        items {
          ...PageContentCustomerStoryFragment
        }
      }
    }
  `,
  [
    RichTextFragments.ModuleCustomerStoriesCarousel_richTextTitle,
    ComponentLinkFragment,
    PageContentCustomerStoryFragment,
  ],
);
