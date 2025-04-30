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

  // Logic to determine the page path based on the URL slug.
  // 1. If the slug consists only of the region (market) and/or language (locale),
  //    the page path is set to the default page (DEFAULT_PAGE).
  // 2. If the slug contains additional segments beyond the region and/or language,
  //    the path is set to the rest of the slug, excluding the region/language part.
  //    Example: For a slug like ['us', 'es-ar', 'about', 'team'], the path will be 'about/team'.
  //    This allows for dynamic routing based on different markets and languages while defaulting to a
  //    specific page when only market/locale info is present.
  const hasMarket = Boolean(marketFromUrl);
  const hasLocale = Boolean(localeFromUrl);
  const knownSegments = Number(hasMarket) + Number(hasLocale);
  if (slug.length <= knownSegments) {
    path = DEFAULT_PAGE;
  } else {
    path = slug.slice(knownSegments).join("/");
  }

  return {
    path,
    locale: localeFromUrl || DEFAULT_LOCALE,
    market: marketFromUrl ? slug[0] : DEFAULT_MARKET,
  } as PageParams;
};
