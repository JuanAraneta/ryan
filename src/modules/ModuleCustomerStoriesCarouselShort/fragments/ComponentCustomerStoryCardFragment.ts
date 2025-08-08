import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";

export const ComponentCustomerStoryCardFragment = graphql(
  `
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
  [AssetFragment, ComponentStatisticFragment, ComponentLinkFragment],
);
