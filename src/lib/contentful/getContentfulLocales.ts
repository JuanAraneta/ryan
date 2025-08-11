import { managementClient } from "./managementClient";

let locales: Awaited<
  ReturnType<Awaited<typeof managementClient>["getLocales"]>
> | null = null;

export const getContentfulLocales = async () => {
  if (!locales) {
    const client = await managementClient;
    locales = await client.getLocales();
  }

  return locales;
};
