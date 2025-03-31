import { HeroProps } from "./Hero";

// props type should be changed to CMS module content type
export const heroMorpher = (props: any): HeroProps => {
    if (!props) {
        throw new Error("Hero module props not available.");
    }

    return {
        name: props.name,
    };
};
