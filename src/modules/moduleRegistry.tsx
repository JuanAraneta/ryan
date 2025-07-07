import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ResultOf, TadaDocumentNode } from "gql.tada";
import { FC } from "react";

// Types to be changed to match the actual types used in the application.

export type ModuleProps = any; // This is a placeholder for the module props type.
export type ComponentProps = any; // This is a placeholder for the component props type.

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

// FIXME - Update the Modules array under Page in Contentful to have a specific whitelist of supported types to fix this
const moduleRegistry: ModuleRegistry = {
  Page: null,
  Footer: null,
  Header: null,
  Market: null,
  Script: null,
  SeoMetadata: null,
  SiteSettings: null,
  SocialMediaLink: null,
  UrlRedirect: null,
};

export default moduleRegistry;
