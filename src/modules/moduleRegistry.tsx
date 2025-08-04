import { FC } from "react";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";

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
import { ModuleSoftwareAndServicesRoutingGrid } from "./ModuleSoftwareAndServicesRoutingGrid/ModuleSoftwareAndServicesRoutingGrid";
import { GetModuleSoftwareServicesRoutingGridById } from "./ModuleSoftwareAndServicesRoutingGrid/GetModuleSoftwareServicesRoutingGridById";
import { ModulePlatform, GetModulePlatformById } from "./ModulePlatform";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModuleComponent<Data = any> = {
  // TODO: Check if there is a better way to type this
  component: FC<{ data: Data }>;
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
};

export default moduleRegistry;
