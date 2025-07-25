import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const footer: ExpandedContentModel = {
  sys: {
    id: "footer",
  },
  name: "[LAYOUT] Footer",
  description:
    "Defines the bottom section of a page, typically used for global navigation, contact details, social media links, legal disclaimers, and market-specific information. Designed to be flexible and reusable across markets and languages.",
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
  ],
};
