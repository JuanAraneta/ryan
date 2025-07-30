import { graphql } from "gql.tada";
import { ComponentRoutingItemFragment } from "./ComponentRoutingItemFragment";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ModuleHeroHomeFragment = graphql(
  `
    fragment ModuleHeroHomeFragment on ModuleHeroHome {
      __typename
      sys {
        id
      }
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
  `,
  [ComponentRoutingItemFragment, RichTextFragments.ModuleHeroHome_headline],
);
