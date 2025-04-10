import { PageParams } from "@/types/generic";
import { headers, type UnsafeUnwrappedHeaders } from "next/headers";
import getLocales from "@/lib/contentful/getLocales";
import { DEFAULT_LOCALE, DEFAULT_PAGE } from "@/constants";

// method only for use inside a page
export const getPageParams = async (slug: string[] | undefined) => {
  let path: string;
  const headerList = (await headers()) as unknown as UnsafeUnwrappedHeaders;

  // If slug is empty, return default page and locale
  if (!slug || slug.length === 0) {
    return {
      path: DEFAULT_PAGE,
      locale: DEFAULT_LOCALE,
    };
  }

  // Get Contentful locales
  const locales = await getLocales();

  // Extract localeuage from the URL (assuming it's the first segment, e.g., "/en-US/some-page")
  const localeFromUrl = locales.find((locale) => slug[0] === locale);

  // Fallback to user's configured language if no language is in the URL
  const userLocale = headerList.get("accept-language")?.split(",")[0] || "en";

  // If only locale is present return default page
  if (slug.length === 1 && localeFromUrl) {
    path = DEFAULT_PAGE;
  } else {
    path = slug.pop() as string;
  }

  return {
    path,
    locale: localeFromUrl || userLocale,
  } as PageParams;
};
