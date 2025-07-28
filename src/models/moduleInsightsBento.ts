import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const moduleInsightsBento: ContentModel = {
  sys: {
    id: "moduleInsightsBento",
  },
  name: "Module / Insights bento",
  description:
    "A dynamic hub for thought leadership content showcasing recent and featured articles in a bento box grid.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    richTextFieldFactory({ id: "headline", name: "Headline" }),
    {
      id: "eyebrow",
      name: "Eyebrow",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "subheading",
      name: "Subheading",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "exploreInsightsButton",
      name: "Explore insights button",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "insights",
      name: "Insights",
      type: "Array",
      localized: false,
      required: false,
      validations: [{ size: { max: 4 } }],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentInsight"],
          },
        ],
        linkType: "Entry",
      },
    },
    {
      id: "newsletterSignup",
      name: "Newsletter signup",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentNewsletterSignup"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
  ],
};
