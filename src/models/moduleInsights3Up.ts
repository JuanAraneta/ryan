import { createField } from "./utils/createField";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { componentLink } from "./componentLink";
import { pageNewsAndInsights } from "./pages/pageNewsAndInsights";

export const moduleInsights3Up = {
  sys: { id: "moduleInsights3Up" },
  name: "Module / Insights 3-Up",
  description:
    "Featured insights module displaying a headline, CTA button, and exactly three insight cards.",
  fields: [
    createField("contentfulLabel"),
    createField("shortText", {
      id: "headline",
      name: "Headline",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "Main headline for the module. Recommended character count: 12-60 characters.",
        },
      },
    }),
    createField("entryReference", {
      id: "cta",
      name: "CTA",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      id: "insights",
      name: "Insights",
      linkContentType: [pageNewsAndInsights],
      array: true,
      size: { min: 3, max: 3 },
      required: true,
      editorInterface: {
        settings: {
          helpText: "Select exactly 3 insights to display in the module.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
