import { readFragment, ResultOf } from "gql.tada";
import { Section } from "@/components/core/Section";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { GetModuleSoftwareProductsCarouselById } from "./GetModuleSoftwareProductsCarouselById";
import { getInspector } from "@/utils/inspectorMode";
import { FilteredSoftwareProductsCarousel } from "./components/FilteredSoftwareProductsCarousel";
import { SoftwareCard } from "@/components/core/SoftwareCard";
import { PageContentSoftwareDetails } from "@/lib/contentful/fragments/PageContentSoftwareDetails";

export async function ModuleSoftwareProductsCarousel({
  data,
}: {
  data: ResultOf<typeof GetModuleSoftwareProductsCarouselById>;
}) {
  const moduleData = data.moduleSoftwareProductsCarousel;

  const { headline, body, cta, softwareProductsCollection } =
    data.moduleSoftwareProductsCarousel || {};

  const cardData = softwareProductsCollection?.items.filter(Boolean) || [];

  const preRenderedCards = await Promise.all(
    cardData.map(async (item, index) => {
      const card = readFragment(PageContentSoftwareDetails, item);
      return {
        id: card.sys.id,
        practiceArea: card.subject?.practiceArea,
        renderedCard: <SoftwareCard key={index} data={card} />,
      };
    }),
  );

  const inspector = getInspector(moduleData!);

  return (
    <Section
      data-testid="ModuleSoftwareProductsCarousel"
      className="py-16 dsk:py-24"
    >
      <div className="w-full flex flex-col dsk:flex-row gap-10 justify-between mb-6">
        {headline && (
          <h2
            className="text-highlight typo-heading-1 font-light"
            {...inspector("headline")}
          >
            {headline}
          </h2>
        )}

        {cta && (
          <Button asChild>
            <Link link={cta} {...inspector("cta")} />
          </Button>
        )}
      </div>

      {body && (
        <p
          className="typo-body-large text-content-secondary max-w-2xl mb-10"
          {...inspector("body")}
        >
          {body}
        </p>
      )}

      <FilteredSoftwareProductsCarousel cards={preRenderedCards} />
    </Section>
  );
}
