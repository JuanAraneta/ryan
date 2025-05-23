import { getPageParams } from "@/helpers/getPageParams";
import { getPage } from "@/lib/query/pages";
import ModuleRenderer from "@/modules/ModuleRenderer";
import { notFound } from "next/navigation";
import { DEFAULT_PAGE } from "@/constants";
import { C } from "vitest/dist/chunks/reporters.d.CfRkRKN2.js";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  const pageParams = await getPageParams(slug);
  const page = await getPage(pageParams);

  if (!page) {
    notFound();
  }

  return (
    <ModuleRenderer modules={page!.modules || []} pageParams={pageParams} />
  );
}
