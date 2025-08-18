import "server-only";
import {
  Client,
  fetchExchange,
  cacheExchange as defaultCacheExchange,
} from "urql";
import { authExchange } from "@urql/exchange-auth";
import { draftMode } from "next/headers";
import type { introspection } from "../../graphql-env";
import type { initGraphQLTada } from "gql.tada";
import { appendVariablesExchange } from "./exchanges/appendVariablesExchange";

const spaceId = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!;
const deliveryToken = process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN!;

const isDevelopment = process.env.NODE_ENV === "development";

export const isPreviewMode = async () => {
  try {
    const draft = await draftMode();
    return draft.isEnabled;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("isPreviewMode:", errorMessage);
    return false;
  }
};

export const createContentClient = () =>
  new Client({
    url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}/environments/${environment}`,
    exchanges: [
      ...(isDevelopment ? [] : [defaultCacheExchange]),
      appendVariablesExchange(async () => ({ preview: await isPreviewMode() })),
      authExchange(async (utils) => ({
        addAuthToOperation(operation) {
          const isPreview = operation.variables?.preview || false;
          const token = isPreview ? previewToken : deliveryToken;

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
      })),
      fetchExchange,
    ],
  });

export const contentClient = createContentClient();

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
