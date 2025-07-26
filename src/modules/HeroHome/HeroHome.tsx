import { ResultOf } from "gql.tada";
import { AIChatPrompt } from "@/components/core/AIChat";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";
import { ModuleHeroHomeFragment } from "@/lib/contentful/fragments/ModuleHeroHomeFragment";
import { readFragment } from "gql.tada";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";

export function HeroHome({
  data,
}: {
  data: ResultOf<typeof ModuleHeroHomeFragment>;
}) {
  const { headline, prompts, routingCardsCollection } = data;

  const cards =
    routingCardsCollection?.items?.filter(
      (card): card is NonNullable<typeof card> => card !== null, // TODO: check a way to avoid nulls
    ) ?? [];

  const filteredPrompts =
    prompts?.filter((prompt): prompt is string => prompt !== null) ?? []; // TODO: check a way to avoid nulls

  return (
    <div className="gradient-brand-v-dark-to-darker">
      <Section data-testid="HeroHome" className="dark px-0 pt-16 dsk:pt-32">
        <h1 className="typo-display pt-4 mb-10 font-light text-center">
          <RichText content={headline} variant="title" spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[3.75rem] dsk:mb-[5.4rem]">
          <AIChatPrompt prompts={filteredPrompts} />
        </div>

        <div className="flex flex-col dsk:flex-row">
          {cards.map((card, idx) => (
            <HeroRoutingCard
              key={idx}
              data={readFragment(ComponentRoutingItemFragment, card)}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
