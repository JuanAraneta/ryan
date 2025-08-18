import { readFragment } from "gql.tada";
import { contentClient } from "../contentClient";
import { GetConstantsQuery } from "../query/GetConstantsQuery";
import { ConstantsFragment } from "../fragments/ConstantsFragment";

export const getConstants = async () => {
  const result = await contentClient.query(GetConstantsQuery, {});

  const constants = result.data?.constantsCollection?.items[0];

  if (!constants) {
    throw new Error("Constants failed to resolve!");
  }

  return readFragment(ConstantsFragment, constants);
};
