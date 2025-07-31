import { cx } from "cva";
import { ComponentInsightFragment } from "@/lib/contentful/fragments/ComponentInsightFragment";
import { readFragment, FragmentOf } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Tag } from "@/components/core/Tag";

type CardProps = {
  data: FragmentOf<typeof ComponentInsightFragment>;
  className?: string;
};

export const Card = ({ data, className }: CardProps) => {
  if (!data) return null;

  const { title, eyebrow, contentType, image, link } = readFragment(
    ComponentInsightFragment,
    data,
  );
  const imageUrl = readFragment(AssetFragment, image);

  return (
    <div
      data-testid="Card"
      className={cx(
        "rounded-lg w-full h-full p-[1.3rem] overflow-hidden  bg-[url('https://picsum.photos/500/500')] gradient-overlay bg-cover bg-center",
        className,
      )}
      style={{ backgroundImage: `url(${imageUrl?.url})` }}
    >
      <p className="inline-flex mb-6 items-center gap-3">
        <span className="block rounded-full h-2 w-2 bg-brand-300" />
        <span className="typo-eyebrow">{eyebrow}</span>
      </p>
      <p className="mb-3">{title}</p>
      {contentType && <Tag text={contentType} />}
    </div>
  );
};
