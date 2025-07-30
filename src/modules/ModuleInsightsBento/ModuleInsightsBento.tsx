import { readFragment, ResultOf } from "gql.tada";
import { Section } from "@/components/core/Section";
import { RichText } from "@/components/core/RichText";
import { Button } from "@/components/core/Button";
import { GetModuleInsightsBentoById } from "@/lib/contentful/query/GetModuleInsightsBentoById";
import { Link } from "@/components/core/Link";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { NewsletterSignup } from "@/components/core/NewsletterSignup";
import { Card } from "@/components/core/Card/Card";

export const ModuleInsightsBento = ({
  data,
}: {
  data: ResultOf<typeof GetModuleInsightsBentoById>;
}) => {
  if (!data?.moduleInsightsBento) return null;

  const {
    headline,
    subheading,
    eyebrow,
    insights,
    exploreInsightsButton,
    newsletterSignup,
  } = data.moduleInsightsBento;

  const link = readFragment(ComponentLinkFragment, exploreInsightsButton);

  return (
    <Section data-testid="ModuleInsightsBento" className="dark py-16 dsk:py-32">
      <h2 className="typo-display font-light max-w-[39rem] mb-20 mx-auto text-center">
        <RichText content={headline} variant="title" spansOnly />
      </h2>

      <div className="grid grid-cols-3 grid-rows-[25rem] gap-4 w-full mb-5">
        <div className="aspect-square flex flex-col gap-6 items-start text-left pr-8">
          <h6 className="typo-heading-6 text-new-gold">{eyebrow}</h6>
          <h4 className="typo-heading-4 opacity-70">{subheading}</h4>

          <Button asChild>
            <Link link={link}>{link?.label}</Link>
          </Button>
        </div>

        {insights && <Card className="col-span-2" data={insights} />}
        {insights && <Card data={insights} />}
        {insights && <Card data={insights} />}
        {insights && <Card data={insights} />}
      </div>

      {newsletterSignup && <NewsletterSignup data={newsletterSignup} />}
    </Section>
  );
};
