import type { ContentModel } from "contentful-code-models";

export const componentCategorySolutionsChapter: ContentModel = {
  sys: {
    id: "componentCategorySolutionsChapter",
  },
  name: "Category solutions / Chapter",
  description: "",
  displayField: "title",
  fields: [
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
      id: "contents",
      name: "Contents",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 5,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "componentCardDeviceMock",
              "componentCategorySolutions2ColSubBody",
              "componentCategorySolutionsHeadline",
              "categorySolutionsImageLinkGrid",
            ],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "title",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "contents",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
