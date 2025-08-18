import { graphql } from "gql.tada";
import { WistiaVideoFragment } from "@/lib/contentful/fragments/WistiaVideoFragment";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

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
      ...EntryCoreFragment
      headline
      description
      attribution
      video {
        ...EntryCoreFragment
        ... on WistiaVideo {
          ...WistiaVideoFragment
        }
      }
    }
  `,
  [EntryCoreFragment, WistiaVideoFragment],
);
