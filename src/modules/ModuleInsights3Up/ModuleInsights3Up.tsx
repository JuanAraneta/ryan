import { readFragment, ResultOf } from "gql.tada";
import { GetModuleInsights3UpById } from "./GetModuleInsights3UpById";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { Section } from "@/components/core/Section";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { NewsAndInsightsCard } from "@/components/core/NewsAndInsightsCard";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { getInspector } from "@/utils/inspectorMode";

export const ModuleInsights3Up = ({
  data,
}: {
  data: ResultOf<typeof GetModuleInsights3UpById>;
}) => {
  if (!data.moduleInsights3Up) return null;

  const { headline, insightsCollection, cta } = data.moduleInsights3Up;

  const inspector = getInspector(data.moduleInsights3Up);
  const link = readFragment(ComponentLinkFragment, cta);

  return (
    <Section data-testid="ModuleInsights3Up" className="dark py-16 dsk:py-20">
      {/* Header section with headline and CTA */}
      <div className="flex flex-col dsk:flex-row dsk:items-center dsk:justify-between dsk:mb-16 gap-10">
        <h2
          className="typo-heading-2 font-light max-w-2xl"
          {...inspector("headline")}
        >
          {headline}
        </h2>

        {link && (
          <Button asChild>
            <Link link={link} {...inspector("cta")} />
          </Button>
        )}
      </div>

      {insightsCollection?.items && (
        <>
          {/* Desktop: 3-column grid */}
          <div className="hidden dsk:grid grid-cols-3 gap-10">
            {insightsCollection.items.map(
              (insight, index) =>
                insight && (
                  <NewsAndInsightsCard
                    key={index}
                    data={insight}
                    className="aspect-square"
                  />
                ),
            )}
          </div>
          {/* Mobile: Horizontal carousel */}
          <div className="block dsk:hidden">
            <ScrollCarouselContainer
              items={insightsCollection.items.map(
                (insight) =>
                  insight && (
                    <NewsAndInsightsCard
                      data={insight}
                      className="aspect-square !w-[18.75rem]"
                    />
                  ),
              )}
            />
          </div>
        </>
      )}
    </Section>
  );
};
