import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const footer: ExpandedContentModel = {
  sys: {
    id: "footer",
  },
  name: "[LAYOUT] Footer",
  description:
    "Defines the bottom section of a page, typically used for global navigation, contact details, social media links, legal disclaimers, and market-specific information. Designed to be flexible and reusable across markets and languages.",
  displayField: "title",
  fields: [
    createField("shortText", {
      id: "title",
      name: "title",
      localized: true,
      required: true,
    }),
  ],
};
