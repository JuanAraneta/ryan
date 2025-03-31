import { FC } from "react";

export interface HeroProps {
    name: string;
}

export const Hero: FC<HeroProps> = (props) => {
    return <section className="text-2xl">{props.name}</section>;
};
