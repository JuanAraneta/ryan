// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IFooterFields {
  /** title */
  title: string;
}

/** Defines the bottom section of a page, typically used for global navigation, contact details, social media links, legal disclaimers, and market-specific information. Designed to be flexible and reusable across markets and languages. */

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "footer";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IHeaderFields {
  /** title */
  title: string;
}

/** Defines the top section of a page, typically including branding, navigation, and optional call-to-action elements. This module is reusable and configurable, allowing variations per market, language, or page type. */

export interface IHeader extends Entry<IHeaderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "header";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IMarketFields {
  /** Name */
  name: string;

  /** Slug */
  slug: string;

  /** Social Media Links */
  socialMediaLinks?: ISocialMediaLink[] | undefined;
}

/** Represents a geographical market or country (e.g., United States, Brazil, Canada) used to associate region-specific content like pages, social links, site settings, and SEO metadata. Language variations are handled separately through Contentful localization. */

export interface IMarket extends Entry<IMarketFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "market";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageFields {
  /** Titile */
  title: string;

  /** Slug */
  slug: string;

  /** Slug prefix */
  slugPrefix?: string | undefined;

  /** Market */
  market: IMarket;

  /** SEO metadata */
  seoMetadata: ISeoMetadata;

  /** Header */
  header: IHeader;

  /** Footer */
  footer: IFooter;

  /** Modules */
  modules?: Entry<{ [fieldId: string]: unknown }>[] | undefined;

  /** Pages */
  pages?: IPage[] | undefined;
}

/** Represents a single webpage on the site, such as a homepage, service page, landing page, or contact page. Supports flexible layouts through modular content, SEO metadata, market scoping, and localization. */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "page";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IScriptFields {
  /** Id */
  id: string;

  /** Source */
  source: string;

  /** Strategy */
  strategy: "beforeInteractive" | "afterInteractive" | "lazyOnload" | "worker";

  /** Inline script */
  inlineScript?: string | undefined;

  /** Execution strategy */
  executionStrategy?: "async" | "defer" | undefined;

  /** Cross origin */
  crossOrigin?: "anonymous" | "use-credentials" | undefined;
}

/** Manages custom scripts (e.g., analytics, cookie consent, marketing tags) that should be injected into the website. Supports external sources and inline code. Use with caution to ensure performance and security best practices. */

export interface IScript extends Entry<IScriptFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "script";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISeoMetadataFields {
  /** Page title */
  pageTitle: string;

  /** SEO title */
  seoTitle: string;

  /** SEO Description */
  seoDescription: string;

  /** Featured image */
  featuredImage: Asset;

  /** Canonical URL */
  canonicalUrl: string;

  /** No index */
  noIndex: boolean;

  /** No follow */
  noFollow: boolean;
}

/** Stores SEO-related information such as meta titles, descriptions, canonical URLs, and Open Graph / social sharing data. This content type helps optimize how pages appear in search engines and social platforms, improving visibility and click-through rates. */

export interface ISeoMetadata extends Entry<ISeoMetadataFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "seoMetadata";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISiteSettingsFields {
  /** Site name */
  siteName: string;

  /** Facebook pixel ID */
  facebookPixelId?: string | undefined;

  /** Google tag manager ID */
  googleTagManagerId?: string | undefined;

  /** Google analytics ID */
  googleAnalyticsId?: string | undefined;

  /** Scripts */
  scripts?: IScript[] | undefined;

  /** Default market */
  market: IMarket;
}

/** Stores global configuration and shared settings for the site, including confirmation IDs for external tools (like analytics), social media links and other site-wide defaults. This content type ensures consistent configuration across all pages and regions. */

export interface ISiteSettings extends Entry<ISiteSettingsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "siteSettings";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISocialMediaLinkFields {
  /** Platform name */
  platformName: string;

  /** URL */
  url: string;

  /** Icon */
  icon: Asset;
}

/** Stores information for individual social media profiles per region/market. This allows localized branding and targeting by associating links with specific markets (e.g., US Facebook page, UK LinkedIn page). */

export interface ISocialMediaLink extends Entry<ISocialMediaLinkFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "socialMediaLink";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IUrlRedirectFields {
  /** Slug */
  slug: string;

  /** Destination */
  destination: string;

  /** Redirect type	 */
  redirectType: "temporary" | "permanent";

  /** Active */
  active: boolean;

  /** Start date */
  startDate?: string | undefined;

  /** End date */
  endDate?: string | undefined;
}

/** Defines a redirect rule to guide users and search engines from one URL to another. Useful for maintaining SEO when content is moved, renamed, or removed. Supports permanent (301) and temporary (302) redirects, as well as region- and language-specific use cases. */

export interface IUrlRedirect extends Entry<IUrlRedirectFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "urlRedirect";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE =
  | "footer"
  | "header"
  | "market"
  | "page"
  | "script"
  | "seoMetadata"
  | "siteSettings"
  | "socialMediaLink"
  | "urlRedirect";

export type IEntry =
  | IFooter
  | IHeader
  | IMarket
  | IPage
  | IScript
  | ISeoMetadata
  | ISiteSettings
  | ISocialMediaLink
  | IUrlRedirect;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
