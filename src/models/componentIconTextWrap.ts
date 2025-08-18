import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentIconTextWrap = {
  sys: { id: "componentIconTextWrap" },
  name: "Component / Icon + Text Wrap",
  description: "",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
      validations: [{ size: { max: 40 } }],
    }),
    createField("shortText", {
      id: "body",
      name: "Body",
      validations: [{ size: { max: 200 } }],
    }),
    createField("icon", { id: "icon", name: "Icon" }),
  ],
} as const satisfies ExpandedContentModel;
