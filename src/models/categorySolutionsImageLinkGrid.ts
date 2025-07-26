import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const categorySolutionsImageLinkGrid = {
  sys: {
    id: "categorySolutionsImageLinkGrid",
  },
  name: "Category solutions / Image link grid",
  description: "",
  fields: [
    createField("contentfulLabel"),
    {
      id: "items",
      name: "Items",
      type: "Array",
      validations: [
        {
          size: {
            min: 3,
            max: 3,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["categorySolutionsImageLink"],
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
} as const satisfies ExpandedContentModel;
