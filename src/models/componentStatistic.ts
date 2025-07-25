import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentStatistic: ExpandedContentModel = {
  sys: {
    id: "componentStatistic",
  },
  name: "Component / Statistic",
  description:
    "A representation of a particular statistic to be shared and updated from a single source.",
  fields: [
    contentfulLabelFieldFactory(),
    richTextFieldFactory({ id: "richTextLabel", name: "Label" }),
    {
      id: "value",
      name: "Value",
      type: "Symbol",
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
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "prefix",
      name: "Prefix",
      type: "Symbol",
      validations: [],
      editorInterface: {
        settings: {
          helpText: "Any necessary prefix for the value, e.g. $",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "suffix",
      name: "Suffix",
      type: "Symbol",
      validations: [],
      editorInterface: {
        settings: {
          helpText:
            'Any necessary suffix for this value (e.g. if representing $1,000,000+ as $1M+, just put "M+" in this field).',
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
  ],
};
