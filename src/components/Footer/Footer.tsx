import { contentClient } from "@/lib/contentful/contentClient";
import { GetFooterByMarketId } from "./GetFooterByMarketId";
import { Section } from "../core/Section";
import { readFragment, ResultOf } from "gql.tada";
import { MarketFragment } from "@/lib/contentful/fragments/MarketFragment";
import { routingUtils } from "@/lib/util/routingUtils";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { cx } from "cva";
import { focusStyle } from "@/utils/focusStyle";
import { Link } from "../core/Link";
import { ExternalSVGIcon } from "../core/ExternalSVGIcon";

export const Footer = async ({
  market,
}: {
  market: ResultOf<typeof MarketFragment>;
}) => {
  const locale = await routingUtils.getLocale(market);
  const marketResponse = await contentClient.query(GetFooterByMarketId, {
    marketId: market.sys.id,
    locale,
  });
  const footer = marketResponse.data?.market?.footer;
  const logo = readFragment(AssetFragment, footer?.logo);

  if (!footer) {
    console.error(`No footer data found in market with ID "${market.sys.id}"`);
    return null;
  }

  return (
    <footer className="gradient-brand-v-dark-to-darker">
      <Section data-testid="Footer" asChild>
        <div className="dark flex flex-col">
          {logo?.url && (
            <Link href="/" className={cx("pt-10 pb-4", focusStyle)}>
              <ExternalSVGIcon url={logo.url} alt={logo.description ?? ""} />
            </Link>
          )}
          <div className="flex justify-between dsk:gap-8 flex-col dsk:flex-row">
            <ul className="py-16 dsk:py-9 grid grid-cols-2 dsk:flex flex-wrap gap-y-10">
              {footer.columnsCollection?.items.map((column, index) => (
                <li key={index}>
                  <p className="typo-body-large">{column?.title}</p>
                  <ul className="pr-10 pt-6 flex flex-col gap-2">
                    {column?.linksCollection?.items.map((link, index) => (
                      <li key={index}>
                        <Link
                          className={cx(
                            focusStyle,
                            "typo-body-small text-neutral-200",
                          )}
                          link={link}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 pb-10">
              <p>{footer.socialMedia?.title}</p>
              <ul className="flex gap-4 items-center">
                {footer.socialMedia?.linkCollection?.items.map(
                  (social, index) => {
                    const icon = readFragment(AssetFragment, social?.icon);

                    return (
                      <li key={index}>
                        <Link className={cx(focusStyle)} link={social?.link}>
                          {icon?.url && (
                            <ExternalSVGIcon
                              className="size-6 flex items-center justify-center"
                              url={icon?.url}
                              alt={
                                social?.platformName ?? icon?.description ?? ""
                              }
                            />
                          )}
                        </Link>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </div>
          <hr className="w-full text-white/50 gap-8" />
          <div className="py-10 dsk:py-8 flex flex-col dsk:flex-row gap-10 justify-between dsk:items-center">
            <ul className="flex typo-body-small text-neutral-200 border-neutral-200 flex-wrap gap-y-3">
              {footer.legalLinksCollection?.items.map((link, index) => (
                <li
                  key={index}
                  className="not-last:pr-4 not-last:mr-4 not-last:border-r"
                >
                  <Link
                    className={cx(focusStyle, "whitespace-nowrap")}
                    link={link}
                  />
                </li>
              ))}
            </ul>
            <p className="typo-caption">{footer.copyright}</p>
          </div>
        </div>
      </Section>
    </footer>
  );
};
