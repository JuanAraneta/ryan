'use client';

import { FakeHorizontalScrollbar } from '@/components/core/FakeHorizontalScrollbar';
import { IconButton } from '@/components/core/IconButton';
import { Link } from '@/components/core/Link';
import { RichText } from '@/components/core/RichText';
import { useConstants } from '@/components/providers/ConstantsContext';
import { useRerenderOnScreenSize } from '@/hooks/useRerenderOnScreenSize';
import { useScrollJumpOnClickEventHandler } from '@/hooks/useScrollJumpOnClickEventHandler';
import { AssetFragment } from '@/lib/contentful/fragments/AssetFragment';
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from '@/lib/contentful/fragments/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment';
import { focusStyle } from '@/utils/focusStyle';
import { cx } from 'cva';
import { readFragment, ResultOf } from 'gql.tada';
import { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

export const CustomerStoriesCarousel = ({
  data,
}: {
  data: ResultOf<
    typeof ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment
  >;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    'prev',
    'li'
  );
  const nextClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    'next',
    'li'
  );
  const constants = useConstants();
  useRerenderOnScreenSize();

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className="-mx-6 px-6 dsk:-mx-20 dsk:px-20 scroll-pl-6 dsk:scroll-pl-20 overflow-x-auto no-scrollbar pt-10 snap-start snap-x snap-mandatory"
      >
        <ul className="flex flex-1 gap-8 dsk:gap-4 w-max items-stretch">
          {data.items.map((story, index) => {
            if (!story) return null;
            const heroMedia = readFragment(AssetFragment, story.heroMedia);
            const customerLogo = readFragment(
              AssetFragment,
              story.customerLogo
            );
            return (
              <li key={index} className="py-2">
                <Link
                  href={`/customer-stories/${story.slug}`}
                  className={cx(
                    'flex w-[700px] max-w-[calc(100vw-3rem)] flex-col snap-start snap-always rounded-lg overflow-hidden gradient-container group h-full',
                    focusStyle
                  )}
                >
                  <div className="relative w-full overflow-hidden">
                    {heroMedia?.url && (
                      <Image
                        className="h-[190px] dsk:h-[400px] w-full object-cover group-hover:scale-105 transition-transform"
                        src={heroMedia.url}
                        alt={story.customerName ?? ''}
                      />
                    )}
                    {!!customerLogo?.url && (
                      <Image
                        className="absolute left-5 top-5 h-8"
                        src={customerLogo?.url}
                        alt={story.customerName ?? ''}
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2.5 items-center">
                      <div className="rounded-full size-2.5 bg-new-gold" />
                      <p className="typo-eyebrow">{story.customerName}</p>
                    </div>
                    <p className="typo-heading-5 font-light pt-3">
                      <RichText content={story.headline} spansOnly />
                    </p>
                    {!!story.quoteSource && (
                      <p className="typo-caption pt-3">{story.quoteSource}</p>
                    )}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={cx(
          'pt-6 dsk:pt-10 gap-6 items-center',
          scrollContainerRef.current?.clientWidth ===
            scrollContainerRef.current?.scrollWidth
            ? 'hidden'
            : 'flex'
        )}
      >
        <div className="hidden dsk:flex gap-6">
          <IconButton
            variant="secondary"
            onClick={prevClickHandler}
            aria-label={constants.previousButtonAriaLabel ?? ''}
          >
            <MdChevronLeft size={24} />
          </IconButton>
          <IconButton
            variant="secondary"
            onClick={nextClickHandler}
            aria-label={constants.nextButtonAriaLabel ?? ''}
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
