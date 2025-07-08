import { contentClient } from "@/lib/contentful/contentClient";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import moduleRegistry from "@/modules/moduleRegistry";
import { ResultOf } from "gql.tada";

export const ModuleRenderer = async ({
  data,
}: {
  data: ResultOf<typeof PageModulesCollectionFragment>;
}) => {
  return (
    <>
      {await Promise.allSettled(
        data.items.map(async (module, index) => {
          if (!module) return null;
          const type = module.__typename;
          if (!moduleRegistry[type]) {
            console.log(`Module type of "${type}" not found in registry`);
            return null;
          }

          const { component: Component, queryById } = moduleRegistry[type];

          const result = await contentClient.query(queryById, {
            id: module.sys.id,
          });

          if (!result || !result.data) {
            console.error(`Module request failed for id "${module.sys.id}"`);
            return null;
          }

          return <Component key={index} data={result.data} />;
        })
      ).then((result) =>
        result
          .filter((render) => render.status === "fulfilled")
          .map((render) => render.value)
      )}
    </>
  );
};
