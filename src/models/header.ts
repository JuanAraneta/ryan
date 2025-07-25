import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const header: ExpandedContentModel = {
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
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "image",
      name: "image",
      type: "Link",
      validations: [],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
  editorInterface: {},
};
