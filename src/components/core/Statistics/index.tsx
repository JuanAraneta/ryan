import { AnimatableNumber } from "@/components/core/AnimatableNumber";
import { RichText } from "@/components/core/RichText";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { readFragment, FragmentOf } from "gql.tada";

export const Statistics = ({
  data,
}: {
  data: FragmentOf<typeof ComponentStatisticFragment>;
}) => {
  const { prefix, value, suffix, richTextLabel } = readFragment(
    ComponentStatisticFragment,
    data,
  );

  return (
    <div className="dsk:flex flex-col text-center dsk:text-left">
      <p className="typo-display font-light text-highlight">
        {prefix}
        <AnimatableNumber
          value={
            new Intl.NumberFormat("en-US").format(Number(value ?? "0")) ?? "0"
          }
        />
        {suffix}
      </p>
      <p className="text-content-secondary typo-eyebrow pt-2 font-bold dsk:max-w-60 max-w-52 text-balance">
        <RichText content={richTextLabel} spansOnly />
      </p>
    </div>
  );
};
