import { graphql } from "gql.tada";
import { ComponentStatisticFragment } from "../fragments/ComponentStatisticFragment";
import { AssetFragment } from "../fragments/AssetFragment";
import { RichTextFragments } from "../fragments/RichTextFragments.generated";
import { ComponentLogoCarouselFragment } from "../fragments/ComponentLogoCarouselFragment";

export const GetModuleStatementHomeById = graphql(
  `
    query GetModuleStatementHomeById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleStatementHome(id: $id, preview: $preview, locale: $locale) {
        ...ModuleStatementHomeFragment
      }
    }

    fragment ModuleStatementHomeFragment on ModuleStatementHome {
      headline {
        ...ModuleStatementHome_headlineFragment
      }
      statisticsCollection {
        items {
          ...ComponentStatisticFragment
        }
      }
      brandCarouselRef {
        ...ComponentLogoCarouselFragment
      }
    }
  `,
  [
    RichTextFragments.ModuleStatementHome_headline,
    ComponentStatisticFragment,
    AssetFragment,
    ComponentLogoCarouselFragment,
  ],
);
