// models
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { moduleChapterGroup } from "./moduleChapterGroup";
import {
  categorySolutionsImageLinkGrid,
  categorySolutionsImageLink,
} from "./categorySolutionsImageLinkGrid";
import { componentTitleAndBody } from "./componentTitleAndBody";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
import { moduleContainer } from "./moduleContainer";
import { componentExpert } from "./componentExpert";
import { componentCustomerStory } from "./componentCustomerStory";
import { moduleExpertsOverflow } from "./moduleExpertsOverflow";
import { moduleCustomerStoriesCarousel } from "./moduleCustomerStoriesCarousel";
import { page } from "./page";
import { constants } from "./constants";
import { componentLink } from "./componentLink";
import { componentStatistic } from "./componentStatistic";
import { header } from "./header";
import { footer } from "./footer";
import { seoMetadata } from "./seoMetadata";
import { market } from "./market";
import { siteSettings } from "./siteSettings";
import { socialMediaLink } from "./socialMediaLink";
import { urlRedirect } from "./urlRedirect";
import { script } from "./script";
// utils
import { contentModelComposer } from "./utils/contentModelComposer";

export const models = [
  componentCategorySolutionsHeadline,
  componentCategorySolutionsChapter,
  moduleChapterGroup,
  categorySolutionsImageLinkGrid,
  categorySolutionsImageLink,
  componentTitleAndBody,
  componentCategorySolutions2ColSubBody,
  componentCardDeviceMock,
  moduleContainer,
  componentExpert,
  componentCustomerStory,
  moduleExpertsOverflow,
  moduleCustomerStoriesCarousel,
  page,
  constants,
  componentLink,
  componentStatistic,
  header,
  footer,
  seoMetadata,
  market,
  siteSettings,
  socialMediaLink,
  urlRedirect,
  script,
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
