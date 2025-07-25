import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const moduleExpertsOverflow: ExpandedContentModel = {
  sys: {
    id: "moduleExpertsOverflow",
  },
  name: "Module / Experts overflow",
  description:
    "A page-module for displaying a select list of tax experts with links to their individual bio-pages.",
  fields: [
    contentfulLabelFieldFactory(),
    richTextFieldFactory({ id: "richTextEyebrow", name: "Eyebrow" }),
    richTextFieldFactory({ id: "richTextTitle", name: "Title" }),
    {
      id: "callToAction",
      name: "Call to action",
      type: "Link",
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "statistic",
      name: "Statistic",
      type: "Link",
      validations: [
        {
          linkContentType: ["componentStatistic"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "statisticFlair",
      name: "Statistic flair",
      type: "Link",
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "expertsList",
      name: "Experts List",
      type: "Array",
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentExpert"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
