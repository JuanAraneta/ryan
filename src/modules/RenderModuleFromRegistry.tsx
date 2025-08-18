import { FragmentOf, readFragment } from "gql.tada";
import moduleRegistry from "./moduleRegistry";
import { contentClient } from "@/lib/contentful/contentClient";
import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";

export const RenderModuleFromRegistry = async ({
  module: moduleFragment,
  locale,
  searchParams,
  currentPath,
}: {
  module: FragmentOf<typeof EntryCoreFragment> | null;
  locale: string;
  searchParams?: Record<string, string | string[]>;
  currentPath?: string;
}) => {
  const mod = readFragment(EntryCoreFragment, moduleFragment);
  if (!mod) return null;
  const type = mod.__typename;
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
      id: mod.sys.id,
      locale,
    });

    if (!result || !result.data) {
      console.error(
        `Module request failed for id "${mod.sys.id}" of type "${mod.__typename}"`,
        result,
      );
      return null;
    }

    return (
      <Component
        data={result.data}
        searchParams={searchParams}
        currentPath={currentPath}
      />
    );
  } catch (e) {
    console.error(
      `Failed to fetch module "${mod.sys.id}" with __typename "${mod.__typename}"`,
      e,
    );
    return null;
  }
};
