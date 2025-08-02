import { readFragment, ResultOf } from "gql.tada";
import { GetModuleSoftwareServicesRoutingGridById } from "./GetModuleSoftwareServicesRoutingGridById";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Link } from "@/components/core/Link";
import { Button } from "@/components/core/Button";
import { cx } from "cva";
import { focusStyle } from "@/utils/focusStyle";
import { MdArrowForward, MdAdd } from "react-icons/md";
import { Constant } from "@/components/providers/ConstantsContext";

export const ModuleSoftwareAndServicesRoutingGrid = ({
  data,
}: {
  data: ResultOf<typeof GetModuleSoftwareServicesRoutingGridById>;
}) => {
  const testimonialImage = readFragment(
    AssetFragment,
    data.moduleSoftwareServicesRoutingGrid?.testimonial?.image,
  );
  const testimonialLogo = readFragment(
    AssetFragment,
    data.moduleSoftwareServicesRoutingGrid?.testimonial?.logo,
  );

  const testimonial = (
    <div className="dsk:max-w-xs justify-self-end">
      <div className="aspect-video rounded-sm overflow-hidden gradient-overlay">
        <img
          className="size-full object-cover relative -z-10"
          src={testimonialImage?.url ?? ""}
        />
        <img
          className="absolute left-3 bottom-3 max-w-28"
          src={testimonialLogo?.url ?? ""}
        />
      </div>
      <p className="typo-body-small text-content-secondary pt-6">
        <RichText
          content={
            data.moduleSoftwareServicesRoutingGrid?.testimonial?.testimonial
          }
          spansOnly
        />
      </p>
    </div>
  );

  return (
    <Section
      data-testid="ModuleSoftwareAndServicesRoutingGrid"
      className="light first:pt-16 first:dsk:pt-32 not-last:pb-8 not-last:dsk:pb-16 pt-8 dsk:pt-16 pb-16 dsk:pb-32 flex flex-col gap-16"
    >
      <div className="grid dsk:grid-cols-2">
        <div>
          <h2 className="text-highlight typo-heading-2 font-light">
            <RichText
              content={data.moduleSoftwareServicesRoutingGrid?.title}
              spansOnly
            />
          </h2>
          <p className="pt-6 typo-body-base text-content-secondary">
            <RichText
              content={data.moduleSoftwareServicesRoutingGrid?.description}
              spansOnly
            />
          </p>
          <div className="pt-6 dsk:pt-10">
            <Button asChild>
              <Link link={data.moduleSoftwareServicesRoutingGrid?.cta} />
            </Button>
          </div>
        </div>
        <div className="max-dsk:hidden">{testimonial}</div>
      </div>
      <div>
        <ul className="grid dsk:grid-cols-4 gap-3 dsk:gap-y-8 dsk:gap-x-6">
          {data.moduleSoftwareServicesRoutingGrid?.gridItemsCollection?.items
            .filter(Boolean)
            .map((page, index) => (
              <li
                key={index}
                className={cx("size-full", index > 3 && "max-dsk:hidden")}
              >
                <Link
                  link={{ internalSource: page }}
                  className={cx(
                    "group block relative overflow-hidden transition-colors bg-neutral-50 hover:bg-white focus-visible:bg-white border border-border-primary rounded-xl size-full p-6",
                    focusStyle,
                  )}
                >
                  <span className="block gradient-gold-h-dark-to-light w-full h-1 absolute bottom-0 left-0 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform" />
                  <span className="flex justify-between gap-6">
                    <span className="block typo-heading-5">{page.title}</span>
                    <MdArrowForward className="text-brand-300 size-6 transition-transform -translate-x-2 group-hover:translate-x-0 group-focus-visible:translate-x-0" />
                  </span>
                  <span className="hidden dsk:block pt-3 dsk:pb:pb-7 last:dsk:pb-12 text-content-secondary">
                    <RichText content={page.shortDescription} spansOnly />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
        {(data.moduleSoftwareServicesRoutingGrid?.gridItemsCollection?.total ??
          0) > 4 && (
          <div
            data-testid="hello"
            className={cx(
              "flex justify-end pt-6 dsk:pt-10",
              (data.moduleSoftwareServicesRoutingGrid?.gridItemsCollection
                ?.total ?? 0) <= 8 && "dsk:hidden",
            )}
          >
            <Link
              className={cx(
                "typo-button-cta flex items-center gap-3 text-brand-500 font-bold p-4 rounded-xl transition-colors",
                focusStyle,
              )}
              link={data.moduleSoftwareServicesRoutingGrid?.cta}
            >
              <Constant name="seeMore" />
              <MdAdd className="size-6" />
            </Link>
          </div>
        )}
      </div>
      <div className="dsk:hidden">{testimonial}</div>
    </Section>
  );
};
