import { readFragment, ResultOf } from "gql.tada";
import { GetModuleServiceSoftwareRoutingCardsById } from "./GetModuleServiceSoftwareRoutingCardsById";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentStatisticFragment } from "@/lib/contentful/fragments/ComponentStatisticFragment";
import { cx } from "cva";
import { focusStyle } from "@/utils/focusStyle";
import { AnimatableNumber } from "@/components/core/AnimatableNumber";

export const ModuleServiceSoftwareRoutingCards = ({
  data,
}: {
  data: ResultOf<typeof GetModuleServiceSoftwareRoutingCardsById>;
}) => (
  <Section
    data-testid="ModuleServiceSoftwareRoutingCards"
    className="dark pt-16 dsk:pt-32 pb-10 dsk:pb-16"
  >
    <h2 className="typo-heading-1 text-center font-light">
      <RichText
        content={data.moduleServiceSoftwareRoutingCards?.headline}
        variant="title"
        spansOnly
      />
    </h2>
    <ul className="pt-16 flex flex-col dsk:flex-row gap-6">
      {data.moduleServiceSoftwareRoutingCards?.cardsCollection?.items
        .filter(Boolean)
        .map((card, index) => {
          const image = readFragment(AssetFragment, card.image);
          const statistic = readFragment(
            ComponentStatisticFragment,
            card.statistic,
          );

          return (
            <li key={index}>
              <Link
                link={card.link}
                className={cx(
                  "group rounded-xl overflow-hidden flex flex-col dsk:flex-row transition-colors",
                  focusStyle,
                )}
              >
                <img
                  src={image?.url ?? ""}
                  alt={image?.description ?? ""}
                  className="w-full dsk:w-2/5 h-40 dsk:h-80 object-cover"
                />
                <span className="gradient-brand-h-dark-to-light">
                  <span className="flex flex-col p-6 transition-colors bg-transparent group-hover:bg-brand-700 group-focus-visible:bg-brand-700 h-full">
                    <span className="typo-body-large">{card.title}</span>
                    <span className="hidden dsk:block pt-4 text-content-secondary typo-body-small">
                      <RichText content={card.body} spansOnly />
                    </span>
                    {!!statistic && (
                      <span className="hidden dsk:flex flex-col grow justify-end">
                        <span className="block typo-heading-4 font-light text-highlight">
                          {statistic?.prefix}
                          <AnimatableNumber
                            value={
                              new Intl.NumberFormat("en-US").format(
                                Number(statistic?.value ?? "0"),
                              ) ?? "0"
                            }
                          />
                          {statistic?.suffix}
                        </span>
                        <span className="block typo-body-small pt-1">
                          <RichText
                            content={statistic.richTextLabel}
                            spansOnly
                          />
                        </span>
                      </span>
                    )}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
    </ul>
  </Section>
);
