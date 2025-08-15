"use client";

import { useState, useMemo, useCallback, ReactElement } from "react";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { cx } from "cva";

interface CardWithMetadata {
  id: string;
  practiceArea: string | null | undefined;
  renderedCard: ReactElement;
}

export const FilteredSoftwareProductsCarousel = ({
  cards,
}: {
  cards: CardWithMetadata[];
}) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = useMemo(() => {
    const values = cards.map((card) => card.practiceArea).filter(Boolean);
    return [...new Set(values)];
  }, [cards]);

  const filteredCards = useMemo(() => {
    if (activeFilter) {
      return cards.filter((card) => card.practiceArea === activeFilter);
    }
    return cards;
  }, [cards, activeFilter]);

  const handleFilterClick = useCallback(
    (filter: string) => {
      const isCurrentActive = activeFilter === filter;

      setActiveFilter(isCurrentActive ? null : filter);
    },
    [activeFilter, setActiveFilter],
  );
  return (
    <div>
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

      {filteredCards && (
        <ScrollCarouselContainer
          hideControls
          items={filteredCards.map((card) => card.renderedCard)}
        />
      )}
    </div>
  );
};
