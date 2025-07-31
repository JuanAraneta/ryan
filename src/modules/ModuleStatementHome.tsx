import { ComponentLogoCarousel } from "@/components/ComponentLogoCarousel";
import { AnimatableNumber } from "@/components/core/AnimatableNumber";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { GetModuleStatementHomeById } from "@/lib/contentful/query/GetModuleStatementHomeById";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";

export const ModuleStatementHome = ({
  data,
}: {
  data: ResultOf<typeof GetModuleStatementHomeById>;
}) => (
  <Section
    data-testid="ModuleStatementHome"
    className="dark py-16 dsk:pt-32 dsk:pb-20 flex flex-col items-center"
  >
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
            <li
              key={index}
              className={cx(
                "dsk:flex flex-col text-center dsk:text-left",
                index !== 0 && "hidden",
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
            </li>
          );
        },
      )}
    </ul>
    <ComponentLogoCarousel
      data={data.moduleStatementHome?.brandCarouselRef}
      className="pt-10 dsk:pt-20 h-20 dsk:h-36"
    />
  </Section>
);
