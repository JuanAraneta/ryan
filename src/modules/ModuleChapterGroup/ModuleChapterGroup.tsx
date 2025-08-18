import { GetModuleChapterGroupById } from ".";
import { readFragment, ResultOf } from "gql.tada";
import { ComponentCardDeviceMock } from "./components/ComponentCardDeviceMock";
import { ComponentCardDeviceMockFragment } from "@/modules/ModuleChapterGroup/fragments/CardDeviceMockFragment";
import { ComponentCategorySolutionsHeadline } from "./components/ComponentCategorySolutionsHeadline";
import { ComponentCategorySolutionsHeadlineFragment } from "@/modules/ModuleChapterGroup/fragments/ComponentCategorySolutionsHeadlineFragment";
import { ComponentCategorySolutions2ColSubBody } from "./components/ComponentCategorySolutions2ColSubBody";
import { ComponentCategorySolutions2ColSubBodyFragment } from "@/modules/ModuleChapterGroup/fragments/ComponentCategorySolutions2ColSubBodyFragment";
import { CategorySolutionsImageLinkGrid } from "./components/CategorySolutionsImageLinkGrid";
import { CategorySolutionsImageLinkGridFragment } from "@/modules/ModuleChapterGroup/fragments/CategorySolutionsImageLinkGridFragment";
import { ModuleChapterGroupContainer } from "./components/ModuleChapterGroupContainer";
import { Fragment } from "react";
import kebabCase from "lodash/kebabCase";

export const ModuleChapterGroup = ({
  data,
}: {
  data: ResultOf<typeof GetModuleChapterGroupById>;
}) => (
  <ModuleChapterGroupContainer
    data={data}
    chapters={(data.moduleChapterGroup?.chaptersCollection?.items ?? []).map(
      (chapter) => {
        if (!chapter) return null;

        return {
          id: kebabCase(chapter.title ?? ""),
          node: (
            <Fragment key={chapter.sys.id}>
              {chapter.contentsCollection?.items.map((item, index) => {
                switch (item?.__typename) {
                  case "ComponentCardDeviceMock":
                    return (
                      <ComponentCardDeviceMock
                        key={index}
                        data={readFragment(
                          ComponentCardDeviceMockFragment,
                          item,
                        )}
                      />
                    );
                  case "ComponentCategorySolutionsHeadline":
                    return (
                      <ComponentCategorySolutionsHeadline
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutionsHeadlineFragment,
                          item,
                        )}
                      />
                    );
                  case "ComponentCategorySolutions2ColSubBody":
                    return (
                      <ComponentCategorySolutions2ColSubBody
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutions2ColSubBodyFragment,
                          item,
                        )}
                      />
                    );
                  case "CategorySolutionsImageLinkGrid":
                    return (
                      <CategorySolutionsImageLinkGrid
                        key={index}
                        data={readFragment(
                          CategorySolutionsImageLinkGridFragment,
                          item,
                        )}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </Fragment>
          ),
        };
      },
    )}
  />
);
