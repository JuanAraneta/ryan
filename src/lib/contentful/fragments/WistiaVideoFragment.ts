import { graphql } from "gql.tada";

export const WistiaVideoFragment = graphql(`
  fragment WistiaVideoFragment on WistiaVideo {
    __typename
    sys {
      id
    }
    title
    thumbnail {
      url
      width
      height
      description
    }
    wistiaVideo
  }
`);
