// HeroHome module: Homepage Hero 50/50
// Displays headline, animated AI chat prompt, and two routing cards

export interface HeroHomeProps {
  headline: string; // max 70 chars
  animatedQuestions: string[]; // list of questions for AI prompt
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

export function HeroHome({
  headline,
  animatedQuestions,
  routingCards,
}: HeroHomeProps) {
  // TODO: Implement animated AI prompt and overlay
  // TODO: Integrate CMS content

  return (
    <section className="w-full flex flex-col items-center py-12 md:py-24 bg-white">
      {/* Headline */}
      <h1 className="text-3xl md:text-5xl font-bold text-center max-w-2xl mb-6">
        {headline}
      </h1>

      {/* Animated AI Chat Prompt (placeholder) */}
      <div className="w-full max-w-md mb-8">
        {/* TODO: Animated text field cycling through animatedQuestions */}
        <input
          type="text"
          className="w-full px-6 py-4 rounded-full border border-gray-300 shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={animatedQuestions[0]}
          readOnly
        />
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
    </section>
  );
}
