import { client } from "@/lib/contentful/client";
import { IPage } from "@/models/contentful";

// pageCodename should be get from page.codename if it's different to "page".
const marketCodename = "page";

export const getAllPages = async (): Promise<IPage[]> => {
  const response = await client.getEntries({
    content_type: marketCodename,
  });
  return response.items as IPage[];
};
