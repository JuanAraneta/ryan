import { getPageParams } from "@/helpers/getPageParams";
import { getPage } from "@/lib/query/pages";
import ModuleRenderer from "@/modules/ModuleRenderer";
import { notFound } from "next/navigation";
import { DEFAULT_PAGE } from "@/constants";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const pageParams = await getPageParams(slug);
  console.log(pageParams);

  const page = await getPage({
    path: pageParams.path,
    locale: pageParams.locale,
  });

  if (!page) {
    notFound();
  }

  return (
    <ModuleRenderer modules={page!.modules || []} pageParams={pageParams} />
  );
}
