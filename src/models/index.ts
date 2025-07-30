import { page } from "./page";

// models
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { componentTitleAndBody } from "./componentTitleAndBody";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
import { componentExpert } from "./componentExpert";
import { componentCustomerStory } from "./componentCustomerStory";
import { componentInsight } from "./componentInsight";
import { componentLink } from "./componentLink";
import { componentNewsletterSignup } from "./componentNewsletterSignup";
import { componentStatistic } from "./componentStatistic";
import { componentRoutingItem } from "./componentRoutingItem";
import { moduleChapterGroup } from "./moduleChapterGroup";
import { moduleContainer } from "./moduleContainer";
import { moduleExpertsOverflow } from "./moduleExpertsOverflow";
import { moduleCustomerStoriesCarousel } from "./moduleCustomerStoriesCarousel";
import { moduleHeroHome } from "./moduleHeroHome";
import { moduleInsightsBento } from "./moduleInsightsBento";

import {
  categorySolutionsImageLinkGrid,
  categorySolutionsImageLink,
} from "./categorySolutionsImageLinkGrid";
import { constants } from "./constants";
import { footer } from "./footer";
import { seoMetadata } from "./seoMetadata";
import { market } from "./market";
import { siteSettings } from "./siteSettings";
import { socialMediaLink } from "./socialMediaLink";
import { urlRedirect } from "./urlRedirect";
import { script } from "./script";

// utils
import { contentModelComposer } from "./utils/contentModelComposer";
import type { ExpandedContentModel } from "./types/ExpandedContentModel";

// Components
const components: ExpandedContentModel[] = [
  componentCategorySolutionsHeadline,
  componentCategorySolutionsChapter,
  componentTitleAndBody,
  componentCategorySolutions2ColSubBody,
  componentCardDeviceMock,
  componentExpert,
  componentCustomerStory,
  componentInsight,
  componentLink,
  componentNewsletterSignup,
  componentStatistic,
  componentRoutingItem,
];

// Modules
const modules: ExpandedContentModel[] = [
  moduleChapterGroup,
  moduleContainer,
  moduleExpertsOverflow,
  moduleCustomerStoriesCarousel,
  moduleHeroHome,
  moduleInsightsBento,
];

// Other content types
const other: ExpandedContentModel[] = [
  categorySolutionsImageLink,
  categorySolutionsImageLinkGrid,
  page,
  constants,
  footer,
  seoMetadata,
  market,
  siteSettings,
  socialMediaLink,
  urlRedirect,
  script,
];

export const models = [...components, ...modules, ...other].map(
  contentModelComposer,
);

export const locales = [
  {
    name: "English (United States)",
    internal_code: "en-US",
    code: "en-US",
    fallbackCode: null,
    default: true,
    contentManagementApi: true,
    contentDeliveryApi: true,
    optional: false,
  },
];
