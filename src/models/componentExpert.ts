import type { ContentModel } from "contentful-code-models";

export const componentExpert: ContentModel = {
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
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "serviceLabel",
      name: "Service label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "headshot",
      name: "Headshot",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "fullName",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "slug",
        widgetId: "slugEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "title",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "serviceLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "headshot",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
