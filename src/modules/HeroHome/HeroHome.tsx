import { ResultOf } from "gql.tada";
import { AIChatPrompt } from "@/components/core/AIChat";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";
import { ModuleHeroHomeFragment } from "@/lib/contentful/fragments/ModuleHeroHomeFragment";

export function HeroHome({
  data,
}: {
  data: ResultOf<typeof ModuleHeroHomeFragment>;
}) {
  const { headline, prompts, routingCardsCollection } = data;
  return (
    <div className="gradient-brand-v-dark-to-darker">
      <Section data-testid="HeroHome" className="dark px-0 pt-16 dsk:pt-32">
        <h1 className="typo-display pt-4 mb-10 font-light text-center">
          <RichText content={headline} spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[3.75rem] dsk:mb-[5.4rem]">
          <AIChatPrompt prompts={prompts || []} />
        </div>

        <div className="flex flex-col dsk:flex-row">
          {routingCardsCollection?.items?.map((card, idx) => (
            <HeroRoutingCard
              key={idx}
              eyebrow={card?.title || ""}
              subheading={card?.slug || ""}
              href={card?.slug || ""}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
