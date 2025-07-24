import { AIChatPrompt } from "@/components/core/AIChat";
import { RichTitleText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { ZoomImage } from "@/components/core/ZoomImage";
import { MdKeyboardBackspace } from "react-icons/md";

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

        {/* Routing Cards */}
        <div className="flex flex-col dsk:flex-row">
          {routingCards.map((card, idx) => (
            <a key={idx} href={card.href} className="flex-1 group relative">
              <ZoomImage src={card.imageUrl} alt="" className="aspect-21/9" />

              <div className="flex-col py-6 px-10 gap-3 contents dsk:flex">
                <p className="flex items-center justify-between gap-2 absolute bottom-[1.12rem] dsk:static w-full px-4 dsk:px-0">
                  <span className="typo-eyebrow">{card.eyebrow}</span>
                  <MdKeyboardBackspace className="w-6 h-6 rotate-180 dsk:group-hover:translate-x-2 transition-transform duration-100" />
                </p>

                <span className="typo-heading-4 font-light hidden dsk:block">
                  {card.subheading}
                </span>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </div>
  );
}
