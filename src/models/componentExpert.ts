import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentExpert = {
  sys: {
    id: "componentExpert",
  },
  name: "Page / Expert",
  description:
    "The simple representation of a Ryan Tax Expert. Will have associated bio-pages, and other section references.",
  fields: [
    createField("shortText", {
      id: "fullName",
      name: "Full name",
      displayField: true,
    }),
    createField("shortText", {
      id: "slug",
      name: "Slug",
      editorInterface: {
        widgetId: "slugEditor",
        widgetNamespace: "builtin",
      },
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
