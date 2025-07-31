import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "../fragments/ComponentLinkFragment";
import { RichTextFragments } from "../fragments/RichTextFragments.generated";
import { ComponentInsightFragment } from "../fragments/ComponentInsightFragment";
import { ComponentNewsletterSignupFragment } from "../fragments/ComponentNewsletterSignupFragment";

export const GetModuleInsightsBentoById = graphql(
  `
    query GetModuleInsightsBentoById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleInsightsBento(id: $id, preview: $preview, locale: $locale) {
        ...ModuleInsightsBentoFragment
      }
    }

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
      insightsCollection {
        items {
          ...ComponentInsightFragment
        }
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
