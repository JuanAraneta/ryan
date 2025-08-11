import { moduleContainer } from "../moduleContainer";
import { moduleHeroHome } from "../moduleHeroHome";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";
import { componentPageCore } from "./componentPageCore";

export const pageModular = {
  sys: { id: "pageModular" },
  name: "Page / Modular",
  description:
    "The most generic and customizable page type which requires no inherent routing prefix.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "componentPageCore",
      name: "Component / Page core",
      required: true,
      linkContentType: [componentPageCore],
      editorInterface: {
        settings: {
          helpText:
            "The path for this page. The page-type which implements this page as well as the markets array will determine the prefix for this path.",
        },
      },
    }),
    createField("entryReference", {
      id: "hero",
      name: "Hero",
      required: true,
      linkContentType: [moduleHeroHome],
      editorInterface: {
        settings: {
          helpText: "Header that will be used on the page",
        },
      },
    }),
    createField("entryReference", {
      array: true,
      id: "modules",
      name: "Modules",
      size: { max: 20 },
      linkContentType: [moduleContainer],
      editorInterface: {
        settings: { helpText: "Modules that will compose a page layout" },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
