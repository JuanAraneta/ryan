import { AIChatPrompt } from "@/components/core/AIChat";
import { RichTitleText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";

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

export function HeroHome({ headline, routingCards }: HeroHomeProps) {
  return (
    <div className="gradient-brand-v-light-to-dark">
      <Section data-testid="HeroHome" className="dark py-16 dsk:py-28">
        <h1 className="typo-display pt-4 mb-10 font-light text-center">
          <RichTitleText content={headline} spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[5.4rem]">
          <AIChatPrompt />
        </div>

        {/* Routing Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          {routingCards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="flex-1 rounded-2xl overflow-hidden shadow-lg group relative min-h-[180px] md:min-h-[240px] bg-gray-100 transition-transform hover:scale-105"
              style={{ aspectRatio: "21/9" }}
            >
              {/* Background Image */}
              <img
                src={card.imageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover object-center z-0 aspect-[21/9]"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="relative z-10 flex flex-col justify-end h-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-sm font-medium text-white/80 mb-1 truncate">
                  {card.eyebrow}
                </span>
                <span className="text-2xl font-semibold text-white leading-tight truncate">
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
