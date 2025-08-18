import { graphql } from "gql.tada";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const GetModuleHeroHomeById = graphql(
  `
    query GetModuleHeroHomeById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleHeroHome(locale: $locale, preview: $preview, id: $id) {
        ...EntryCoreFragment
        contentfulLabel
        headline {
          ...ModuleHeroHome_headlineFragment
        }
        prompts
        routingCardsCollection {
          items {
            ...ComponentRoutingItemFragment
          }
        }
      }
    }
  `,
  [
    ComponentRoutingItemFragment,
    RichTextFragments.ModuleHeroHome_headline,
    EntryCoreFragment,
  ],
);
