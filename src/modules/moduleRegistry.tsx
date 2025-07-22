import { FC } from "react";
import { ResultOf, TadaDocumentNode } from "gql.tada";
import { GetModuleExpertsOverflowById } from "@/lib/contentful/query/GetModuleExpertsOverflowById";
import { GetModuleCustomerStoriesOverflowById } from "@/lib/contentful/query/GetModuleCustomerStoriesOverflowById";

// Modules
import { HeroHome } from "./HeroHome";
import { ModuleExpertsOverflow } from "./ExpertsOverflow";
import { ModuleCustomerStoriesCarousel } from "./ModuleCustomerStoriesCarousel";

type ModuleComponent<Data = unknown> = {
  component: FC<{ data: Data }>;
  queryById: TadaDocumentNode<Data, { id: string }>;
};

type ModuleRegistry = {
  ModuleExpertsOverflow: ModuleComponent<
    ResultOf<typeof GetModuleExpertsOverflowById>
  >;
  ModuleCustomerStoriesCarousel: ModuleComponent<
    ResultOf<typeof GetModuleCustomerStoriesOverflowById>
  >;
  HeroHome: ModuleComponent<ResultOf<typeof GetModuleHeroHomeById>>;
};

const moduleRegistry: ModuleRegistry = {
  HeroHome: {
    component: HeroHome,
    queryById: GetModuleHeroHomeById,
  },
  ModuleExpertsOverflow: {
    component: ModuleExpertsOverflow,
    queryById: GetModuleExpertsOverflowById,
  },
  ModuleCustomerStoriesCarousel: {
    component: ModuleCustomerStoriesCarousel,
    queryById: GetModuleCustomerStoriesOverflowById,
  },
};

export default moduleRegistry;
