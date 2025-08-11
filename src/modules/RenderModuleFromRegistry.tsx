import { ModuleLookupFragment } from "@/lib/contentful/fragments/ModuleLookupFragment";
import { FragmentOf, readFragment } from "gql.tada";
import moduleRegistry from "./moduleRegistry";
import { contentClient } from "@/lib/contentful/contentClient";

export const RenderModuleFromRegistry = async ({
  module: moduleFragment,
  locale,
}: {
  module: FragmentOf<typeof ModuleLookupFragment> | null;
  locale: string;
}) => {
  const module = readFragment(ModuleLookupFragment, moduleFragment);
  if (!module) return null;
  const type = module.__typename;
  if (!type || !moduleRegistry[type]) {
    console.warn(`Module type of "${type}" not found in registry`);
    return null;
  }

  const registeredModule = moduleRegistry[type];

  if (!registeredModule) {
    console.warn(`Unregistered module type "${type}" requested for page`);
    return null;
  }

  const { component: Component, queryById } = registeredModule;

  try {
    const result = await contentClient.query(queryById, {
      id: module.sys.id,
      locale,
    });

    if (!result || !result.data) {
      console.error(
        `Module request failed for id "${module.sys.id}" of type "${module.__typename}"`,
        result,
      );
      return null;
    }

    return <Component data={result.data} />;
  } catch (e) {
    console.error(
      `Failed to fetch module "${module.sys.id}" with __typename "${module.__typename}"`,
      e,
    );
    return null;
  }
};
