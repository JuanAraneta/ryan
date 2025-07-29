import { componentTitleAndBody } from "./componentTitleAndBody";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCategorySolutions2ColSubBody = {
  sys: {
    id: "componentCategorySolutions2ColSubBody",
  },
  name: "Category Solutions / 2 col sub + body",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      array: true,
      id: "titleAndBodyReferences",
      name: "Title and body references",
      size: {
        min: 2,
        max: 2,
      },
      linkContentType: [componentTitleAndBody],
    }),
  ],
} as const satisfies ExpandedContentModel;
