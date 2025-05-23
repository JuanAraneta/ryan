import { createClient } from "contentful";

if (
  !process.env.CONTENTFUL_SPACE_ID ||
  !process.env.CONTENTFUL_DELIVERY_ACCESSS_TOKEN
) {
  throw new Error("Missing Contentful environment variables");
}

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_ACCESSS_TOKEN,
});
