import { getPageParams } from "@/helpers/getPageParams";
import { getPage } from "@/lib/query/pages";
import ModuleRenderer from "@/modules/ModuleRenderer";

const NOT_FOUND_PAGE_NAME = "404";

export default async function NotFound() {
  const pageParams = await getPageParams();

  let page = await getPage({ ...pageParams, path: NOT_FOUND_PAGE_NAME });

  if (!page) {
    return <>Not Found</>;
  }

  return (
    <ModuleRenderer modules={page!.modules || []} pageParams={pageParams} />
  );
}
