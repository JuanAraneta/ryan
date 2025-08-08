import { mapExchange } from "urql";

type Variables = Record<string, string | number | boolean>;

export const appendVariablesExchange = (
  variables: (() => Promise<Variables>) | Record<string, Variables>,
) =>
  mapExchange({
    onOperation: async (operation) => {
      if (operation.kind !== "query") return operation;

      return {
        ...operation,
        variables: {
          ...operation.variables,
          ...(typeof variables === "function" ? await variables() : variables),
        },
      };
    },
  });
