import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const moduleExpertsOverflow: ContentModel = {
  sys: {
    id: "moduleExpertsOverflow",
  },
  name: "Module / Experts overflow",
  description:
    "A page-module for displaying a select list of tax experts with links to their individual bio-pages.",
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
    richTextFieldFactory({ id: "richTextEyebrow", name: "Eyebrow" }),
    richTextFieldFactory({ id: "richTextTitle", name: "Title" }),
    {
      id: "callToAction",
      name: "Call to action",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "statistic",
      name: "Statistic",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentStatistic"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "statisticFlair",
      name: "Statistic flair",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
    {
      id: "expertsList",
      name: "Experts List",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentExpert"],
          },
        ],
        linkType: "Entry",
      },
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
        fieldId: "eyebrow",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "title",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "callToAction",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "statistic",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "statisticFlair",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "expertsList",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
