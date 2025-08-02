"use client";

import { ConstantsFragment } from "@/lib/contentful/fragments/ConstantsFragment";
import { ResultOf } from "gql.tada";
import { createContext, ReactNode, useContext } from "react";

const ConstantsContext = createContext<null | ResultOf<
  typeof ConstantsFragment
>>(null);

export const useConstants = (): ResultOf<typeof ConstantsFragment> => {
  const value = useContext(ConstantsContext);
  if (value == null) throw new Error("No ConstantsContext found in tree");
  return value;
};

export const ConstantsProvider = ({
  value,
  children,
}: {
  value: ResultOf<typeof ConstantsFragment>;
  children: ReactNode;
}) => (
  <ConstantsContext.Provider value={value}>
    {children}
  </ConstantsContext.Provider>
);

export const Constant = ({
  name,
}: {
  name: keyof ResultOf<typeof ConstantsFragment>;
}) => {
  const value = useConstants()[name];

  return <>{value}</>;
};
