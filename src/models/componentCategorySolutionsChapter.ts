import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCategorySolutionsChapter: ExpandedContentModel = {
  sys: {
    id: "componentCategorySolutionsChapter",
  },
  name: "Category solutions / Chapter",
  description: "",
  displayField: "title",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
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
