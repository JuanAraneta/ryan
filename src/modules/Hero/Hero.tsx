import { HeroFragment } from "@/lib/contentful/fragments/HeroFragment";
import { ModuleHeroHomeFragment } from "@/lib/contentful/fragments/ModuleHeroHomeFragment";
import { ResultOf } from "gql.tada";
import { FC } from "react";
import { HeroHome } from "../HeroHome";

export type HeroProps = {
  data: ResultOf<typeof HeroFragment>;
};

export const Hero: FC<HeroProps> = ({ data }) => {
  console.log("🚀 ~ data:", data);

  const renderHero = () => {
    switch (data.__typename) {
      case "ModuleHeroHome":
        return <HeroHome data={data} />;
      default:
        return <span>Unknown Hero Type: {data.__typename}</span>;
    }
  };

  return <header>{renderHero()}</header>;
};
