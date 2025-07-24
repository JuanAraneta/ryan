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
        headline={{
          richText: {
            json: {
              nodeType: "document",
              data: {},
              content: [
                {
                  nodeType: "paragraph",
                  data: {},
                  content: [
                    {
                      nodeType: "text",
                      value: "Trusted tax experts, \n",
                      marks: [],
                      data: {},
                    },
                    {
                      nodeType: "text",
                      value: "powered by ",
                      marks: [
                        {
                          type: "italic",
                        },
                      ],
                      data: {},
                    },
                    {
                      nodeType: "text",
                      value: "tax technology.",
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
            links: {
              entries: {
                inline: [],
                block: [],
                hyperlink: [],
              },
              assets: {
                __typename: "ContentTypeRichTextRichTextAssets",
                block: [],
              },
            },
          },
        }}
        prompts={[
          "How will tariffs impact my business taxes?",
          "How can I optimize my company’s taxes?",
          "I need to make a property tax appeal in London.",
        ]}
        routingCards={[
          {
            // imageplaceholder
            imageUrl: "https://placehold.co/720x300?text=END-TO-END%20SERVICES",
            eyebrow: "END-TO-END SERVICES",
            subheading: "Your Trusted Partner in Tax Optimization.",
            href: "/services/tax-optimization",
          },
          {
            imageUrl:
              "https://placehold.co/720x300?text=TAX%20TECHNOLOGY%20MARKETPLACE",
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
