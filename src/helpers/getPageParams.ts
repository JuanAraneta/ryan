import { PageParams } from "@/types/generic";
import { headers, type UnsafeUnwrappedHeaders } from "next/headers";
import { getMarkets } from "@/lib/contentful/getMarkets";
import { IMarket } from "@/models/contentful";
import getLocales from "@/lib/contentful/getLocales";
import { DEFAULT_LOCALE, DEFAULT_PAGE, DEFAULT_MARKET } from "@/constants";

// method only for use inside a page
export const getPageParams = async (slug?: string[]) => {
  let path: string;
  const headerList = (await headers()) as unknown as UnsafeUnwrappedHeaders;

  // If slug is empty, return default page and locale
  if (!slug || slug.length === 0) {
    return {
      path: DEFAULT_PAGE,
      locale: DEFAULT_LOCALE,
      market: DEFAULT_MARKET,
    };
  }

  // Get markets from Contentful
  const markets = await getMarkets();

  // Extract market from the url (assuming it's the first segment, e.g., "/canada/en-US" or  "/canada/services")
  const marketFromUrl = markets.find(
    (market) => market.slug.toLowerCase() === slug[0]
  );

  // Get Contentful locales
  const locales = await getLocales();

  // Extract locale from the URL (assuming it could be the first or second segment, e.g., "/en-US/some-page" or "/canada/en-US")
  const localeFromUrl = locales.find(
    (locale) => (slug[0] || slug[1]) === locale
  );

  // Fallback to user's configured language if no language is in the URL
  // const userLocale = headerList.get("accept-language")?.split(",")[0] || "en";

  // If only locale is present return default page
  if (
    (slug.length === 1 && (localeFromUrl || marketFromUrl)) ||
    (slug.length === 2 && localeFromUrl && marketFromUrl)
  ) {
    path = DEFAULT_PAGE;
  } else {
    path = slug.pop() as string;
  }

  return {
    path,
    locale: localeFromUrl || DEFAULT_LOCALE,
    market: marketFromUrl ? slug[0] : DEFAULT_MARKET,
  } as PageParams;
};
