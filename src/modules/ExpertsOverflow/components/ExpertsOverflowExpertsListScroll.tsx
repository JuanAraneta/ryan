"use client";

import { FakeHorizontalScrollbar } from "@/components/core/FakeHorizontalScrollbar";
import { IconButton } from "@/components/core/IconButton";
import { useConstants } from "@/components/providers/ConstantsContext";
import { useRerenderOnScreenSize } from "@/hooks/useRerenderOnScreenSize";
import { useScrollJumpOnClickEventHandler } from "@/hooks/useScrollJumpOnClickEventHandler";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "@/lib/contentful/fragments/ModuleExpertsOverflowExpertsListCollectionFragment";
import { focusStyle } from "@/utils/focusStyle";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineArrowForward,
} from "react-icons/md";

export const ExpertsOverflowExpertsListScroll = ({
  data,
}: {
  data: ResultOf<typeof ModuleExpertsOverflowExpertsListCollectionFragment>;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "prev",
    "li",
  );
  const nextClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "next",
    "li",
  );
  const constants = useConstants();
  useRerenderOnScreenSize();

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="-mx-6 px-6 dsk:-mx-20 dsk:px-20 scroll-pl-6 dsk:scroll-pl-20 overflow-x-auto no-scrollbar pt-10 snap-start snap-x snap-mandatory"
      >
        <ul className="flex gap-6 flex-1 w-max">
          {data.items.map((expert, index) => {
            const headshot = readFragment(AssetFragment, expert?.headshot);

            return (
              <li
                key={index}
                className="flex flex-col gap-6 snap-start snap-always py-2"
              >
                <Link
                  href={`/experts/${expert?.slug}`}
                  className={cx(focusStyle, "group rounded-lg")}
                >
                  {!!expert && !!headshot?.url && (
                    <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
                      <Image
                        className="size-full object-fill rounded-lg transition-transform group-hover:scale-105"
                        src={headshot.url}
                        alt={expert.fullName ?? ""}
                      />
                    </div>
                  )}
                  <span className="flex justify-between pt-6">
                    <span className="block">
                      <p className="typo-heading-4 font-light">
                        {expert?.fullName}
                      </p>
                      <p className="typo-body-small font-bold text-content-secondary pt-3">
                        {expert?.title}
                      </p>
                      <p className="typo-body-small font-bold text-content-secondary">
                        {expert?.serviceLabel}
                      </p>
                    </span>
                    <MdOutlineArrowForward
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      size={24}
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={cx(
          "pt-6 dsk:pt-10 gap-6 items-center",
          scrollContainerRef.current?.clientWidth ===
            scrollContainerRef.current?.scrollWidth
            ? "hidden"
            : "flex",
        )}
      >
        <div className="hidden dsk:flex gap-6">
          <IconButton
            variant="secondary"
            onClick={prevClickHandler}
            aria-label={constants.previousButtonAriaLabel ?? ""}
          >
            <MdChevronLeft size={24} />
          </IconButton>
          <IconButton
            variant="secondary"
            onClick={nextClickHandler}
            aria-label={constants.nextButtonAriaLabel ?? ""}
          >
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
