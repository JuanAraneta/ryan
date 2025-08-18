import { graphql } from "gql.tada";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const WistiaVideoFragment = graphql(
  `
    fragment WistiaVideoFragment on WistiaVideo {
      ...EntryCoreFragment
      title
      thumbnail {
        url
        width
        height
        description
      }
      wistiaVideo
    }
  `,
  [EntryCoreFragment],
);
