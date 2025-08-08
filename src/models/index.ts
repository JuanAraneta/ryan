import { page } from "./page";

// models
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { componentIconTextWrap } from "./componentIconTextWrap";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
import { pageExpert } from "./pageExpert";
import { pageCustomerStory } from "./pageCustomerStory";
import { pageInsight } from "./pageInsight";
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
import { moduleInsights3Up } from "./moduleInsights3Up";
import { moduleGeneralVideoMission } from "./moduleGeneralVideoMission";

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
import { moduleStatementHome } from "./moduleStatementHome";
import { modulePlatform } from "./modulePlatform";
import { componentLogoCarousel } from "./componentLogoCarousel";
import { pageSoftware } from "./pageSoftware";
import { pageService } from "./pageService";
import {
  componentTestimonial,
  moduleSoftwareServicesRoutingGrid,
} from "./moduleSoftwareServicesRoutingGrid";
import {
  componentServiceSoftwareRoutingCard,
  moduleServiceSoftwareRoutingCards,
} from "./moduleServiceSoftwareRoutingCards";

// Components
const components: ExpandedContentModel[] = [
  componentCategorySolutionsHeadline,
  componentCategorySolutionsChapter,
  componentIconTextWrap,
  componentCategorySolutions2ColSubBody,
  componentCardDeviceMock,
  componentLink,
  componentNewsletterSignup,
  componentStatistic,
  componentRoutingItem,
  componentLogoCarousel,
  componentTestimonial,
  componentServiceSoftwareRoutingCard,
];

// Modules
const modules: ExpandedContentModel[] = [
  moduleChapterGroup,
  moduleContainer,
  moduleExpertsOverflow,
  moduleCustomerStoriesCarousel,
  moduleHeroHome,
  moduleInsightsBento,
  moduleInsights3Up,
  moduleStatementHome,
  moduleSoftwareServicesRoutingGrid,
  moduleServiceSoftwareRoutingCards,
  moduleGeneralVideoMission,
];

const pages: ExpandedContentModel[] = [
  page,
  pageExpert,
  pageCustomerStory,
  pageInsight,
  pageSoftware,
  pageService,
  modulePlatform,
];

// Other content types
const other: ExpandedContentModel[] = [
  categorySolutionsImageLink,
  categorySolutionsImageLinkGrid,
  constants,
  footer,
  seoMetadata,
  market,
  siteSettings,
  socialMediaLink,
  urlRedirect,
  script,
];

export const models = [...components, ...modules, ...pages, ...other].map(
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
