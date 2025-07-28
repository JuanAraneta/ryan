import type { ContentModel } from "contentful-code-models";
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
import { categorySolutionsImageLink } from "./categorySolutionsImageLink";
import { categorySolutionsImageLinkGrid } from "./categorySolutionsImageLinkGrid";
import { themeBackground } from "./themeBackground";
import { page } from "./page";
import { constants } from "./constants";
import { header } from "./header";
import { footer } from "./footer";
import { seoMetadata } from "./seoMetadata";
import { market } from "./market";
import { siteSettings } from "./siteSettings";
import { socialMediaLink } from "./socialMediaLink";
import { urlRedirect } from "./urlRedirect";
import { script } from "./script";

// Components
const components: ContentModel[] = [
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
const modules: ContentModel[] = [
  moduleChapterGroup,
  moduleContainer,
  moduleExpertsOverflow,
  moduleCustomerStoriesCarousel,
  moduleHeroHome,
  moduleInsightsBento,
];

// Other content types
const other: ContentModel[] = [
  categorySolutionsImageLink,
  categorySolutionsImageLinkGrid,
  themeBackground,
  page,
  constants,
  header,
  footer,
  seoMetadata,
  market,
  siteSettings,
  socialMediaLink,
  urlRedirect,
  script,
];

export const models: ContentModel[] = [...components, ...modules, ...other];

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
