import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { GetModuleCustomerStoriesOverflowById } from ".";
import { readFragment, ResultOf } from "gql.tada";
import { CustomerStoriesCarousel } from "./CustomerStoriesCarousel";
import { ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment } from "@/modules/ModuleCustomerStoriesCarousel/ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment";
import { Section } from "@/components/core/Section";
import { RichText } from "@/components/core/RichText";
import { getInspector } from "@/utils/inspectorMode";

export const ModuleCustomerStoriesCarousel = ({
  data,
}: {
  data: ResultOf<typeof GetModuleCustomerStoriesOverflowById>;
}) => {
  if (!data.moduleCustomerStoriesCarousel) return null;
  const inspector = getInspector(data.moduleCustomerStoriesCarousel);

  return (
    <Section
      data-testid="ModuleCustomerStoriesCarousel"
      className="dark py-16 dsk:py-32"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="typo-display font-light" {...inspector("richTextTitle")}>
          <RichText
            content={data.moduleCustomerStoriesCarousel?.richTextTitle}
            variant="title"
            spansOnly
          />
        </h2>
        {data.moduleCustomerStoriesCarousel?.callToAction && (
          <div className="py-10">
            <Button asChild>
              <Link
                {...inspector("callToAction")}
                link={data.moduleCustomerStoriesCarousel.callToAction}
              />
            </Button>
          </div>
        )}
      </div>
      {!!data.moduleCustomerStoriesCarousel?.customerStoriesCollection && (
        <CustomerStoriesCarousel
          data={readFragment(
            ModuleCustomerStoriesCarouselCustomerStoriesCollectionFragment,
            data.moduleCustomerStoriesCarousel?.customerStoriesCollection,
          )}
        />
      )}
    </Section>
  );
};
