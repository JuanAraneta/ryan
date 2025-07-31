import { componentStatistic } from "./componentStatistic";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleStatementHome = {
  sys: {
    id: "moduleStatementHome",
  },
  name: "Module / Statement / Home",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "headline", name: "Headline" }),
    createField("entryReference", {
      array: true,
      id: "statistics",
      name: "Statistics",
      size: { max: 4 },
      linkContentType: [componentStatistic],
    }),
    createField("assetReference", {
      array: true,
      id: "brandCarousel",
      name: "Brand carousel",
      imagesOnly: true,
      size: { max: 20 },
    }),
  ],
} as const satisfies ExpandedContentModel;
