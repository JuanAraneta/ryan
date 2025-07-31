import { AnimatableNumber } from "@/components/core/AnimatableNumber";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { GetModuleStatementHomeById } from "@/lib/contentful/query/GetModuleStatementHomeById";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";

export const ModuleStatementHome = ({
  data,
}: {
  data: ResultOf<typeof GetModuleStatementHomeById>;
}) => (
  <Section className="dark py-16 dsk:pt-32 dsk:pb-20 flex flex-col items-center">
    <h2 className="typo-display font-light text-center px-6 max-w-5xl">
      <RichText
        content={data.moduleStatementHome?.headline}
        variant="title"
        spansOnly
      />
    </h2>
    <ul className="pt-16 dsk:pt-20 w-full items-center justify-between flex flex-col dsk:flex-row gap-5">
      {data.moduleStatementHome?.statisticsCollection?.items.map(
        (item, index) => {
          const statistic = readFragment(ComponentStatisticFragment, item);
          if (!statistic) return null;
          return (
            <div
              key={index}
              className={cx(
                "dsk:flex flex-col text-center dsk:text-left",
                index > 1 && "hidden",
              )}
            >
              <p className="typo-display font-light text-highlight">
                {statistic?.prefix}
                <AnimatableNumber
                  value={
                    new Intl.NumberFormat("en-US").format(
                      Number(statistic?.value ?? "0"),
                    ) ?? "0"
                  }
                />
                {statistic?.suffix}
              </p>
              <p className="text-content-secondary typo-eyebrow pt-2 font-bold dsk:max-w-60 max-w-52 text-balance">
                <RichText content={statistic.richTextLabel} spansOnly />
              </p>
            </div>
          );
        },
      )}
    </ul>
    <div className="overflow-hidden [mask-image:var(--horizontal-fade-linear-gradient-mask)] w-full">
      <div className="pt-10 dsk:pt-20 flex items-center flex-1 animate-carousel w-fit">
        {Array.from({ length: 3 }).map((_, index) => (
          <ul
            key={index}
            aria-hidden={index !== 0}
            className="flex items-center gap-6 dsk:gap-16 px-3 dsk:px-8 h-20 dsk:h-36"
          >
            {data.moduleStatementHome?.brandCarouselCollection?.items.map(
              (item) => {
                const logo = readFragment(AssetFragment, item);
                return (
                  logo?.url && (
                    <img
                      key={logo.url}
                      src={logo.url}
                      alt={logo.description ?? ""}
                      className="max-w-24 max-h-16 dsk:max-w-36 dsk:max-h-24 grayscale opacity-75 brightness-[1000%] contrast-50"
                    />
                  )
                );
              },
            )}
          </ul>
        ))}
      </div>
    </div>
  </Section>
);
