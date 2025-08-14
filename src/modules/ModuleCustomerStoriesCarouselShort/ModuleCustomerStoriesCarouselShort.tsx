import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { Section } from "@/components/core/Section";
import { ScrollCarouselContainer } from "@/constants/ScrollCarouselContainer";
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

  return (
    <Section
      data-testid="ModuleCustomerStoriesCarouselShort"
      className="dark py-16 dsk:py-32"
    >
      {/* Header section with headline and CTA */}
      <div className="flex flex-col justify-center items-center text-center mb-16">
        {headline && (
          <h2
            className="typo-heading-2 dsk:typo-heading-1 font-light mb-10 max-w-4xl"
            {...inspector("headline")}
          >
            <RichText content={headline} variant="title" spansOnly />
          </h2>
        )}

        {cta && (
          <Button asChild>
            <Link {...inspector("cta")} link={cta} />
          </Button>
        )}
      </div>

      {/* Customer Story Cards Carousel */}
      {customerStoryCardsCollection?.items && (
        <ScrollCarouselContainer
          items={customerStoryCardsCollection.items.map(
            (card) =>
              card && (
                <ComponentCustomerStoryCard
                  data={readFragment(ComponentCustomerStoryCardFragment, card)}
                />
              ),
          )}
          className="!py-0"
        />
      )}
    </Section>
  );
};
