import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCustomerStory = {
  sys: {
    id: "componentCustomerStory",
  },
  name: "Customer story",
  description:
    "An article or link to an article describing a customer's experience with Ryan.",
  fields: [
    createField("shortText", {
      id: "customerName",
      name: "Customer name",
      displayField: true,
    }),
    createField("shortText", {
      id: "slug",
      name: "Slug",
    }),
    createField("richText", { id: "richTextHeadline", name: "Headline" }),
    createField("shortText", {
      id: "quoteSource",
      name: "Quote source",
    }),
    {
      id: "customerLogo",
      name: "Customer logo",
      type: "Link",
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "heroMedia",
      name: "Hero media",
      type: "Link",
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
} as const satisfies ExpandedContentModel;
