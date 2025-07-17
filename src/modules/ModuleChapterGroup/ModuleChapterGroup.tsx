import { GetModuleChapterGroupById } from "@/lib/contentful/query/GetModuleChapterGroupById";
import { ResultOf } from "gql.tada";

export const ModuleChapterGroup = ({
  data,
}: {
  data: ResultOf<typeof GetModuleChapterGroupById>;
}) => (
  <ul>
    {data.moduleChapterGroup?.chaptersCollection?.items
      .filter(Boolean)
      .map((chapter, index) => <li key={index}>{chapter.title ?? ""}</li>)}
  </ul>
);
