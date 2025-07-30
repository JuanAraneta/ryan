import { ComponentInsightFragment } from "@/lib/contentful/fragments/ComponentInsightFragment";
import { FragmentOf } from "gql.tada";
import { Tag } from "../Tag";
import { cx } from "cva";

type CardProps = {
  data: FragmentOf<typeof ComponentInsightFragment>;
  className?: string;
};

export const Card = ({ data, className }: CardProps) => {
  return (
    <div
      data-testid="Card"
      className={cx(
        "rounded-lg w-full h-full p-[1.3rem] overflow-hidden  bg-[url('https://picsum.photos/500/500')] image-overlay",
        className,
      )}
    >
      <p className="inline-flex mb-6 items-center gap-3">
        <span className="block rounded-full h-2 w-2 bg-brand-300" />
        <span className="typo-eyebrow">NEWS & ENSIGHTS</span>
      </p>
      <p className="mb-3">The Hidden Volatility and Debt Issues of Tariffs</p>
      <Tag text="News Mention" />
    </div>
  );
};
