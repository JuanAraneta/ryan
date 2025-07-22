import { graphql } from "gql.tada";
import { RichTextFragment } from "../fragments/RichTextFragment";
import { ComponentLinkFragment } from "../fragments/ComponentLinkFragment";
import { ComponentStatisticFragment } from "../fragments/ComponentStatisticFragment";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "../fragments/ModuleExpertsOverflowExpertsListCollectionFragment";
import { AssetFragment } from "../fragments/AssetFragment";

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
      eyebrow {
        ...RichTextFragment
      }
      title {
        ...RichTextFragment
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
    RichTextFragment,
    ComponentLinkFragment,
    ComponentStatisticFragment,
    ModuleExpertsOverflowExpertsListCollectionFragment,
    AssetFragment,
  ],
);
