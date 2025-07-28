import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const moduleHeroHome: ContentModel = {
  sys: {
    id: "moduleHeroHome",
  },
  name: "Module / Hero home",
  description:
    "Homepage Hero 50/50, which serves as the primary, top-of-the-fold content for the main homepage.",
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
      validations: [
        {
          size: { min: 1 },
        },
      ],
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
        validations: [{ linkContentType: ["componentRoutingItem"] }],
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        settings: {
          helpText: "A label for viewing on the Contentful UI.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "headline",
        settings: {
          helpText: "Main headline text for the hero section.",
        },
        widgetId: "richTextEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "prompts",
        settings: {
          helpText:
            "AI chat prompts. Each prompt should be a complete, meaningful question or instruction.",
        },
        widgetId: "tagEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "routingCards",
        settings: {
          helpText:
            "Exactly 2 routing cards for the hero section. Each card should link to a different section or page.",
        },
        widgetId: "entryCardsEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
