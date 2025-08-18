import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";

export const GetFooterByMarketId = graphql(
  `
    query GetFooterByMarketId(
      $locale: String
      $preview: Boolean
      $marketId: String!
    ) {
      market(locale: $locale, preview: $preview, id: $marketId) {
        footer {
          logo {
            ...AssetFragment
          }
          columnsCollection {
            items {
              title
              linksCollection {
                items {
                  ...ComponentLinkFragment
                }
              }
            }
          }
          socialMedia {
            title
            linkCollection {
              items {
                platformName
                link {
                  ...ComponentLinkFragment
                }
                icon {
                  ...AssetFragment
                }
              }
            }
          }
          legalLinksCollection {
            items {
              ...ComponentLinkFragment
            }
          }
          copyright
        }
      }
    }
  `,
  [AssetFragment, ComponentLinkFragment],
);
