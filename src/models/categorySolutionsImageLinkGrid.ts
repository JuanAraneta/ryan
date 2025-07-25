import type { ContentModel } from "contentful-code-models";

export const categorySolutionsImageLinkGrid: ContentModel = {
  sys: {
    id: "categorySolutionsImageLinkGrid",
  },
  name: "Category solutions / Image link grid",
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
      id: "items",
      name: "Items",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            min: 3,
            max: 3,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["categorySolutionsImageLink"],
          },
        ],
        linkType: "Entry",
      },
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
        fieldId: "items",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
