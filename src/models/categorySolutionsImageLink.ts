import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const categorySolutionsImageLink: ExpandedContentModel = {
  sys: {
    id: "categorySolutionsImageLink",
  },
  name: "Category solutions / Image link grid / Item",
  description: "",
  fields: [
    contentfulLabelFieldFactory(),
    {
      id: "image",
      name: "Image",
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
    {
      id: "link",
      name: "Link",
      type: "Link",
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
