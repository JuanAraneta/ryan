import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const componentCustomerStory: ContentModel = {
  sys: {
    id: "componentCustomerStory",
  },
  name: "Customer story",
  description:
    "An article or link to an article describing a customer's experience with Ryan.",
  displayField: "customerName",
  fields: [
    {
      id: "customerName",
      name: "Customer name",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    richTextFieldFactory({ id: "richTextHeadline", name: "Headline" }),
    {
      id: "quoteSource",
      name: "Quote source",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "customerLogo",
      name: "Customer logo",
      type: "Link",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
    {
      id: "heroMedia",
      name: "Hero media",
      type: "Link",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "customerName",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "slug",
        widgetId: "slugEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "headline",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "quoteSource",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "customerLogo",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "heroMedia",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
