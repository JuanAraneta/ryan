import { graphql } from "gql.tada";

export const FooterFragment = graphql(`
  fragment FooterFragment on Footer {
    sys {
      id
    }
    title
  }
`);
