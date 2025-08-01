import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";
import { moduleChapterGroup } from "./moduleChapterGroup";
import { moduleCustomerStoriesCarousel } from "./moduleCustomerStoriesCarousel";
import { moduleExpertsOverflow } from "./moduleExpertsOverflow";
import { moduleInsightsBento } from "./moduleInsightsBento";
import { moduleStatementHome } from "./moduleStatementHome";
import { modulePlatform } from "./modulePlatform";

export const moduleContainer = {
  sys: {
    id: "moduleContainer",
  },
  name: "Module / Container",
  description:
    "A container which owns groups of modules but supplies them with a theme & background color.",
  fields: [
    createField("contentfulLabel"),
    createField("moduleBackground", { variant: "all" }),
    createField("entryReference", {
      array: true,
      id: "modules",
      name: "Modules",
      size: { max: 5 },
      linkContentType: [
        moduleExpertsOverflow,
        moduleCustomerStoriesCarousel,
        moduleChapterGroup,
        moduleInsightsBento,
        moduleStatementHome,
        modulePlatform,
      ],
    }),
  ],
} as const satisfies ExpandedContentModel;
