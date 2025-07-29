import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleHeroHome = {
  sys: {
    id: "moduleHeroHome",
  },
  name: "Module / Hero home",
  description:
    "Homepage Hero 50/50, which serves as the primary, top-of-the-fold content for the main homepage.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "headline", name: "Headline" }),
    createField("shortText", {
      id: "prompts",
      name: "Prompts",
      array: true,
      size: { min: 1, max: 3 },
      editorInterface: {
        settings: {
          helpText: "Animated AI chat prompts.",
        },
      },
    }),
    createField("entryReference", {
      array: true,
      id: "routingCards",
      name: "Routing Cards",
      linkContentType: ["componentRoutingItem"],
      size: { min: 2, max: 2 },
      editorInterface: {
        settings: {
          helpText: "Exactly 2 routing cards for the hero section.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
