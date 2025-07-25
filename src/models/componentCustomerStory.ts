import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentCustomerStory: ExpandedContentModel = {
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
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "slugEditor",
        widgetNamespace: "builtin",
      },
    },
    richTextFieldFactory({ id: "richTextHeadline", name: "Headline" }),
    {
      id: "quoteSource",
      name: "Quote source",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "customerLogo",
      name: "Customer logo",
      type: "Link",
      validations: [],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "heroMedia",
      name: "Hero media",
      type: "Link",
      validations: [],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
