import { getPageParams } from "@/helpers/getPageParams";
import { getPage } from "@/lib/query/pages";
import ModuleRenderer from "@/modules/ModuleRenderer";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string[] }>;
}) {
  const { lang, slug } = await params;

  const currentPath = slug.pop();
  const pageParams = await getPageParams();
  const page = await getPage({ path: currentPath!, lang });

  if (!page) {
    notFound();
  }

  return (
    <ModuleRenderer modules={page!.modules || []} pageParams={pageParams} />
  );
}
