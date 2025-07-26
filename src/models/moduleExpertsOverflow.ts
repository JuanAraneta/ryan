import { componentExpert } from "./componentExpert";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleExpertsOverflow = {
  sys: {
    id: "moduleExpertsOverflow",
  },
  name: "Module / Experts overflow",
  description:
    "A page-module for displaying a select list of tax experts with links to their individual bio-pages.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextEyebrow", name: "Eyebrow" }),
    createField("richText", { id: "richTextTitle", name: "Title" }),
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
    createField("entryReference", {
      array: true,
      id: "expertsList",
      name: "Experts List",
      size: { max: 10 },
      linkContentType: [componentExpert],
    }),
  ],
} as const satisfies ExpandedContentModel;
