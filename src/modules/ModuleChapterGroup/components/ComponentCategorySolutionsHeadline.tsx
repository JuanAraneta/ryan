import { RichText } from "@/components/core/RichText";
import { ComponentCategorySolutionsHeadlineFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/ComponentCategorySolutionsHeadlineFragment";
import { ResultOf } from "gql.tada";

export const ComponentCategorySolutionsHeadline = ({
  data,
}: {
  data: ResultOf<typeof ComponentCategorySolutionsHeadlineFragment>;
}) => (
  <p className="typo-heading-3 text-brand-700 font-light max-w-3xl text-balance">
    <RichText content={data.headline} spansOnly />
  </p>
);
