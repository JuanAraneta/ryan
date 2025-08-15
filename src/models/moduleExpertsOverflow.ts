import { componentLink } from "./componentLink";
import { componentStatistic } from "./componentStatistic";
import { pageContentExpert } from "./page/pageContentExpert";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleExpertsOverflow = {
  sys: { id: "moduleExpertsOverflow" },
  name: "Module / Experts overflow",
  description:
    "A page-module for displaying a select list of tax experts with links to their individual bio-pages.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextEyebrow", name: "Eyebrow" }),
    createField("richText", { id: "richTextTitle", name: "Title" }),
    createField("entryReference", {
      id: "callToAction",
      name: "Call to action",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      id: "statistic",
      name: "Statistic",
      linkContentType: [componentStatistic],
    }),
    createField("assetReference", {
      id: "statisticFlair",
      name: "Statistic flair",
      imagesOnly: true,
    }),
    createField("entryReference", {
      array: true,
      id: "expertsList",
      name: "Experts List",
      size: { max: 10 },
      linkContentType: [pageContentExpert],
    }),
  ],
} as const satisfies ExpandedContentModel;
