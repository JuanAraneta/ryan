interface NotFoundProps {
  name: string;
}

export const NotFound = (props: NotFoundProps) => {
  return <div>{props.name}</div>;
};
