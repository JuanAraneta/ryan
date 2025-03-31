import { IError404Fields } from "@/models/contentful";

export const error404Morpher = (props: IError404Fields, pageParams?: any) => {
    return {
        message: props.message,
    };
};
