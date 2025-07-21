import { Button } from '@/components/core/Button';
import { Link } from '@/components/core/Link';
import { RichTitleText } from '@/components/core/RichText';
import { GetModuleCustomerStoriesOverflowById } from '@/lib/contentful/query/GetModuleCustomerStoriesOverflowById';
import { readFragment, ResultOf } from 'gql.tada';
import { CustomerStoriesCarousel } from './CustomerStoriesCarousel';
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from '@/lib/contentful/fragments/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment';

export const ModuleCustomerStoriesCarousel = ({
  data,
}: {
  data: ResultOf<typeof GetModuleCustomerStoriesOverflowById>;
}) => (
  <section className="dark px-6 py-16 dsk:px-20 dsk:py-32">
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="typo-display font-light">
        <RichTitleText
          content={data.moduleCustomerStoriesCarousel?.title}
          spansOnly
        />
      </h1>
      {data.moduleCustomerStoriesCarousel?.callToAction && (
        <div className="py-10">
          <Button asChild>
            <Link link={data.moduleCustomerStoriesCarousel.callToAction} />
          </Button>
        </div>
      )}
    </div>
    {!!data.moduleCustomerStoriesCarousel?.customerStoriesCollection && (
      <CustomerStoriesCarousel
        data={readFragment(
          ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment,
          data.moduleCustomerStoriesCarousel?.customerStoriesCollection
        )}
      />
    )}
  </section>
);
