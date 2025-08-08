import { moduleContainer } from "./moduleContainer";
import { moduleHeroHome } from "./moduleHeroHome";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageContentModular = {
  sys: { id: "pageContentModular" },
  name: "Page content / Modular",
  description:
    "The most open-ended of the page-content types. Allows for full customization of page-content.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "hero",
      name: "Hero",
      required: true,
      linkContentType: [moduleHeroHome],
      editorInterface: {
        settings: {
          helpText: "Hero section for the page.",
        },
      },
    }),
    createField("entryReference", {
      array: true,
      id: "moduleContainers",
      name: "Module containers",
      size: { max: 25 },
      linkContentType: [moduleContainer],
      editorInterface: {
        settings: {
          helpText: "Module containers that compose the page-content layout.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
