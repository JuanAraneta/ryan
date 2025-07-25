import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const componentTitleAndBody: ContentModel = {
  sys: {
    id: "componentTitleAndBody",
  },
  name: "Component / Title and body",
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
    richTextFieldFactory({ id: "richTextTitle", name: "Title" }),
    richTextFieldFactory({ id: "richTextBody", name: "Body" }),
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "title",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "body",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
