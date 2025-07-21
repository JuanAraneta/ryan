import { Link } from '@/components/core/Link';
import { RichText, RichTitleText } from '@/components/core/RichText';
import { ComponentStatisticFragment } from '@/lib/contentful/fragments/ComponentStatisticFragment';
import { GetModuleExpertsOverflowById } from '@/lib/contentful/query/GetModuleExpertsOverflowById';
import { readFragment, ResultOf } from 'gql.tada';
import { ExpertsOverflowExpertsListScroll } from './components/ExpertsOverflowExpertsListScroll';
import { ModuleExpertsOverflowExpertsListCollectionFragment } from '@/lib/contentful/fragments/ModuleExpertsOverflowExpertsListCollectionFragment';
import { AnimatableNumber } from '@/components/core/AnimatableNumber';
import { AssetFragment } from '@/lib/contentful/fragments/AssetFragment';
import { Button } from '@/components/core/Button';
import Image from 'next/image';

export const ModuleExpertsOverflow = ({
  data,
}: {
  data: ResultOf<typeof GetModuleExpertsOverflowById>;
}) => {
  const statistic = readFragment(
    ComponentStatisticFragment,
    data.moduleExpertsOverflow?.statistic
  );
  const statisticFlair = readFragment(
    AssetFragment,
    data.moduleExpertsOverflow?.statisticFlair
  );
  return (
    <section className="dark px-6 py-16 dsk:px-20 dsk:py-32">
      <div className="flex flex-col dsk:flex-row justify-between items-center">
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
          <div className="pt-6 flex items-center justify-center dsk:justify-start">
            <Button asChild>
              <Link link={data.moduleExpertsOverflow?.callToAction} />
            </Button>
          </div>
        </div>
        {!!statistic && (
          <div className="hidden dsk:flex items-center justify-center gap-10">
            {statisticFlair?.url && (
              <Image src={statisticFlair.url} alt="Statistic flair" />
            )}
            <div className="flex flex-col">
              <p className="text-content-secondary typo-body-large">
                <RichText content={statistic.label} spansOnly />
              </p>
              <p className="typo-display font-light text-highlight pt-3">
                {statistic?.prefix}
                <AnimatableNumber
                  value={
                    new Intl.NumberFormat('en-US').format(
                      Number(statistic?.value ?? '0')
                    ) ?? '0'
                  }
                />
                {statistic?.suffix}
              </p>
            </div>
          </div>
        )}
      </div>
      {!!data.moduleExpertsOverflow?.expertsListCollection && (
        <ExpertsOverflowExpertsListScroll
          data={readFragment(
            ModuleExpertsOverflowExpertsListCollectionFragment,
            data.moduleExpertsOverflow?.expertsListCollection
          )}
        />
      )}
    </section>
  );
};
