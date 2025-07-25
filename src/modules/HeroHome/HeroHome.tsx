import { AIChatPrompt } from "@/components/core/AIChat";
import { RichTitleText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";

export interface HeroHomeProps {
  headline: string; // max 70 chars
  prompts: string[];
  routingCards: [
    {
      imageUrl: string;
      eyebrow: string; // max 60 chars
      subheading: string; // max 80 chars
      href: string;
    },
    {
      imageUrl: string;
      eyebrow: string; // max 60 chars
      subheading: string; // max 80 chars
      href: string;
    },
  ];
}

export function HeroHome({ headline, routingCards, prompts }: HeroHomeProps) {
  return (
    <div className="gradient-brand-v-dark-to-darker">
      <Section data-testid="HeroHome" className="dark px-0 pt-16 dsk:pt-32">
        <h1 className="typo-display pt-4 mb-10 font-light text-center">
          <RichTitleText content={headline} spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[3.75rem] dsk:mb-[5.4rem]">
          <AIChatPrompt prompts={prompts} />
        </div>

        <div className="flex flex-col dsk:flex-row">
          {routingCards.map((card, idx) => (
            <HeroRoutingCard key={idx} {...card} />
          ))}
        </div>
      </Section>
    </div>
  );
}
