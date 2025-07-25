import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentExpert: ExpandedContentModel = {
  sys: {
    id: "componentExpert",
  },
  name: "Expert",
  description:
    "The simple representation of a Ryan Tax Expert. Will have associated bio-pages, and other section references.",
  displayField: "fullName",
  fields: [
    {
      id: "fullName",
      name: "Full name",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "slugEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "serviceLabel",
      name: "Service label",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
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
};
