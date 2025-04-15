import { client } from "@/lib/contentful/client";
import { IMarketFields } from "@/models/contentful";

// pageCodename should be get from page.codename if it's different to "page".
const marketCodename = "market";

export const getMarkets = async (): Promise<IMarketFields[]> => {
  const response = await client.getEntries({
    content_type: marketCodename,
  });
  return response.items.map(
    ({ fields }) => fields
  ) as unknown as IMarketFields[];
};
