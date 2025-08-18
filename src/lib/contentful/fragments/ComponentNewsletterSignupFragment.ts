import { graphql } from "gql.tada";

export const ComponentNewsletterSignupFragment = graphql(
  `
    fragment ComponentNewsletterSignupFragment on ComponentNewsletterSignup {
      sys {
        id
      }
      subhead
    }
  `,
  [],
);
