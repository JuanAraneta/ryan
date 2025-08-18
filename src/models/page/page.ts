import { market } from "../market";
import { seoMetadata } from "../seoMetadata";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";
import { pageContentCustomerStory } from "./pageContentCustomerStory";
import { pageContentExpert } from "./pageContentExpert";
import { pageContentModular } from "./pageContentModular";
import { pageContentNewsAndInsights } from "./pageContentNewsAndInsights";
import { pageContentServiceDetails } from "./pageContentServiceDetails";
import { pageContentSoftwareDetails } from "./pageContentSoftwareDetails";

export const page = {
  sys: { id: "page" },
  name: "Page",
  description:
    "Represents the core data for each page on the site. Page URL is determined based upon market, the type of content provided, and then path fields.",
  fields: [
    createField("contentfulLabel"),
    createField("shortText", {
      id: "path",
      name: "Path",
      required: true,
      validations: [{ regexp: { pattern: "^[a-z0-9-]+([\\/][a-z0-9-]+)*$" } }],
      editorInterface: {
        settings: {
          helpText:
            "The path for this page. The page-type which implements this page as well as the markets array will determine the prefix for this path.",
        },
      },
    }),
    createField("entryReference", {
      id: "market",
      name: "Market",
      required: true,
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
    createField("entryReference", {
      id: "content",
      name: "Content",
      linkContentType: [
        pageContentCustomerStory,
        pageContentExpert,
        pageContentModular,
        pageContentNewsAndInsights,
        pageContentServiceDetails,
        pageContentSoftwareDetails,
      ],
    }),
  ],
} as const satisfies ExpandedContentModel;
