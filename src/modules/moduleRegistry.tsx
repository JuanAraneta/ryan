import { FC } from "react";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";
import { type Inspector } from "@/utils/inspectorMode";

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

// Common props interface for all modules
export type ModuleProps<Data> = {
  data: Data;
  inspector: Inspector<NonNullable<Data[keyof Data]>>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModuleComponent<Data = any> = {
  component: FC<ModuleProps<Data>>;
  queryById: TadaDocumentNode<Data, { id: string }>;
};

type ModuleRegistry = Record<
  NonNullable<
    NonNullable<
      NonNullable<
        NonNullable<
          ResultOf<typeof PageModulesCollectionFragment>["items"][number]
        >["modulesCollection"]
      >["items"][number]
    >["__typename"]
  >,
  ModuleComponent | null
>;

const moduleRegistry: ModuleRegistry = {
  ModuleInsightsBento: {
    component: ModuleInsightsBento,
    queryById: GetModuleInsightsBentoById,
  },
  ModuleExpertsOverflow: {
    component: ModuleExpertsOverflow,
    queryById: GetModuleExpertsOverflowById,
  },
  ModuleCustomerStoriesCarousel: {
    component: ModuleCustomerStoriesCarousel,
    queryById: GetModuleCustomerStoriesOverflowById,
  },
  ModuleChapterGroup: {
    component: ModuleChapterGroup,
    queryById: GetModuleChapterGroupById,
  },
  ModuleStatementHome: {
    component: ModuleStatementHome,
    queryById: GetModuleStatementHomeById,
  },
  ModuleSoftwareServicesRoutingGrid: {
    component: ModuleSoftwareAndServicesRoutingGrid,
    queryById: GetModuleSoftwareServicesRoutingGridById,
  },
  ModulePlatform: {
    component: ModulePlatform,
    queryById: GetModulePlatformById,
  },
  ModuleServiceSoftwareRoutingCards: {
    component: ModuleServiceSoftwareRoutingCards,
    queryById: GetModuleServiceSoftwareRoutingCardsById,
  },
};

export default moduleRegistry;
