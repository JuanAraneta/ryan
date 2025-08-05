"use client";

import { ResultOf } from "gql.tada";
import { AIChatPrompt } from "@/components/core/AIChat";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { HeroRoutingCard } from "./components/HeroRoutingCard";
import { ModuleHeroHomeFragment } from "./ModuleHeroHomeFragment";
import { readFragment } from "gql.tada";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

export function HeroHome({
  data,
}: {
  data: ResultOf<typeof ModuleHeroHomeFragment>;
}) {
  const updatedData = useContentfulLiveUpdates(data);

  const inspectorProps = useContentfulInspectorMode({
    entryId: updatedData.sys.id,
  });

  const { headline, prompts, routingCardsCollection } = updatedData;

  return (
    <div className="gradient-brand-v-dark-to-darker">
      <Section data-testid="HeroHome" className="dark px-0 pt-16 dsk:pt-32">
        <h1
          className="typo-display pt-4 mb-10 font-light text-center"
          {...inspectorProps({ fieldId: "headline" })}
        >
          <RichText content={headline} variant="title" spansOnly />
        </h1>

        <div
          className="w-full px-6 flex justify-center mb-[3.75rem] dsk:mb-[5.4rem]"
          {...inspectorProps({ fieldId: "prompts" })}
        >
          <AIChatPrompt prompts={prompts?.filter(Boolean)} />
        </div>

        <div
          className="flex flex-col dsk:flex-row"
          {...inspectorProps({ fieldId: "routingCards" })}
        >
          {routingCardsCollection?.items?.filter(Boolean).map((card) => {
            const data = readFragment(ComponentRoutingItemFragment, card);
            return <HeroRoutingCard key={data.sys.id} data={data} />;
          })}
        </div>
      </Section>
    </div>
  );
}
