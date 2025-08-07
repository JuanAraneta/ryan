import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";

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
        ...ModuleCustomerStoriesCarouselShortFragment
      }
    }

    fragment ModuleCustomerStoriesCarouselShortFragment on ModuleCustomerStoriesCarouselShort {
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

    fragment ComponentCustomerStoryCardFragment on ComponentCustomerStoryCard {
      sys {
        id
      }
      backgroundImage {
        ...AssetFragment
      }
      clientLogo {
        ...AssetFragment
      }
      statistic {
        ...ComponentStatisticFragment
      }
      tags
      link {
        ...ComponentLinkFragment
      }
    }
  `,
  [
    ComponentLinkFragment,
    AssetFragment,
    ComponentStatisticFragment,
    RichTextFragments.ModuleCustomerStoriesCarouselShort_headline,
  ],
);
