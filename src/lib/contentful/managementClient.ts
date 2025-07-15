import { createClient, Environment } from "contentful-management";

const {
  CONTENTFUL_MANAGEMENT_API,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
} = process.env;

if (
  !CONTENTFUL_MANAGEMENT_API ||
  !CONTENTFUL_SPACE_ID ||
  !CONTENTFUL_ENVIRONMENT
) {
  throw new Error("CONTENTFUL_MANAGEMENT_API is not defined");
}

export const managementClient: Promise<Environment> = createClient({
  accessToken: CONTENTFUL_MANAGEMENT_API,
})
  .getSpace(process.env.CONTENTFUL_SPACE_ID!!)
  .then((client) => client.getEnvironment(CONTENTFUL_ENVIRONMENT));
