import { ComponentLogoCarousel } from "@/components/ComponentLogoCarousel";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { Statistics } from "@/components/core/Statistics";
import { GetModuleStatementHomeById } from ".";
import { cx } from "cva";
import { ResultOf } from "gql.tada";
import { getInspector } from "@/utils/inspectorMode";

export const ModuleStatementHome = ({
  data,
}: {
  data: ResultOf<typeof GetModuleStatementHomeById>;
}) => {
  if (!data.moduleStatementHome) return null;

  const { headline, statisticsCollection, brandCarouselRef } =
    data.moduleStatementHome;

  const inspector = getInspector(data.moduleStatementHome);

  return (
    <Section
      data-testid="ModuleStatementHome"
      className="dark py-16 dsk:pt-32 dsk:pb-20 flex flex-col items-center"
    >
      <h2
        className="typo-display font-light text-center px-6 max-w-5xl"
        {...inspector("headline")}
      >
        <RichText content={headline} variant="title" spansOnly />
      </h2>
      <ul className="pt-16 dsk:pt-20 w-full items-center justify-between flex flex-col dsk:flex-row gap-5">
        {statisticsCollection?.items.filter(Boolean).map((item, index) => {
          return (
            <li
              key={index}
              className={cx(
                "dsk:flex flex-col text-center dsk:text-left",
                index !== 0 && "hidden",
              )}
            >
              <Statistics data={item} />
            </li>
          );
        })}
      </ul>
      <ComponentLogoCarousel
        data={brandCarouselRef}
        className="pt-10 dsk:pt-20 h-20 dsk:h-36"
        {...inspector("brandCarouselRef")}
      />
    </Section>
  );
};
