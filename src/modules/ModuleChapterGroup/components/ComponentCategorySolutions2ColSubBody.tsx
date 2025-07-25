import { RichText } from "@/components/core/RichText";
import { ComponentCategorySolutions2ColSubBodyFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/ComponentCategorySolutions2ColSubBodyFragment";
import { ResultOf } from "gql.tada";

export const ComponentCategorySolutions2ColSubBody = ({
  data,
}: {
  data: ResultOf<typeof ComponentCategorySolutions2ColSubBodyFragment>;
}) => (
  <div className="flex gap-10 flex-col dsk:flex-row">
    {data.titleAndBodyReferencesCollection?.items
      .filter(Boolean)
      .map(({ title, body }, index) => (
        <div key={index} className="dsk:w-1/2 flex flex-col gap-4">
          <p className="typo-body-large">
            <RichText spansOnly content={title} />
          </p>
          <p className="text-neutral-600 max-w-md">
            <RichText spansOnly content={body} />
          </p>
        </div>
      ))}
  </div>
);
