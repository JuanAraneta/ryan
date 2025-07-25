import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const categorySolutionsImageLinkGrid: ExpandedContentModel = {
  sys: {
    id: "categorySolutionsImageLinkGrid",
  },
  name: "Category solutions / Image link grid",
  description: "",
  fields: [
    contentfulLabelFieldFactory(),
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
};
