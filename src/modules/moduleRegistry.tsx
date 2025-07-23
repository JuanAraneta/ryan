import { FC } from "react";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";
import { GetModuleExpertsOverflowById } from "@/lib/contentful/query/GetModuleExpertsOverflowById";
import { GetModuleCustomerStoriesOverflowById } from "@/lib/contentful/query/GetModuleCustomerStoriesOverflowById";
import { ModuleChapterGroup } from "./ModuleChapterGroup";
import { GetModuleChapterGroupById } from "@/lib/contentful/query/GetModuleChapterGroupById";

// Modules
import { ModuleExpertsOverflow } from "./ExpertsOverflow";
import { ModuleCustomerStoriesCarousel } from "./ModuleCustomerStoriesCarousel";

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
};

export default moduleRegistry;
