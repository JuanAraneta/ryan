import { managementClient } from "./managementClient";

export const getContentfulLocales = async () =>
  (await managementClient).getLocales();
