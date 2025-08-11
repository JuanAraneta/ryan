import { componentCustomerStory } from "../componentCustomerStory";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";
import { componentPageCore } from "./componentPageCore";

export const pageCustomerStory = {
  sys: { id: "pageCustomerStory" },
  name: "Page / Customer story",
  description:
    'Page representation for customer-stories. All pages of this type are nested under the "/customer-story" path.',
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
      linkContentType: [componentCustomerStory],
    }),
  ],
} as const satisfies ExpandedContentModel;
