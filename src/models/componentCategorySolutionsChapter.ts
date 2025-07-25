import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentCategorySolutionsChapter: ExpandedContentModel = {
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
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "contents",
      name: "Contents",
      type: "Array",
      validations: [
        {
          size: {
            max: 5,
          },
        },
      ],
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
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
