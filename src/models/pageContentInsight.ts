import { componentLink } from "./componentLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageContentInsight = {
  sys: { id: "componentInsight" },
  name: "Page content / Insight",
  description:
    "The page-content for an individual insight article or piece of thought leadership content for Ryan.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
      validations: [{ size: { min: 20, max: 120 } }],
    }),
    createField("shortText", { id: "eyebrow", name: "Eyebrow" }),
    createField("shortText", { id: "contentType", name: "Content type" }),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
    }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      linkContentType: [componentLink],
    }),
  ],
} as const satisfies ExpandedContentModel;
