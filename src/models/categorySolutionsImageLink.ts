import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const categorySolutionsImageLink: ExpandedContentModel = {
  sys: {
    id: "categorySolutionsImageLink",
  },
  name: "Category solutions / Image link grid / Item",
  description: "",
  fields: [
    createField("contentfulLabel"),
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
