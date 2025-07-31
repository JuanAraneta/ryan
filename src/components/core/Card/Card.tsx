import { cx } from "cva";
import { ComponentInsightFragment } from "@/lib/contentful/fragments/ComponentInsightFragment";
import { readFragment, FragmentOf } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Tag } from "@/components/core/Tag";
import { Link } from "@/components/core/Link";

type CardProps = {
  data: FragmentOf<typeof ComponentInsightFragment>; // TODO: Add extra types when we define the articles, insights, etc.
  className?: string;
};

export const Card = ({ data, className }: CardProps) => {
  const { title, eyebrow, contentType, image, link } = readFragment(
    ComponentInsightFragment,
    data,
  );
  const imageUrl = readFragment(AssetFragment, image);

  return (
    <Link
      link={link}
      data-testid="Card"
      className={cx(
        "rounded-lg w-full h-full p-[1.3rem] overflow-hidden gradient-overlay bg-cover bg-center",
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
    </Link>
  );
};
