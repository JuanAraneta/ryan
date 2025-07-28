import { ResultOf } from "gql.tada";
import { AIChatPrompt } from "@/components/core/AIChat";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";
import { ModuleHeroHomeFragment } from "@/lib/contentful/fragments/ModuleHeroHomeFragment";
import { readFragment } from "gql.tada";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";

// Utility function to filter out null values from arrays
function filterNulls<T>(array: (T | null)[] | null | undefined): T[] {
  return array?.filter((item): item is T => item !== null) ?? [];
}

export function HeroHome({
  data,
}: {
  data: ResultOf<typeof ModuleHeroHomeFragment>;
}) {
  const { headline, prompts, routingCardsCollection } = data;

  const cards = filterNulls(routingCardsCollection?.items);
  const filteredPrompts = filterNulls(prompts);

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
          {cards.map((card) => {
            const data = readFragment(ComponentRoutingItemFragment, card);
            return <HeroRoutingCard key={data.sys.id} data={data} />;
          })}
        </div>
      </Section>
    </div>
  );
}
