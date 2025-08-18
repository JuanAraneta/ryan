import { notFound } from "next/navigation";
import { contentClient } from "@/lib/contentful/contentClient";
import { routingUtils } from "@/lib/util/routingUtils";
import { getContentfulLocales } from "@/lib/contentful/getContentfulLocales";
import { GetPageById } from "@/lib/contentful/query/GetPageByIdQuery";
import { readFragment } from "gql.tada";
import { MarketFragment } from "@/lib/contentful/fragments/MarketFragment";
import { PageContentModular } from "@/modules/PageContentModular/PageContentModular";
import { NextPageProps } from "@/types/pages";

export default async function Page({ params, searchParams }: NextPageProps) {
  const props = { params, searchParams };
  const [resolvedSearchParams, page, currentPath] = await Promise.all([
    searchParams,
    routingUtils
      .getPathFromProps(props)
      .then((path) => routingUtils.getPageEntryByPath(path))
      .then(async (pageEntry) =>
        pageEntry?.sys.id
          ? (await contentClient.query(GetPageById, { id: pageEntry.sys.id }))
              .data?.page
          : null,
      ),
    routingUtils.getPathFromProps(props),
  ]);

  if (!page) notFound();

  const locales = await getContentfulLocales();
  const locale = (
    locales.items.find(
      // we maybe want to eventually base this on the market having a locale ID embedded
      (locale) =>
        locale.code === readFragment(MarketFragment, page.market)?.slug,
    ) || locales.items.find((locale) => locale.default)
  )?.code;

  const pageType = page.content?.__typename;
  const pageId = page.content?.sys.id;

  if (!pageType || !locale || !pageId) notFound();

  const pageProps = {
    id: pageId,
    locale,
    searchParams: resolvedSearchParams,
    currentPath,
  };

  switch (pageType) {
    case "PageContentCustomerStory":
      return null;
    case "PageContentExpert":
      return null;
    case "PageContentNewsAndInsights":
      return null;
    case "PageContentServiceDetails":
      return null;
    case "PageContentSoftwareDetails":
      return null;
    case "PageContentModular":
      return <PageContentModular {...pageProps} />;
  }
}
