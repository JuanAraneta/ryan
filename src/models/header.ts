import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const header = {
  sys: {
    id: "header",
  },
  name: "[LAYOUT] Header",
  description:
    "Defines the top section of a page, typically including branding, navigation, and optional call-to-action elements. This module is reusable and configurable, allowing variations per market, language, or page type.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "title",
      localized: true,
      required: true,
      displayField: true,
    }),
    createField("assetReference", {
      id: "image",
      name: "image",
      imagesOnly: true,
    }),
  ],
  editorInterface: {},
} as const satisfies ExpandedContentModel;
