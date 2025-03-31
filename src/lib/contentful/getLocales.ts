import managementClient from "./managementClient.ts";

const client = managementClient();

export default async function getContentfulLocales() {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!);
  const environment = await space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT!
  );
  const locales = await environment.getLocales();

  return locales.items
    .filter((locale) => locale.default || locale.fallbackCode)
    .map((locale) => locale.code);
}
