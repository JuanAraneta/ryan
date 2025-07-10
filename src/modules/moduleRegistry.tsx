import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";
import { FC } from "react";
import { ModuleExpertsOverflow } from "./ExpertsOverflow";
import { GetModuleExpertsOverflowById } from "@/lib/contentful/query/GetModuleExpertsOverflowById";

type ModuleComponent<Data = any> = {
  component: FC<{ data: Data }>;
  queryById: TadaDocumentNode<Data, { id: string }>;
};

type ModuleRegistry = Record<
  NonNullable<
    NonNullable<ResultOf<typeof PageModulesCollectionFragment>["items"]>[number]
  >["__typename"],
  ModuleComponent | null
>;

const moduleRegistry: ModuleRegistry = {
  ModuleExpertsOverflow: {
    component: ModuleExpertsOverflow,
    queryById: GetModuleExpertsOverflowById,
  },
};

export default moduleRegistry;
