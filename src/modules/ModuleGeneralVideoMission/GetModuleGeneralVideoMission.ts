import { graphql } from "gql.tada";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { WistiaVideoFragment } from "@/lib/contentful/fragments/WistiaVideoFragment";

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
      video {
        __typename
        sys {
          id
        }
        ... on WistiaVideo {
          ...WistiaVideoFragment
        }
      }
    }
  `,
  [RichTextFragments.ModuleGeneralVideoMission_body, WistiaVideoFragment],
);
