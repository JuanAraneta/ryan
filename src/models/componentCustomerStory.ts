import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCustomerStory = {
  sys: {
    id: "componentCustomerStory",
  },
  name: "Page / Customer story",
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
    createField("assetReference", {
      id: "customerLogo",
      name: "Customer logo",
    }),
    createField("assetReference", {
      id: "heroMedia",
      name: "Hero media",
    }),
  ],
} as const satisfies ExpandedContentModel;
