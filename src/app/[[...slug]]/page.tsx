import { ModuleContainerRenderer } from '@/modules/ModuleContainerRenderer';
import { notFound } from 'next/navigation';
import { contentClient } from '@/lib/contentful/contentClient';
import { GetPageBySlugAndMarketQuery } from '@/lib/contentful/query/GetPageBySlugAndMarketQuery';
import { readFragment } from 'gql.tada';
import { PageModulesCollectionFragment } from '@/lib/contentful/fragments/PageModulesCollectionFragment';

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;
  const slugs = Array.isArray(params.slug) ? params.slug : [params.slug];

  const [marketSlug, locale, slug] = slugs;
  const pageResult = await contentClient.query(GetPageBySlugAndMarketQuery, {
    marketSlug,
    locale,
    slug,
  });

  const page = pageResult.data?.pageCollection?.items[0];

  if (!page || !page.modulesCollection) notFound();

  return (
    <ModuleContainerRenderer
      data={readFragment(PageModulesCollectionFragment, page.modulesCollection)}
    />
  );
}
