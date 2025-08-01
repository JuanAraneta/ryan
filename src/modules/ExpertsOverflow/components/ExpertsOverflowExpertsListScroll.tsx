"use client";

import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "@/modules/ExpertsOverflow/fragments/ModuleExpertsOverflowExpertsListCollectionFragment";
import { focusStyle } from "@/utils/focusStyle";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

export const ExpertsOverflowExpertsListScroll = ({
  data,
}: {
  data: ResultOf<typeof ModuleExpertsOverflowExpertsListCollectionFragment>;
}) => (
  <ScrollCarouselContainer
    items={data.items}
    itemRender={({ item: expert }) => {
      const headshot = readFragment(AssetFragment, expert?.headshot);

      return (
        <Link
          href={`/experts/${expert?.slug}`}
          className={cx(focusStyle, "group rounded-lg")}
        >
          {!!expert && !!headshot?.url && (
            <div className="w-[300px] h-[400px] rounded-lg overflow-hidden">
              <img
                className="size-full object-fill rounded-lg transition-transform group-hover:scale-105"
                src={headshot.url}
                alt={`${expert.fullName} headshot`}
              />
            </div>
          )}
          <span className="flex justify-between pt-6">
            <span className="block">
              <p className="typo-heading-4 font-light">{expert?.fullName}</p>
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
      );
    }}
  />
);
