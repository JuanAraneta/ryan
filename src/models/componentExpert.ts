import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentExpert = {
  sys: {
    id: "componentExpert",
  },
  name: "Expert",
  description:
    "The simple representation of a Ryan Tax Expert. Will have associated bio-pages, and other section references.",
  displayField: "fullName",
  fields: [
    createField("shortText", {
      id: "fullName",
      name: "Full name",
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
    {
      id: "headshot",
      name: "Headshot",
      type: "Link",
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
} as const satisfies ExpandedContentModel;
