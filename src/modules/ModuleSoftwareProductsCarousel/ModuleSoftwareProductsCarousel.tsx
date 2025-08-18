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
  getQueryParam,
  toggleQueryParam,
} from "@/utils/urlHelpers";

export async function ModuleSoftwareProductsCarousel({
  data,
  searchParams = {},
  currentPath = "/",
}: {
  data: ResultOf<typeof GetModuleSoftwareProductsCarouselById>;
  searchParams?: Record<string, string | string[]>;
  currentPath?: string;
}) {
  const moduleData = data.moduleSoftwareProductsCarousel;

  const { __typename, headline, body, cta, softwareProductsCollection } =
    data.moduleSoftwareProductsCarousel || {};

  const cardData =
    softwareProductsCollection?.items
      .filter(Boolean)
      .map((item) => readFragment(PageContentSoftwareDetails, item)) || [];

  const moduleQueryKey = getModuleQueryKey(__typename);
  const activeFilter = getQueryParam(searchParams, moduleQueryKey);

  const filters = [
    ...new Set(
      cardData.map((card) => card.subject?.practiceArea).filter(Boolean),
    ),
  ];

  // Filter cards based on active filter
  const filteredCardData = activeFilter
    ? cardData.filter((card) => card.subject?.practiceArea === activeFilter)
    : cardData;

  // Helper function to generate filter URLs using utility
  const createFilterUrl = (filter: string) => {
    const url = toggleQueryParam(
      searchParams,
      currentPath!,
      moduleQueryKey,
      filter,
    );

    return url;
  };

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
                href={createFilterUrl(filter)}
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
