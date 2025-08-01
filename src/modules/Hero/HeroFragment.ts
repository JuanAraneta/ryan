import { graphql } from "gql.tada";
import { ModuleHeroHomeFragment } from "@/modules/HeroHome/ModuleHeroHomeFragment";

export const HeroFragment = graphql(
  `
    fragment HeroFragment on ModuleHeroHome {
      __typename
      ...ModuleHeroHomeFragment
    }
  `,
  [ModuleHeroHomeFragment],
);
