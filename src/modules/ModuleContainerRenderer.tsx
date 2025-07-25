import { contentClient } from "@/lib/contentful/contentClient";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { ThemeBackgroundFragment } from "@/lib/contentful/fragments/ThemeBackgroundFragment";
import moduleRegistry from "@/modules/moduleRegistry";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";

export const ModuleContainerRenderer = async ({
  data,
}: {
  data: ResultOf<typeof PageModulesCollectionFragment>;
}) => {
  return (
    <>
      {await Promise.allSettled(
        data.items.map(async (moduleContainer) =>
          !moduleContainer ||
          !moduleContainer.modulesCollection?.items ? null : (
            <div
              key={moduleContainer.sys.id}
              className={cx(
                readFragment(
                  ThemeBackgroundFragment,
                  moduleContainer.backgroundColorReference,
                )?.background,
              )}
            >
              {await Promise.allSettled(
                moduleContainer?.modulesCollection?.items.map(
                  async (module, index) => {
                    if (!module) return null;
                    const type = module.__typename;
                    if (!moduleRegistry[type]) {
                      console.warn(
                        `Module type of "${type}" not found in registry`,
                      );
                      return null;
                    }

                    const registeredModule = moduleRegistry[type];

                    if (!registeredModule) {
                      console.warn(
                        `Unregistered module type "${type}" requested for page`,
                      );
                      return null;
                    }

                    const { component: Component, queryById } =
                      registeredModule;

                    const result = await contentClient.query(queryById, {
                      id: module.sys.id,
                    });

                    if (!result || !result.data) {
                      console.error(
                        `Module request failed for id "${module.sys.id}"`,
                        result,
                      );
                      return null;
                    }

                    return <Component key={index} data={result.data} />;
                  },
                ),
              ).then((result) =>
                result
                  .filter((render) => render.status === "fulfilled")
                  .map((render) => render.value),
              )}
            </div>
          ),
        ),
      ).then((result) =>
        result
          .filter((render) => render.status === "fulfilled")
          .map((render) => render.value),
      )}
    </>
  );
};
