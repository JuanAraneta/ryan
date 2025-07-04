import { NotFound, notFoundMorpher } from "@/modules";
import { PageParams } from "@/types/generic";
import { FC } from "react";

// Types to be changed to match the actual types used in the application.

export type ModuleProps = any; // This is a placeholder for the module props type.
export type ComponentProps = any; // This is a placeholder for the component props type.
export type ModuleCodename = string; // This is a placeholder for the module codename.

type ModuleComponent<M, C> = {
  component: FC<C>;
  morpher?: (input: M, pageParams?: PageParams) => C;
};

type ModuleRegistry = Record<
  ModuleCodename,
  ModuleComponent<ModuleProps, ComponentProps>
>;

// Here define the moduleRegistry object, which is a mapping of module types to their corresponding components and morphers.
const moduleRegistry = {
  notFound: {
    component: NotFound,
    morpher: notFoundMorpher,
  },
} as ModuleRegistry;

export default moduleRegistry;
