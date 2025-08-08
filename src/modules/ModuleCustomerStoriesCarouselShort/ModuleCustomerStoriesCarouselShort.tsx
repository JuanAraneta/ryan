"use client";

import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { Section } from "@/components/core/Section";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { getInspector } from "@/utils/inspectorMode";
import { readFragment, ResultOf } from "gql.tada";
import { GetModuleCustomerStoriesCarouselShortById } from "./GetModuleCustomerStoriesCarouselShortById";
import { RichText } from "@/components/core/RichText";
import { ComponentCustomerStoryCard } from "./components/ComponentCustomerStoryCard";
import { ComponentCustomerStoryCardFragment } from "./fragments/ComponentCustomerStoryCardFragment";

export const ModuleCustomerStoriesCarouselShort = ({
  data,
}: {
  data: ResultOf<typeof GetModuleCustomerStoriesCarouselShortById>;
}) => {
  if (!data.moduleCustomerStoriesCarouselShort) return null;

  const { headline, cta, customerStoryCardsCollection } =
    data.moduleCustomerStoriesCarouselShort;

  const inspector = getInspector(data.moduleCustomerStoriesCarouselShort);

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
            className="typo-heading-2 font-light mb-10 max-w-2xl"
            {...inspector("headline")}
          >
            <RichText content={headline} variant="title" spansOnly />
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
            const cardData = readFragment(
              ComponentCustomerStoryCardFragment,
              card,
            );
            return <ComponentCustomerStoryCard data={cardData} />;
          }}
        />
      )}
    </Section>
  );
};
