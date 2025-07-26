import { graphql } from "gql.tada";
import { ComponentRoutingItemFragment } from "./ComponentRoutingItemFragment";

export const ModuleHeroHomeFragment = graphql(
  `
    fragment ModuleHeroHomeFragment on ModuleHeroHome {
      __typename
      sys {
        id
      }
      contentfulLabel
      headline {
        json
        links {
          entries {
            hyperlink {
              __typename
              ... on Page {
                sys {
                  id
                }
                slug
              }
              ... on ComponentCardDeviceMock {
                sys {
                  id
                }
              }
              ... on ComponentCategorySolutionsHeadline {
                sys {
                  id
                }
              }
            }
          }
        }
      }
      prompts
      routingCardsCollection {
        items {
          ... on ComponentRoutingItem {
            ...ComponentRoutingItemFragment
          }
        }
      }
    }
  `,
  [ComponentRoutingItemFragment],
);
