import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";

export const GetModuleServiceSoftwareRoutingCardsById = graphql(
  `
    query GetModuleServiceSoftwareRoutingCardsById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleServiceSoftwareRoutingCards(
        id: $id
        preview: $preview
        locale: $locale
      ) {
        ...ModuleServiceSoftwareRoutingCardsFragment
      }
    }

    fragment ModuleServiceSoftwareRoutingCardsFragment on ModuleServiceSoftwareRoutingCards {
      headline {
        ...ModuleServiceSoftwareRoutingCards_headlineFragment
      }
      cardsCollection {
        items {
          title
          body {
            ...ComponentServiceSoftwareRoutingCard_bodyFragment
          }
          statistic {
            ...ComponentStatisticFragment
          }
          image {
            ...AssetFragment
          }
          link {
            ...ComponentLinkFragment
          }
        }
      }
    }
  `,
  [
    RichTextFragments.ModuleServiceSoftwareRoutingCards_headline,
    RichTextFragments.ComponentServiceSoftwareRoutingCard_body,
    ComponentLinkFragment,
    AssetFragment,
    ComponentStatisticFragment,
  ],
);
