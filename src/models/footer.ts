import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const footer = {
  sys: { id: "footer" },
  name: "[LAYOUT] Footer",
  description:
    "Defines the bottom section of a page, typically used for global navigation, contact details, social media links, legal disclaimers, and market-specific information. Designed to be flexible and reusable across markets and languages.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "title",
      localized: true,
      required: true,
      displayField: true,
    }),
  ],
} as const satisfies ExpandedContentModel;
