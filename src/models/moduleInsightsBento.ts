import { createField } from "./utils/createField";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { componentLink } from "./componentLink";
import { componentNewsletterSignup } from "./componentNewsletterSignup";
import { pageContentNewsAndInsights } from "./page/pageContentNewsAndInsights";

export const moduleInsightsBento = {
  sys: { id: "moduleInsightsBento" },
  name: "Module / Insights bento",
  description:
    "A dynamic hub for thought leadership content showcasing recent and featured articles in a bento box grid.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "headline", name: "Headline" }),
    createField("shortText", { id: "eyebrow", name: "Eyebrow" }),
    createField("shortText", { id: "subheading", name: "Subheading" }),
    createField("entryReference", {
      id: "cta",
      name: "CTA",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      id: "insights",
      name: "Insights",
      linkContentType: [pageContentNewsAndInsights],
      array: true,
      size: { max: 4 },
    }),
    createField("entryReference", {
      id: "newsletterSignup",
      name: "Newsletter signup",
      linkContentType: [componentNewsletterSignup],
    }),
  ],
} as const satisfies ExpandedContentModel;
