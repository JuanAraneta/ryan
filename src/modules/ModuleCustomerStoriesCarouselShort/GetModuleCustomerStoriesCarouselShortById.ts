import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { ComponentCustomerStoryCardFragment } from "./fragments/ComponentCustomerStoryCardFragment";

export const GetModuleCustomerStoriesCarouselShortById = graphql(
  `
    query GetModuleCustomerStoriesCarouselShortById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleCustomerStoriesCarouselShort(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        sys {
          id
        }
        headline {
          ...ModuleCustomerStoriesCarouselShort_headlineFragment
        }
        cta {
          ...ComponentLinkFragment
        }
        customerStoryCardsCollection(limit: 10) {
          items {
            ...ComponentCustomerStoryCardFragment
          }
        }
      }
    }
  `,
  [
    ComponentLinkFragment,
    AssetFragment,
    ComponentStatisticFragment,
    ComponentCustomerStoryCardFragment,
    RichTextFragments.ModuleCustomerStoriesCarouselShort_headline,
  ],
);
