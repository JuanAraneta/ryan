import { graphql } from "gql.tada";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { ComponentLogoCarouselFragment } from "@/lib/contentful/fragments/ComponentLogoCarouselFragment";

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
      sys {
        id
      }
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
