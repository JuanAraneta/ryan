import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentTitleAndBody = {
  sys: {
    id: "componentTitleAndBody",
  },
  name: "Component / Title and body",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextTitle", name: "Title" }),
    createField("richText", { id: "richTextBody", name: "Body" }),
  ],
} as const satisfies ExpandedContentModel;
