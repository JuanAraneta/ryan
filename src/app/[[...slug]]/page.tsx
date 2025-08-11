import { PageContentModular } from "@/modules/PageContentModular/PageContentModular";
import { notFound } from "next/navigation";
import { contentClient } from "@/lib/contentful/contentClient";
import { GetPageByIdQuery } from "@/lib/contentful/query/GetPageByIdQuery";
import { routingUtils } from "@/lib/util/routingUtils";
import { GetPageContentModularByIdQuery } from "@/modules/PageContentModular/GetPageContentModularByIdQuery";
import { getContentfulLocales } from "@/lib/contentful/getContentfulLocales";

export default async function Page(props: {
  params: Promise<{ slug?: string | Array<string> }>;
}) {
  const path = await routingUtils.getPathFromProps(props);
  const id = await routingUtils.getPageIdByPath(path);

  if (!id) notFound();

  const pageResult = await contentClient.query(GetPageByIdQuery, { id });

  const locales = await getContentfulLocales();
  const locale = (
    locales.items.find(
      // we maybe want to eventually base this on the market having a locale ID embedded
      (locale) => locale.code === pageResult.data?.page?.market?.slug,
    ) || locales.items.find((locale) => locale.default)
  )?.code;
  const pageContentId = pageResult.data?.page?.pageContent?.sys.id;
  const pageContentType = pageResult.data?.page?.pageContent?.__typename;

  if (!locale || !pageContentType || !pageContentId) notFound();

  switch (pageContentType) {
    case "ComponentCustomerStory":
      return null;
    case "ComponentExpert":
      return null;
    case "ComponentInsight":
      return null;
    case "PageService":
      return null;
    case "PageSoftware":
      return null;
    case "PageContentModular":
      const pageContent = (
        await contentClient.query(GetPageContentModularByIdQuery, {
          id: pageContentId,
        })
      ).data;
      return <PageContentModular data={pageContent} locale={locale} />;
  }
}
