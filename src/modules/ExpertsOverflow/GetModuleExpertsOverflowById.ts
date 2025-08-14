import { graphql } from "gql.tada";
import { PageContentExpertFragment } from "./fragments/PageContentExpertFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

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
      ...EntryCoreFragment
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
        items {
          ...PageContentExpertFragment
        }
      }
    }
  `,
  [
    RichTextFragments.ModuleExpertsOverflow_richTextEyebrow,
    RichTextFragments.ModuleExpertsOverflow_richTextTitle,
    ComponentLinkFragment,
    ComponentStatisticFragment,
    PageContentExpertFragment,
    AssetFragment,
    EntryCoreFragment,
  ],
);
