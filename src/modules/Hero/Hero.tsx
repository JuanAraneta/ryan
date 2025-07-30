import { HeroFragment } from "@/lib/contentful/fragments/HeroFragment";
import { ResultOf } from "gql.tada";
import { FC } from "react";
import { HeroHome } from "../HeroHome";
import { readFragment } from "gql.tada";
import { ModuleHeroHomeFragment } from "@/lib/contentful/fragments/ModuleHeroHomeFragment";

export type HeroProps = {
  data: ResultOf<typeof HeroFragment>;
};

export const Hero: FC<HeroProps> = ({ data }) => {
  const renderHero = () => {
    switch (data.__typename) {
      case "ModuleHeroHome": {
        const heroData = readFragment(ModuleHeroHomeFragment, data);
        return <HeroHome data={heroData} />;
      }
      default:
        return <span>Unknown Hero Type: {data.__typename}</span>;
    }
  };

  return <header>{renderHero()}</header>;
};
