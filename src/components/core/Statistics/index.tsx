import { AnimatableNumber } from "@/components/core/AnimatableNumber";
import { RichText } from "@/components/core/RichText";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { readFragment, FragmentOf } from "gql.tada";
import { getInspector } from "@/utils/inspectorMode";

export const Statistics = ({
  data,
}: {
  data: FragmentOf<typeof ComponentStatisticFragment>;
}) => {
  const statisticData = readFragment(ComponentStatisticFragment, data);
  const { prefix, value, suffix, richTextLabel } = statisticData;

  const inspector = getInspector(statisticData);

  return (
    <div className="dsk:flex flex-col text-center dsk:text-left">
      <p className="typo-display font-light text-highlight">
        <span {...inspector("prefix")}>{prefix}</span>
        <AnimatableNumber
          value={
            new Intl.NumberFormat("en-US").format(Number(value ?? "0")) ?? "0"
          }
          {...inspector("value")}
        />
        <span {...inspector("suffix")}>{suffix}</span>
      </p>
      <p
        className="text-content-secondary typo-eyebrow mt-2 font-bold dsk:max-w-60 max-w-52 text-balance"
        {...inspector("richTextLabel")}
      >
        <RichText content={richTextLabel} spansOnly />
      </p>
    </div>
  );
};
