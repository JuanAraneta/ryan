// models
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { componentIconTextWrap } from "./componentIconTextWrap";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
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
import { wistiaVideo } from "./assets/wistiaVideo";

import {
  categorySolutionsImageLinkGrid,
  categorySolutionsImageLink,
} from "./categorySolutionsImageLinkGrid";
import { constants } from "./constants";
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
import {
  componentTestimonial,
  moduleSoftwareServicesRoutingGrid,
} from "./moduleSoftwareServicesRoutingGrid";
import {
  componentServiceSoftwareRoutingCard,
  moduleServiceSoftwareRoutingCards,
} from "./moduleServiceSoftwareRoutingCards";
import { componentCustomerStoryCard } from "./componentCustomerStoryCard";
import { moduleCustomerStoriesCarouselShort } from "./moduleCustomerStoriesCarouselShort";
import { page } from "./page";
import { pageContentModular } from "./page/pageContentModular";
import { pageContentExpert } from "./page/pageContentExpert";
import { pageContentCustomerStory } from "./page/pageContentCustomerStory";
import { pageContentNewsAndInsights } from "./page/pageContentNewsAndInsights";
import { pageContentSoftwareDetails } from "./page/pageContentSoftwareDetails";
import { pageContentServiceDetails } from "./page/pageContentServiceDetails";
import { componentCustomerStory } from "./componentCustomerStory";
import { componentExpert } from "./componentExpert";
import { componentNewsAndInsights } from "./componentNewsAndInsights";
import { componentServiceDetails } from "./componentServiceDetails";
import { componentSoftwareDetails } from "./componentSoftwareDetails";

// Assets
const assets: ExpandedContentModel[] = [wistiaVideo];

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
  componentCustomerStoryCard,
  componentCustomerStory,
  componentExpert,
  componentNewsAndInsights,
  componentServiceDetails,
  componentSoftwareDetails,
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
  moduleCustomerStoriesCarouselShort,
  moduleGeneralVideoMission,
  modulePlatform,
];

const pageAndContent: ExpandedContentModel[] = [
  page,
  pageContentCustomerStory,
  pageContentExpert,
  pageContentModular,
  pageContentNewsAndInsights,
  pageContentSoftwareDetails,
  pageContentServiceDetails,
];

// Other content types
const other: ExpandedContentModel[] = [
  categorySolutionsImageLink,
  categorySolutionsImageLinkGrid,
  constants,
  seoMetadata,
  market,
  siteSettings,
  socialMediaLink,
  urlRedirect,
  script,
];

export const models = [
  ...components,
  ...modules,
  ...other,
  ...assets,
  ...pageAndContent,
  ...other,
].map(contentModelComposer);

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
