import { moduleChapterGroup } from "./moduleChapterGroup";
import { moduleCustomerStoriesCarousel } from "./moduleCustomerStoriesCarousel";
import { moduleExpertsOverflow } from "./moduleExpertsOverflow";
import { themeBackground } from "./themeBackground";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleContainer = {
  sys: {
    id: "moduleContainer",
  },
  name: "Module / Container",
  description:
    "A container which owns groups of modules but supplies them with a theme & background color.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "backgroundColorReference",
      name: "Background color",
      linkContentType: [themeBackground],
    }),
    createField("entryReference", {
      array: true,
      id: "modules",
      name: "Modules",
      size: { max: 5 },
      linkContentType: [
        moduleExpertsOverflow,
        moduleCustomerStoriesCarousel,
        moduleChapterGroup,
      ],
    }),
  ],
} as const satisfies ExpandedContentModel;
