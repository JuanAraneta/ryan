// models
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { componentTitleAndBody } from "./componentTitleAndBody";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
import { componentExpert } from "./componentExpert";
import { componentCustomerStory } from "./componentCustomerStory";
import { componentLink } from "./componentLink";
import { componentStatistic } from "./componentStatistic";
import { componentRoutingItem } from "./componentRoutingItem";
import { moduleChapterGroup } from "./moduleChapterGroup";
import { moduleContainer } from "./moduleContainer";
import { moduleExpertsOverflow } from "./moduleExpertsOverflow";
import { moduleCustomerStoriesCarousel } from "./moduleCustomerStoriesCarousel";
import { moduleHeroHome } from "./moduleHeroHome";
import {
  categorySolutionsImageLinkGrid,
  categorySolutionsImageLink,
} from "./categorySolutionsImageLinkGrid";
import { page } from "./page";
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
  componentLink,
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
