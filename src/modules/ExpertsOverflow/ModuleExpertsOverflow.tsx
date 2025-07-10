"use client";

import { Link } from "@/components/core/Link";
import { RichText, RichTitleText } from "@/components/core/RichText";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { GetModuleExpertsOverflowById } from "@/lib/contentful/query/GetModuleExpertsOverflowById";
import { readFragment, ResultOf } from "gql.tada";
import { ModuleExpertsOverflowExpertsListScroll } from "./components/ModuleExpertsOverflowExpertsListScroll";
import { ModuleExpertsOverflowExpertsListCollectionFragment } from "@/lib/contentful/fragments/ModuleExpertsOverflowExpertsListCollectionFragment";

export const ModuleExpertsOverflow = ({
  data,
}: {
  data: ResultOf<typeof GetModuleExpertsOverflowById>;
}) => {
  const statistic = readFragment(
    ComponentStatisticFragment,
    data.moduleExpertsOverflow?.statistic
  );
  return (
    <section className="dark gradient-brand-v-light-to-dark px-6 py-16 dsk:px-20 dsk:py-32">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center dsk:justify-left">
          <h2 className="typo-heading-6 text-highlight text-center dsk:text-left">
            <RichText content={data.moduleExpertsOverflow?.eyebrow} spansOnly />
          </h2>
          <p className="typo-heading-1 pt-4 font-light text-center dsk:text-left">
            <RichTitleText
              content={data.moduleExpertsOverflow?.title}
              spansOnly
            />
          </p>
          <div className="pt-6">
            <Link
              className="border border-highlight rounded-full px-6 py-4 typo-button-cta w-fit font-bold inline-block"
              link={data.moduleExpertsOverflow?.callToAction}
            />
          </div>
        </div>
        {!!statistic && (
          <div className="hidden dsk:flex flex-col">
            <p className="text-content-secondary typo-body-large">
              <RichText content={statistic.label} spansOnly />
            </p>
            <p className="typo-display font-light text-highlight pt-3">
              {statistic?.prefix}
              {new Intl.NumberFormat("en-US").format(
                Number(statistic?.value ?? "0")
              )}
              {statistic?.suffix}
            </p>
          </div>
        )}
      </div>
      {!!data.moduleExpertsOverflow?.expertsListCollection && (
        <ModuleExpertsOverflowExpertsListScroll
          data={readFragment(
            ModuleExpertsOverflowExpertsListCollectionFragment,
            data.moduleExpertsOverflow?.expertsListCollection
          )}
        />
      )}
    </section>
  );
};
