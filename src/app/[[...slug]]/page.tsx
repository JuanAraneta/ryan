import { ModuleContainerRenderer } from "@/modules/ModuleContainerRenderer";
import { notFound } from "next/navigation";
import { contentClient } from "@/lib/contentful/contentClient";
import { GetPageBySlugAndMarketQuery } from "@/lib/contentful/query/GetPageBySlugAndMarketQuery";
import { readFragment } from "gql.tada";
import { PageModulesCollectionFragment } from "@/lib/contentful/fragments/PageModulesCollectionFragment";
import { HeroHome } from "@/modules/HeroHome";

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
    <>
      <HeroHome
        headline="Trusted tax experts,powered by tax technology."
        animatedQuestions={[]}
        routingCards={[
          {
            imageUrl: "/images/tax-optimization-meeting.webp",
            eyebrow: "END-TO-END SERVICES",
            subheading: "Your Trusted Partner in Tax Optimization.",
            href: "/services/tax-optimization",
          },
          {
            imageUrl: "/images/tax-technology-marketplace.webp",
            eyebrow: "TAX TECHNOLOGY MARKETPLACE",
            subheading: "Transforming Tax with Advanced Platforms.",
            href: "/platforms/tax-technology",
          },
        ]}
      />
      <ModuleContainerRenderer
        data={readFragment(
          PageModulesCollectionFragment,
          page.modulesCollection,
        )}
      />
    </>
  );
}
