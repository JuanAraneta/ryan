import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageContentExpert = {
  sys: { id: "componentExpert" },
  name: "Page content / Expert",
  description:
    "Page-content model which represents all details for a particular expert.",
  fields: [
    createField("shortText", {
      id: "fullName",
      name: "Full name",
      displayField: true,
    }),
    createField("shortText", {
      id: "title",
      name: "Title",
    }),
    createField("shortText", {
      id: "serviceLabel",
      name: "Service label",
    }),
    createField("assetReference", {
      id: "headshot",
      name: "Headshot",
      imagesOnly: true,
    }),
  ],
} as const satisfies ExpandedContentModel;
