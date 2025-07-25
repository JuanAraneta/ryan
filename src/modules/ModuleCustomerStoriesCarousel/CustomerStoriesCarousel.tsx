"use client";

import { Link } from "@/components/core/Link";
import { RichText } from "@/components/core/RichText";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from "@/lib/contentful/fragments/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment";
import { focusStyle } from "@/utils/focusStyle";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";

export const CustomerStoriesCarousel = ({
  data,
}: {
  data: ResultOf<
    typeof ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment
  >;
}) => (
  <ScrollCarouselContainer
    items={data.items}
    itemRender={({ item: story }) => {
      const heroMedia = readFragment(AssetFragment, story.heroMedia);
      const customerLogo = readFragment(AssetFragment, story.customerLogo);
      return (
        <Link
          href={`/customer-stories/${story.slug}`}
          className={cx(
            "flex w-[700px] max-w-[calc(100vw-3rem)] flex-col snap-start snap-always rounded-lg overflow-hidden gradient-container group h-full",
            focusStyle,
          )}
        >
          <div className="relative w-full overflow-hidden">
            {heroMedia?.url && (
              <img
                className="h-[190px] dsk:h-[400px] w-full object-cover group-hover:scale-105 transition-transform"
                src={heroMedia.url}
                alt={`${story.customerName} hero media`}
              />
            )}
            {!!customerLogo?.url && (
              <img
                className="absolute left-5 top-5 h-8"
                src={customerLogo?.url}
                alt={`${story.customerName} customer logo`}
              />
            )}
          </div>
          <div className="p-6">
            <div className="flex gap-2.5 items-center">
              <div className="rounded-full size-2.5 bg-new-gold" />
              <p className="typo-eyebrow">{story.customerName}</p>
            </div>
            <p className="typo-heading-5 font-light pt-3">
              <RichText content={story.richTextHeadline} spansOnly />
            </p>
            {!!story.quoteSource && (
              <p className="typo-caption pt-3">{story.quoteSource}</p>
            )}
          </div>
        </Link>
      );
    }}
  />
);
