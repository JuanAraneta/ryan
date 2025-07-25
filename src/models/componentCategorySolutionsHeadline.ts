import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const componentCategorySolutionsHeadline: ContentModel = {
  sys: {
    id: "componentCategorySolutionsHeadline",
  },
  name: "Category solutions / Headline",
  description: "",
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
    richTextFieldFactory({ id: "richTextHeadline", name: "Headline" }),
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
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
