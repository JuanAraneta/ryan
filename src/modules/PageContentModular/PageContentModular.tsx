import { backgroundDescriptionMapToClass } from "@/utils/backgroundDescriptionMapToClass";
import { cx } from "cva";
import { contentClient } from "@/lib/contentful/contentClient";
import { GetPageContentModularByIdQuery } from "./GetPageContentModularById";
import { RenderModuleFromRegistry } from "../RenderModuleFromRegistry";

export const PageContentModular = async ({
  locale,
  id,
}: {
  id: string;
  locale: string;
}) => {
  const data = (
    await contentClient.query(GetPageContentModularByIdQuery, {
      id,
      locale,
    })
  ).data;

  if (!data) {
    console.error(
      `Failed query ${GetPageContentModularByIdQuery} for id "${id}"`,
    );
    return null;
  }

  return (
    <>
      {data.pageContentModular?.hero && (
        <RenderModuleFromRegistry
          module={data.pageContentModular.hero}
          locale={locale}
        />
      )}
      {(data.pageContentModular?.moduleContainersCollection?.items ?? []).map(
        (moduleContainer) =>
          !moduleContainer ||
          !moduleContainer.modulesCollection?.items ? null : (
            <div
              key={moduleContainer.sys.id}
              className={cx(
                backgroundDescriptionMapToClass.resolveClass(
                  moduleContainer.moduleBackground,
                ),
              )}
            >
              {moduleContainer?.modulesCollection?.items.map(
                (module, index) => (
                  <RenderModuleFromRegistry
                    key={index}
                    module={module}
                    locale={locale}
                  />
                ),
              )}
            </div>
          ),
      )}
    </>
  );
};
