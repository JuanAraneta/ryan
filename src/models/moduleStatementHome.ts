import { componentLogoCarousel } from "./componentLogoCarousel";
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
    createField("entryReference", {
      id: "brandCarouselRef",
      name: "Brand carousel",
      linkContentType: [componentLogoCarousel],
    }),
  ],
} as const satisfies ExpandedContentModel;
