import { managementClient } from './managementClient';

export const getContentfulLocales = async () => {
  const client = await managementClient;
  return client.getLocales();
};
