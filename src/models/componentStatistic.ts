import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const componentStatistic: ContentModel = {
  sys: {
    id: "componentStatistic",
  },
  name: "Component / Statistic",
  description:
    "A representation of a particular statistic to be shared and updated from a single source.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    richTextFieldFactory({ id: "richTextLabel", name: "Label" }),
    {
      id: "value",
      name: "Value",
      type: "Symbol",
      localized: false,
      required: false,
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
      disabled: false,
      omitted: false,
    },
    {
      id: "prefix",
      name: "Prefix",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "suffix",
      name: "Suffix",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        settings: {
          helpText: "A label for viewing on the Contentful UI.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "label",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "value",
        settings: {
          helpText:
            "Should be a number. If visually represented as a scaled value, just give the scaled value (e.g. if representing 1,000,000 as 1M, just put 1 in this field).",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "prefix",
        settings: {
          helpText: "Any necessary prefix for the value, e.g. $",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "suffix",
        settings: {
          helpText:
            'Any necessary suffix for this value (e.g. if representing $1,000,000+ as $1M+, just put "M+" in this field).',
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    ],
  },
};
