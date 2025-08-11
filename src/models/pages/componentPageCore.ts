import { market } from "../market";
import { seoMetadata } from "../seoMetadata";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const componentPageCore = {
  sys: { id: "componentPageCore" },
  name: "Component / Page core",
  description: "Represents the core data for each page on the site",
  fields: [
    createField("contentfulLabel"),
    createField("shortText", {
      id: "path",
      name: "Path",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "The path for this page. The page-type which implements this page as well as the markets array will determine the prefix for this path.",
        },
      },
    }),
    createField("entryReference", {
      id: "markets",
      name: "Markets",
      array: true,
      required: true,
      size: { min: 1, max: 10 },
      linkContentType: [market],
      editorInterface: {
        settings: {
          helpText:
            "The regional market this page belongs to (e.g., United States, Brazil). Required for routing and market-specific content.",
        },
      },
    }),
    createField("entryReference", {
      id: "seoMetadata",
      name: "SEO metadata",
      required: true,
      linkContentType: [seoMetadata],
      editorInterface: {
        settings: {
          helpText:
            "Optional override for SEO settings. If not set, the market’s default SEO settings will apply.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
