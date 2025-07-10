"use client";

import { FakeHorizontalScrollbar } from "@/components/core/FakeHorizontalScrollbar";
import { IconButton } from "@/components/core/IconButton";
import { useScrollJumpOnClickEventHandler } from "@/hooks/useScrollJumpOnClickEventHandler";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "@/lib/contentful/fragments/ModuleExpertsOverflowExpertsListCollectionFragment";
import { ResultOf } from "gql.tada";
import { useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ModuleExpertsOverflowExpertsListScroll = ({
  data,
}: {
  data: ResultOf<typeof ModuleExpertsOverflowExpertsListCollectionFragment>;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "prev",
    "li"
  );
  const nextClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "next",
    "li"
  );

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="-mx-6 px-6 dsk:-mx-20 dsk:px-20 scroll-pl-6 dsk:scroll-pl-20 overflow-x-auto no-scrollbar pt-10 snap-start snap-x snap-mandatory"
      >
        <ul className="flex gap-6 flex-1 w-max">
          {data.items.map((expert, index) => {
            return (
              <li
                key={index}
                className="flex flex-col gap-6 snap-start snap-always"
              >
                {!!expert?.headshot?.url && (
                  <img
                    className="w-[300px] h-[400px] rounded-lg"
                    src={expert.headshot.url}
                    alt={expert.fullName ?? ""}
                  />
                )}
                <div>
                  <p className="typo-heading-4 font-light">
                    {expert?.fullName}
                  </p>
                  <p className="typo-body-small font-bold text-content-secondary pt-3">
                    {expert?.title}
                  </p>
                  <p className="typo-body-small font-bold text-content-secondary">
                    {expert?.serviceLabel}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pt-6 dsk:pt-10 flex gap-6 items-center">
        <div className="hidden dsk:flex gap-6">
          <IconButton onClick={prevClickHandler}>
            <MdChevronLeft size={24} />
          </IconButton>
          <IconButton onClick={nextClickHandler}>
            <MdChevronRight size={24} />
          </IconButton>
        </div>
        <FakeHorizontalScrollbar
          scrollContainerRef={scrollContainerRef}
          scrollSnapTo="start"
          itemQuerySelector="li"
        />
      </div>
    </div>
  );
};
