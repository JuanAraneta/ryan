import type { ContentModel } from "contentful-code-models";

export const categorySolutionsImageLink: ContentModel = {
  sys: {
    id: "categorySolutionsImageLink",
  },
  name: "Category solutions / Image link grid / Item",
  description: "",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "image",
      name: "Image",
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
    {
      id: "link",
      name: "Link",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "image",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "link",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
