import { market } from "./market";
import { pageContentCustomerStory } from "./pageContentCustomerStory";
import { pageContentExpert } from "./pageContentExpert";
import { pageContentInsight } from "./pageContentInsight";
import { pageContentModular } from "./pageContentModular";
import { pageContentService } from "./pageContentService";
import { pageContentSoftware } from "./pageContentSoftware";
import { seoMetadata } from "./seoMetadata";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const page = {
  sys: { id: "page" },
  name: "Page",
  description:
    "Represents a single webpage on the site, such as a homepage, service page, landing page, or contact page. Supports flexible layouts through modular content, SEO metadata, market scoping, and localization.",
  fields: [
    createField("contentfulLabel"),
    createField("shortText", {
      id: "slug",
      name: "Slug",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "The URL-friendly identifier for this page (e.g., about-us). Should be lowercase, with hyphens instead of spaces. No slashes.",
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
      id: "parent",
      name: "Parent route",
      linkContentType: ["page"],
      editorInterface: {
        settings: {
          helpText:
            'The page which owns this page, e.g. if this page represents a particular expert, it should be under the page whose slug is "experts" and has no parent.',
        },
      },
    }),
    createField("entryReference", {
      id: "pageContent",
      name: "Page content",
      linkContentType: [
        pageContentCustomerStory,
        pageContentExpert,
        pageContentInsight,
        pageContentModular,
        pageContentService,
        pageContentSoftware,
      ],
      editorInterface: {
        settings: {
          helpText:
            "The entry which defines the page content. If not fulfilled, the route for this page may return a 404.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
