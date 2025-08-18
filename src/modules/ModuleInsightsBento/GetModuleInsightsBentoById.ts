import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { PageContentNewsAndInsightsFragment } from "@/lib/contentful/fragments/PageContentNewsAndInsightsFragment";
import { ComponentNewsletterSignupFragment } from "@/lib/contentful/fragments/ComponentNewsletterSignupFragment";

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
      cta {
        ...ComponentLinkFragment
      }
      insightsCollection {
        items {
          ...PageContentNewsAndInsightsFragment
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
    ComponentNewsletterSignupFragment,
    PageContentNewsAndInsightsFragment,
  ],
);
