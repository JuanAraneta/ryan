import { FC } from "react";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";

import { GetModuleChapterGroupById } from "@/modules/ModuleChapterGroup/GetModuleChapterGroupById";

import {
  ModuleExpertsOverflow,
  GetModuleExpertsOverflowById,
} from "./ExpertsOverflow";
import {
  ModuleCustomerStoriesCarousel,
  GetModuleCustomerStoriesOverflowById,
} from "./ModuleCustomerStoriesCarousel";
import { ModuleChapterGroup } from "./ModuleChapterGroup";
import {
  ModuleInsightsBento,
  GetModuleInsightsBentoById,
} from "./ModuleInsightsBento";
import {
  ModuleStatementHome,
  GetModuleStatementHomeById,
} from "./ModuleStatementHome";

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
};

export default moduleRegistry;
