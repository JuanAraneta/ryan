import type { ContentModel } from "contentful-code-models";

export const header: ContentModel = {
  sys: {
    id: "header",
  },
  name: "[LAYOUT] Header",
  description:
    "Defines the top section of a page, typically including branding, navigation, and optional call-to-action elements. This module is reusable and configurable, allowing variations per market, language, or page type.",
  displayField: "title",
  fields: [
    {
      id: "title",
      name: "title",
      type: "Symbol",
      localized: true,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "image",
      name: "image",
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
        fieldId: "title",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "image",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
