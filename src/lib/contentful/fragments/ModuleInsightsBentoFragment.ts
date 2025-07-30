import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "./ComponentLinkFragment";
import { ComponentInsightFragment } from "./ComponentInsightFragment";
import { ComponentNewsletterSignupFragment } from "./ComponentNewsletterSignupFragment";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ModuleInsightsBentoFragment = graphql(
  `
    fragment ModuleInsightsBentoFragment on ModuleInsightsBento {
      sys {
        id
      }
      headline {
        ...ModuleInsightsBento_headlineFragment
      }
      eyebrow
      subheading
      exploreInsightsButton {
        ...ComponentLinkFragment
      }
      insights {
        ...ComponentInsightFragment
      }
      newsletterSignup {
        ...ComponentNewsletterSignupFragment
      }
    }
  `,
  [
    RichTextFragments.ModuleInsightsBento_headline,
    ComponentLinkFragment,
    ComponentInsightFragment,
    ComponentNewsletterSignupFragment,
  ],
);
