import { graphql } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const ComponentCustomerStoryCardFragment = graphql(
  `
    fragment ComponentCustomerStoryCardFragment on ComponentCustomerStoryCard {
      ...EntryCoreFragment
      backgroundImage {
        ...AssetFragment
      }
      clientLogo {
        ...AssetFragment
      }
      statistic {
        ...ComponentStatisticFragment
      }
      pageContent {
        ...EntryCoreFragment
      }
      tags
    }
  `,
  [AssetFragment, ComponentStatisticFragment, EntryCoreFragment],
);
