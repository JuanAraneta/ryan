interface Props {
    message: string;
}

export const Error404 = (props: Props) => {
    return <div>{props.message}</div>;
};
