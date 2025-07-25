import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentTitleAndBody: ExpandedContentModel = {
  sys: {
    id: "componentTitleAndBody",
  },
  name: "Component / Title and body",
  description: "",
  fields: [
    contentfulLabelFieldFactory(),
    richTextFieldFactory({ id: "richTextTitle", name: "Title" }),
    richTextFieldFactory({ id: "richTextBody", name: "Body" }),
  ],
};
