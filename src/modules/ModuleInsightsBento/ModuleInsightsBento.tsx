import { readFragment, ResultOf } from "gql.tada";
import { cx } from "cva";
import { GetModuleInsightsBentoById } from ".";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { Section } from "@/components/core/Section";
import { RichText } from "@/components/core/RichText";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { NewsletterSignup } from "@/components/core/NewsletterSignup";
import { Card } from "@/components/core/Card/Card";
import { getInspector } from "@/utils/inspectorMode";

const LAYOUTS = {
  // 4 is the max number of insights in the module.
  1: ["col-span-2"],
  2: ["col-span-1", "col-span-1"],
  3: ["col-span-1", "col-span-1", "col-span-2 col-start-2"],
  4: ["col-span-1", "col-span-1", "col-span-2", "col-span-1"],
};

export const ModuleInsightsBento = ({
  data,
}: {
  data: ResultOf<typeof GetModuleInsightsBentoById>;
}) => {
  if (!data.moduleInsightsBento) return null;

  const {
    headline,
    subheading,
    eyebrow,
    insightsCollection,
    exploreInsightsButton,
    newsletterSignup,
  } = data.moduleInsightsBento;

  const inspector = getInspector(data.moduleInsightsBento);

  const link = readFragment(ComponentLinkFragment, exploreInsightsButton);

  const insights = insightsCollection?.items.filter(Boolean);
  const insightsCount = insights?.length as keyof typeof LAYOUTS;
  const layout = LAYOUTS[insightsCount] || ["col-span-1"];

  return (
    <Section data-testid="ModuleInsightsBento" className="dark py-16 dsk:py-32">
      <h2
        className="typo-display font-light max-w-[39rem] mb-16 dsk:mb-20 mx-auto text-center"
        {...inspector("headline")}
      >
        <RichText content={headline} variant="title" spansOnly />
      </h2>

      <div className="flex flex-col dsk:grid grid-cols-3 auto-rows-fr gap-4 w-full mb-5">
        <div className="aspect-auto dsk:aspect-square flex flex-col gap-6 items-start text-left pr-0 dsk:pr-8 mb-16 dsk:mb-0">
          <h6
            className="typo-heading-6 text-new-gold"
            {...inspector("eyebrow")}
          >
            {eyebrow}
          </h6>
          <h4
            className="typo-heading-4 opacity-70"
            {...inspector("subheading")}
          >
            {subheading}
          </h4>

          <Button asChild>
            <Link link={link} {...inspector("exploreInsightsButton")}>
              {link?.label}
            </Link>
          </Button>
        </div>

        {insights?.map((insight, index) => (
          <Card
            key={index}
            data={insight}
            className={cx("aspect-square dsk:aspect-auto", layout[index])}
          />
        ))}
      </div>
      {newsletterSignup && <NewsletterSignup data={newsletterSignup} />}
    </Section>
  );
};
