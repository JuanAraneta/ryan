"use client";

import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { Section } from "@/components/core/Section";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { Statistics } from "@/components/core/Statistics";
import { focusStyle } from "@/utils/focusStyle";
import { getInspector } from "@/utils/inspectorMode";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import { GetModuleCustomerStoriesCarouselShortById } from "./GetModuleCustomerStoriesCarouselShortById";
import { RichText } from "@/components/core/RichText";

export const ModuleCustomerStoriesCarouselShort = ({
  data,
}: {
  data: ResultOf<typeof GetModuleCustomerStoriesCarouselShortById>;
}) => {
  if (!data.moduleCustomerStoriesCarouselShort) return null;

  const inspector = getInspector(data.moduleCustomerStoriesCarouselShort);
  const { headline, cta, customerStoryCardsCollection } =
    data.moduleCustomerStoriesCarouselShort;

  const ctaLink = readFragment(ComponentLinkFragment, cta);
  const cards = customerStoryCardsCollection?.items.filter(Boolean) || [];

  return (
    <Section
      data-testid="ModuleCustomerStoriesCarouselShort"
      className="dark py-16 dsk:py-32"
    >
      {/* Header section with headline and CTA */}
      <div className="flex flex-col justify-center items-center text-center mb-16">
        {headline && (
          <h2
            className="typo-display font-light mb-10"
            {...inspector("headline")}
          >
            <RichText content={headline} />
          </h2>
        )}

        {ctaLink && (
          <Button asChild>
            <Link {...inspector("cta")} link={ctaLink} />
          </Button>
        )}
      </div>

      {/* Customer Story Cards Carousel */}
      {cards.length > 0 && (
        <ScrollCarouselContainer
          items={cards}
          itemRender={({ item: card }) => {
            const backgroundImage = readFragment(
              AssetFragment,
              card.backgroundImage,
            );
            const clientLogo = readFragment(AssetFragment, card.clientLogo);

            const destinationLink = readFragment(
              ComponentLinkFragment,
              card.link,
            );
            const cardInspector = getInspector(card);

            return (
              <Link
                href={
                  destinationLink?.externalSource ||
                  `/${destinationLink?.internalSource?.slug}` ||
                  "#"
                }
                className={cx(
                  "group block w-[400px] dsk:w-[500px] aspect-[2/1] dsk:aspect-[2/1] mob:aspect-square relative rounded-lg overflow-hidden",
                  "transition-transform duration-300 hover:scale-105",
                  focusStyle,
                )}
                {...cardInspector("link")}
              >
                {/* Background Image */}
                {backgroundImage?.url && (
                  <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={backgroundImage.url}
                    alt=""
                    {...cardInspector("backgroundImage")}
                  />
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Client Logo */}
                {clientLogo?.url && (
                  <img
                    className="absolute top-6 left-6 h-8 max-w-[120px] object-contain"
                    src={clientLogo.url}
                    alt=""
                    {...cardInspector("clientLogo")}
                  />
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Statistics */}
                  <div className="mb-4" {...cardInspector("statistic")}>
                    {card.statistic && <Statistics data={card.statistic} />}
                  </div>

                  {/* Tags */}
                  {card.tags && card.tags.length > 0 && (
                    <div
                      className="flex gap-2 flex-wrap"
                      {...cardInspector("tags")}
                    >
                      {card.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full typo-caption text-white/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            );
          }}
        />
      )}
    </Section>
  );
};
