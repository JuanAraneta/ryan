"use client";

import { useMemo, useState } from "react";
import { readFragment, ResultOf } from "gql.tada";
import { cx } from "cva";
import { Section } from "@/components/core/Section";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { GetModuleSoftwareProductsCarouselById } from "./GetModuleSoftwareProductsCarouselById";
import { SoftwareCard } from "@/components/core/Card";
import { PageSoftwareFragment } from "@/lib/contentful/fragments/PageSoftwareFragment";

export function ModuleSoftwareProductsCarousel({
  data,
}: {
  data: ResultOf<typeof GetModuleSoftwareProductsCarouselById>;
}) {
  const moduleData = data.moduleSoftwareProductsCarousel;

  const { headline, body, cta, softwareProductsCollection } = moduleData || {};

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const items = useMemo(() => {
    return softwareProductsCollection?.items?.filter(Boolean).map((item) => {
      const practiceArea = readFragment(PageSoftwareFragment, item);
      return practiceArea;
    });
  }, [softwareProductsCollection?.items]);

  const filters = useMemo(() => {
    const values = items?.map((item) => item?.practiceArea).filter(Boolean);

    return [...new Set(values)];
  }, [items]);

  const handleFilterClick = (filter: string) => {
    const isCurrentActive = activeFilter === filter;

    setActiveFilter(isCurrentActive ? null : filter);
  };

  return (
    <Section
      data-testid="ModuleSoftwareProductsCarousel"
      className="py-16 dsk:py-24"
    >
      <div className="w-full flex flex-col dsk:flex-row gap-10 justify-between mb-6">
        {headline && (
          <h2 className="text-highlight typo-heading-1 font-light">
            {headline}
          </h2>
        )}

        {cta && (
          <Button asChild>
            <Link link={cta} aria-label="Explore all software" />
          </Button>
        )}
      </div>

      {body && (
        <p className="typo-body-large text-content-secondary max-w-2xl mb-10">
          {body}
        </p>
      )}

      {filters?.length && (
        <ul className="flex gap-3 flex-wrap">
          {filters?.map((filter, idx) => (
            <li
              key={idx}
              className={cx(
                "py-2 px-3 rounded-sm cursor-pointer border-1 transition-all duration-200 bg-white shadow-xs",
                activeFilter === filter
                  ? "border-new-gold"
                  : "border-transparent",
              )}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
      )}

      {items && (
        <ScrollCarouselContainer
          hideControls
          items={items}
          itemRender={({ item }) => <SoftwareCard data={item} />}
        />
      )}
    </Section>
  );
}
