import type { ContentModel } from "contentful-code-models";

export const componentNewsletterSignup: ContentModel = {
  sys: {
    id: "componentNewsletterSignup",
  },
  name: "Newsletter signup",
  description:
    "A newsletter signup form component for collecting email subscriptions.",
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
    {
      id: "subhead",
      name: "Subhead",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
        {
          size: { min: 60, max: 120 },
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
};
