import { cache } from "react";
import { client } from "@/lib/contentful/client";
import { PageParams } from "@/types/generic";
import { IPage, IPageFields } from "@/models/contentful";

// Page type should be replaced by CMS page content Type.
type Page = any;

// pageCodename should be get from page.codename if it's different to "page".
const pageCodename = "page";

export const getPage = cache(async (params: PageParams) => {
  const { path, lang } = params;
  console.log(params);

  try {
    const response = await client.getEntries({
      content_type: pageCodename,
      "fields.slug": path,
      locale: lang,
    });

    const pageFields = (response.items[0] as IPage).fields as IPageFields;
    console.log(pageFields);

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
