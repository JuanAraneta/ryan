import {
  Client,
  fetchExchange,
  cacheExchange as defaultCacheExchange,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import { draftMode } from "next/headers";
import type { introspection } from "../../graphql-env";
import type { initGraphQLTada } from "gql.tada";

export const isPreviewMode = async () => {
  try {
    const draft = await draftMode();
    return draft.isEnabled;
  } catch {
    return false;
  }
};

export function createContentClient() {
  return new Client({
    url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    exchanges: [
      ...(process.env.NODE_ENV === "development" ? [] : [defaultCacheExchange]),
      authExchange(async (utils) => {
        const isPreview = await isPreviewMode();

        const token = isPreview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN;

        return {
          addAuthToOperation(operation) {
            return utils.appendHeaders(operation, {
              Authorization: `Bearer ${token}`,
            });
          },
          didAuthError(error) {
            const networkErrorMsg = error.networkError?.message;
            const didError =
              error.graphQLErrors.some(
                (e) => e.extensions?.code === "FORBIDDEN",
              ) || !!networkErrorMsg;

            if (networkErrorMsg) console.error(networkErrorMsg);

            return didError;
          },
          async refreshAuth() {
            throw new Error("No auth refresh operation");
          },
        };
      }),
      fetchExchange,
    ],
  });
}

declare module "gql.tada" {
  //@ts-expect-error This isn't actually overriding anything.
  // This change just ensures that DateTime comes back,
  // accurately, as a string without having to utilize a
  // "custom" graphql function.
  const graphql: ReturnType<
    typeof initGraphQLTada<{
      introspection: introspection;
      scalars: { DateTime: string };
    }>
  >;
}
