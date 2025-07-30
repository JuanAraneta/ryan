type TagProps = {
  text: string;
};

export const Tag = ({ text }: TagProps) => {
  return (
    <div className="bg-brand-700/50 rounded-sm w-min text-nowrap typo-body-small px-3 py-1">
      {text}
    </div>
  );
};
