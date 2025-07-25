import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const moduleHeroHome: ContentModel = {
  sys: {
    id: "moduleHeroHome",
  },
  name: "Module / Hero home",
  description: "A hero home module",
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
      id: "prompts",
      name: "Prompts",
      type: "Array",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
      items: {
        type: "Symbol",
        validations: [],
      },
    },
    {
      id: "routingCards",
      name: "Routing Cards",
      type: "Array",
      localized: false,
      required: true,
      validations: [{ size: { min: 2, max: 2 } }],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        linkType: "Entry",
        validations: [{ linkContentType: ["page"] }],
      },
    },
  ],
};
