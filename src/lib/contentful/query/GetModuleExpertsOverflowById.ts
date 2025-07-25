import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "../fragments/ComponentLinkFragment";
import { ComponentStatisticFragment } from "../fragments/ComponentStatisticFragment";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "../fragments/ModuleExpertsOverflowExpertsListCollectionFragment";
import { AssetFragment } from "../fragments/AssetFragment";
import { RichTextFragments } from "../fragments/RichTextFragments.generated";

export const GetModuleExpertsOverflowById = graphql(
  `
    query GetModuleExpertsOverflowById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleExpertsOverflow(id: $id, preview: $preview, locale: $locale) {
        ...ModuleExpertsOverflowFragment
      }
    }

    fragment ModuleExpertsOverflowFragment on ModuleExpertsOverflow {
      richTextEyebrow {
        ...ModuleExpertsOverflow_richTextEyebrowFragment
      }
      richTextTitle {
        ...ModuleExpertsOverflow_richTextTitleFragment
      }
      callToAction {
        ...ComponentLinkFragment
      }
      statistic {
        ...ComponentStatisticFragment
      }
      statisticFlair {
        ...AssetFragment
      }
      expertsListCollection {
        ...ModuleExpertsOverflowExpertsListCollectionFragment
      }
    }
  `,
  [
    RichTextFragments.ModuleExpertsOverflow_richTextEyebrow,
    RichTextFragments.ModuleExpertsOverflow_richTextTitle,
    ComponentLinkFragment,
    ComponentStatisticFragment,
    ModuleExpertsOverflowExpertsListCollectionFragment,
    AssetFragment,
  ]
);
