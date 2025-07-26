import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentStatistic: ExpandedContentModel = {
  sys: {
    id: "componentStatistic",
  },
  name: "Component / Statistic",
  description:
    "A representation of a particular statistic to be shared and updated from a single source.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextLabel", name: "Label" }),
    createField("shortText", {
      id: "value",
      name: "Value",
      validations: [
        {
          regexp: {
            pattern: "[0-9]*.+[0-9]*",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
          message: "Must be a number.",
        },
      ],
      editorInterface: {
        settings: {
          helpText:
            "Should be a number. If visually represented as a scaled value, just give the scaled value (e.g. if representing 1,000,000 as 1M, just put 1 in this field).",
        },
      },
    }),
    createField("shortText", {
      id: "prefix",
      name: "Prefix",
      editorInterface: {
        settings: {
          helpText: "Any necessary prefix for the value, e.g. $",
        },
      },
    }),
    createField("shortText", {
      id: "suffix",
      name: "Suffix",
      editorInterface: {
        settings: {
          helpText:
            'Any necessary suffix for this value (e.g. if representing $1,000,000+ as $1M+, just put "M+" in this field).',
        },
      },
    }),
  ],
};
