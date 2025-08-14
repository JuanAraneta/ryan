import { moduleContainer } from "../moduleContainer";
import { moduleHeroHome } from "../moduleHeroHome";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentModular = {
  sys: { id: "pageContentModular" },
  name: "Page content / Modular",
  description:
    "The most generic and customizable page-content type which requires no inherent routing prefix.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "hero",
      name: "Hero",
      linkContentType: [moduleHeroHome],
      editorInterface: {
        settings: {
          helpText: "Header that will be used on the page",
        },
      },
    }),
    createField("entryReference", {
      array: true,
      id: "moduleContainers",
      name: "Module containers",
      size: { max: 20 },
      linkContentType: [moduleContainer],
      editorInterface: {
        settings: { helpText: "Modules that will compose a page layout" },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
