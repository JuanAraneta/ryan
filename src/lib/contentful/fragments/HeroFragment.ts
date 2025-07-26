import { graphql } from "gql.tada";
import { ModuleHeroHomeFragment } from "./ModuleHeroHomeFragment";

export const HeroFragment = graphql(
  `
    fragment HeroFragment on ModuleHeroHome {
      ...ModuleHeroHomeFragment
    }
  `,
  [ModuleHeroHomeFragment],
);
