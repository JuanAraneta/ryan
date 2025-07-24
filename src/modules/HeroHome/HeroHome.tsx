import { AIChatPrompt } from "@/components/core/AIChat";
import { RichTitleText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { MdKeyboardBackspace } from "react-icons/md";

export interface HeroHomeProps {
  headline: string; // max 70 chars
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

const prompts = [
  "How will tariffs impact my business taxes?",
  "How can I optimize my company’s taxes?",
  "I need to make a property tax appeal in London.",
];

export function HeroHome({ headline, routingCards }: HeroHomeProps) {
  return (
    <div className="gradient-brand-v-light-to-dark">
      <Section data-testid="HeroHome" className="dark py-16 dsk:py-28">
        <h1 className="typo-display pt-4 mb-10 font-light text-center">
          <RichTitleText content={headline} spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[5.4rem]">
          <AIChatPrompt prompts={prompts} />
        </div>

        {/* Routing Cards */}
        <div className="flex flex-col md:flex-row">
          {routingCards.map((card, idx) => (
            <a key={idx} href={card.href} className="flex-1 group relative">
              <img
                src={card.imageUrl}
                alt=""
                className="w-full h-[18.75rem] object-cover object-center"
                loading="lazy"
              />
              <div className="flex flex-col py-6 px-10 gap-3">
                <p className="flex items-center justify-between gap-2 ">
                  <span className="typo-eyebrow">{card.eyebrow}</span>
                  <MdKeyboardBackspace className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform duration-100" />
                </p>

                <span className="typo-heading-4 font-light">
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
