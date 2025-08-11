import { backgroundDescriptionMapToClass } from "@/utils/backgroundDescriptionMapToClass";
import { cx } from "cva";
import { ResultOf } from "gql.tada";
import { GetPageContentModularByIdQuery } from "./GetPageContentModularByIdQuery";
import { RenderModuleFromRegistry } from "../RenderModuleFromRegistry";

export const PageContentModular = async ({
  locale,
  data,
}: {
  data?: ResultOf<typeof GetPageContentModularByIdQuery>;
  locale: string;
}) => (
  <>
    {(data?.pageContentModular?.moduleContainersCollection?.items ?? []).map(
      (moduleContainer) =>
        !moduleContainer || !moduleContainer.modulesCollection?.items ? null : (
          <div
            key={moduleContainer.sys.id}
            className={cx(
              backgroundDescriptionMapToClass.resolveClass(
                moduleContainer.moduleBackground,
              ),
            )}
          >
            {moduleContainer?.modulesCollection?.items.map((module, index) => (
              <RenderModuleFromRegistry
                key={index}
                module={module}
                locale={locale}
              />
            ))}
          </div>
        ),
    )}
  </>
);
