import { componentServiceDetails } from "../componentServiceDetails";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";
import { componentPageCore } from "./componentPageCore";

export const pageServiceDetails = {
  sys: { id: "pageServiceDetails" },
  name: "Page / Service details",
  description:
    'Page which details a service product. All pages of this type are nested under the "/software" path.',
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
      linkContentType: [componentServiceDetails],
    }),
  ],
} as const satisfies ExpandedContentModel;
