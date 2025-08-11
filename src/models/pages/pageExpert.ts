import { componentExpert } from "../componentExpert";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";
import { componentPageCore } from "./componentPageCore";

export const pageExpert = {
  sys: { id: "pageExpert" },
  name: "Page / Expert",
  description:
    'Page representation for expert-bios. All pages of this type are nested under the "/expert" path.',
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
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentExpert],
    }),
  ],
} as const satisfies ExpandedContentModel;
