import { footer } from "./footer";
import { market } from "./market";
import { moduleContainer } from "./moduleContainer";
import { moduleHeroHome } from "./moduleHeroHome";
import { seoMetadata } from "./seoMetadata";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const page = {
  sys: {
    id: "page",
  },
  name: "Page",
  description:
    "Represents a single webpage on the site, such as a homepage, service page, landing page, or contact page. Supports flexible layouts through modular content, SEO metadata, market scoping, and localization.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      required: true,
      displayField: true,
      validations: [{ unique: true }],
      editorInterface: {
        settings: {
          helpText:
            "Internal title for content editors. Will be used as the visible H1 on the page.",
        },
      },
    }),
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
      id: "footer",
      name: "Footer",
      required: true,
      linkContentType: [footer],
      editorInterface: {
        settings: {
          helpText: "Footer that will be used on the page",
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
    createField("entryReference", {
      array: true,
      id: "pages",
      name: "Pages",
      size: { max: 100 },
      linkContentType: ["page"],
      editorInterface: {
        settings: {
          helpText:
            "Pages that will be child of the current page, e.g.: services/consulting, services/advisement",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
