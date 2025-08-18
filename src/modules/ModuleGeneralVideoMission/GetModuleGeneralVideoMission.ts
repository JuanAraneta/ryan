import { graphql } from "gql.tada";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";

export const GetModuleGeneralVideoMissionById = graphql(
  `
    query GetModuleGeneralVideoMissionById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleGeneralVideoMission(id: $id, preview: $preview, locale: $locale) {
        ...ModuleGeneralVideoMissionFragment
      }
    }

    fragment ModuleGeneralVideoMissionFragment on ModuleGeneralVideoMission {
      sys {
        id
      }
      headline
      body {
        ...ModuleGeneralVideoMission_bodyFragment
      }
      video
    }
  `,
  [RichTextFragments.ModuleGeneralVideoMission_body],
);
