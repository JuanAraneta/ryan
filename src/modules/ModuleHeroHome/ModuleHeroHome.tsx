import { ResultOf } from "gql.tada";
import { AIChatPrompt } from "@/components/core/AIChat";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";
import { GetModuleHeroHomeById } from "./GetModuleHeroHomeById";
import { readFragment } from "gql.tada";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";
import { getInspector } from "@/utils/inspectorMode";

export const ModuleHeroHome = ({
  data,
}: {
  data: ResultOf<typeof GetModuleHeroHomeById>;
}) => {
  const moduleHeroHome = data.moduleHeroHome;
  if (!moduleHeroHome) return null;
  const { headline, prompts, routingCardsCollection } = moduleHeroHome;
  const inspector = getInspector(moduleHeroHome);

  return (
    <div className="gradient-brand-v-dark-to-darker">
      <Section data-testid="HeroHome" className="dark px-0 pt-16 dsk:pt-32">
        <h1
          className="typo-display pt-4 mb-10 font-light text-center w-fit mx-auto"
          {...inspector("headline")}
        >
          <RichText content={headline} variant="title" spansOnly />
        </h1>

        <div className="w-full px-6 flex justify-center mb-[3.75rem] dsk:mb-[5.4rem]">
          <AIChatPrompt
            prompts={prompts?.filter(Boolean)}
            {...inspector("prompts")}
          />
        </div>

        <div className="flex flex-col dsk:flex-row">
          {routingCardsCollection?.items?.filter(Boolean).map((card) => {
            const data = readFragment(ComponentRoutingItemFragment, card);
            return <HeroRoutingCard key={data.sys.id} data={data} />;
          })}
        </div>
      </Section>
    </div>
  );
};
