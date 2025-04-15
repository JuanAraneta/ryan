import { cache } from "react";
import { client } from "@/lib/contentful/client";
import { PageParams } from "@/types/generic";
import { IPage, IPageFields } from "@/models/contentful";

// pageCodename should be get from page.codename if it's different to "page".
const pageCodename = "page";
const marketCodename = "market";

export const getPage = cache(async (params: PageParams) => {
  const { path, locale, market } = params;

  try {
    const response = await client.getEntries({
      content_type: pageCodename,
      "fields.slug": path,
      "fields.market.sys.contentType.sys.id": marketCodename,
      "fields.market.fields.slug": market,
      locale,
    });

    const pageFields = (response.items[0] as IPage).fields as IPageFields;

    return {
      ...pageFields,
      modules:
        pageFields.modules?.map((mod) => ({
          ...mod.fields,
          type: mod.sys.contentType.sys.id,
        })) ?? [],
    };
  } catch (error) {
    return null;
  }
});
