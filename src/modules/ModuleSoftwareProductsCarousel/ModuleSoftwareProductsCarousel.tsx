import { readFragment, ResultOf } from "gql.tada";
import { Section } from "@/components/core/Section";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { GetModuleSoftwareProductsCarouselById } from "./GetModuleSoftwareProductsCarouselById";
import { getInspector } from "@/utils/inspectorMode";
import { SoftwareCard } from "@/components/core/SoftwareCard";
import { PageContentSoftwareDetails } from "@/lib/contentful/fragments/PageContentSoftwareDetails";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { cx } from "cva";
import NextLink from "next/link";
import {
  getModuleQueryKey,
  toggleFilterParam,
  getActiveFilter,
} from "@/utils/urlHelpers";
import { PageProps } from "@/types/pages";

export async function ModuleSoftwareProductsCarousel({
  data,
  searchParams = {},
  currentPath = "/",
}: {
  data: ResultOf<typeof GetModuleSoftwareProductsCarouselById>;
} & PageProps) {
  const moduleData = data.moduleSoftwareProductsCarousel;

  const { __typename, headline, body, cta, softwareProductsCollection } =
    data.moduleSoftwareProductsCarousel || {};

  const cardData =
    softwareProductsCollection?.items
      .filter(Boolean)
      .map((item) => readFragment(PageContentSoftwareDetails, item)) || [];

  const moduleQueryKey = getModuleQueryKey(__typename!);

  const filters = [
    ...new Set(
      cardData.map((card) => card.subject?.practiceArea).filter(Boolean),
    ),
  ];

  const activeFilter = getActiveFilter(searchParams, moduleQueryKey, filters);

  const filteredCardData = activeFilter
    ? cardData.filter((card) => card.subject?.practiceArea === activeFilter)
    : cardData;

  const getFilterUrl = (filter: string) =>
    toggleFilterParam(searchParams, currentPath!, moduleQueryKey, filter);

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

      {filters?.length && (
        <ul className="flex gap-3 flex-wrap">
          {filters?.map((filter, idx) => (
            <li key={idx}>
              <NextLink
                href={getFilterUrl(filter)}
                scroll={false}
                replace={true}
                className={cx(
                  "inline-block py-2 px-3 rounded-sm border-1 transition-all duration-200 bg-white shadow-xs text-decoration-none",
                  activeFilter === filter
                    ? "border-new-gold"
                    : "border-transparent",
                )}
              >
                {filter}
              </NextLink>
            </li>
          ))}
        </ul>
      )}

      <ScrollCarouselContainer
        hideControls
        items={filteredCardData?.map((card) => (
          <SoftwareCard key={card?.sys.id} data={card} />
        ))}
      />
    </Section>
  );
}
