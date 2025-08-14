import { TadaDocumentNode } from "gql.tada";

import {
  ModuleExpertsOverflow,
  GetModuleExpertsOverflowById,
} from "./ExpertsOverflow";
import {
  ModuleCustomerStoriesCarousel,
  GetModuleCustomerStoriesOverflowById,
} from "./ModuleCustomerStoriesCarousel";
import {
  ModuleChapterGroup,
  GetModuleChapterGroupById,
} from "./ModuleChapterGroup";
import {
  ModuleInsightsBento,
  GetModuleInsightsBentoById,
} from "./ModuleInsightsBento";
import {
  ModuleStatementHome,
  GetModuleStatementHomeById,
} from "./ModuleStatementHome";
import {
  ModuleSoftwareAndServicesRoutingGrid,
  GetModuleSoftwareServicesRoutingGridById,
} from "./ModuleSoftwareAndServicesRoutingGrid";
import { ModulePlatform, GetModulePlatformById } from "./ModulePlatform";
import {
  ModuleServiceSoftwareRoutingCards,
  GetModuleServiceSoftwareRoutingCardsById,
} from "./ModuleServiceSoftwareRoutingCards";
import {
  ModuleInsights3Up,
  GetModuleInsights3UpById,
} from "./ModuleInsights3Up";
import {
  ModuleCustomerStoriesCarouselShort,
  GetModuleCustomerStoriesCarouselShortById,
} from "./ModuleCustomerStoriesCarouselShort";
import {
  ModuleGeneralVideoMission,
  GetModuleGeneralVideoMissionById,
} from "./ModuleGeneralVideoMission";
import { introspection_types } from "@/graphql-env";
import { ModuleHeroHome } from "./ModuleHeroHome";
import { GetModuleHeroHomeById } from "./ModuleHeroHome/GetModuleHeroHomeById";

type ModuleComponent<Data> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: (props: { data: Data }) => any;
  queryById: TadaDocumentNode<Data, { id: string }>;
};

type ModuleRegistry = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [EntryType in introspection_types["Entry"]["possibleTypes"]]?: ModuleComponent<any>;
};

// Using this helper ensures that your component & query align properly
const constructEntry = <Data,>(
  component: ModuleComponent<Data>["component"],
  queryById: ModuleComponent<Data>["queryById"],
) => ({ component, queryById });

const moduleRegistry: ModuleRegistry = {
  ModuleHeroHome: constructEntry(ModuleHeroHome, GetModuleHeroHomeById),
  ModuleInsightsBento: constructEntry(
    ModuleInsightsBento,
    GetModuleInsightsBentoById,
  ),
  ModuleExpertsOverflow: constructEntry(
    ModuleExpertsOverflow,
    GetModuleExpertsOverflowById,
  ),
  ModuleCustomerStoriesCarousel: constructEntry(
    ModuleCustomerStoriesCarousel,
    GetModuleCustomerStoriesOverflowById,
  ),
  ModuleChapterGroup: constructEntry(
    ModuleChapterGroup,
    GetModuleChapterGroupById,
  ),
  ModuleStatementHome: constructEntry(
    ModuleStatementHome,
    GetModuleStatementHomeById,
  ),
  ModuleSoftwareServicesRoutingGrid: constructEntry(
    ModuleSoftwareAndServicesRoutingGrid,
    GetModuleSoftwareServicesRoutingGridById,
  ),
  ModulePlatform: constructEntry(ModulePlatform, GetModulePlatformById),
  ModuleServiceSoftwareRoutingCards: constructEntry(
    ModuleServiceSoftwareRoutingCards,
    GetModuleServiceSoftwareRoutingCardsById,
  ),
  ModuleInsights3Up: constructEntry(
    ModuleInsights3Up,
    GetModuleInsights3UpById,
  ),
  ModuleCustomerStoriesCarouselShort: constructEntry(
    ModuleCustomerStoriesCarouselShort,
    GetModuleCustomerStoriesCarouselShortById,
  ),
  ModuleGeneralVideoMission: constructEntry(
    ModuleGeneralVideoMission,
    GetModuleGeneralVideoMissionById,
  ),
};

export default moduleRegistry;
