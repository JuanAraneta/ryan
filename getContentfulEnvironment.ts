import "dotenv/config";
import { Environment, Space, createClient } from "contentful-management";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_MANAGEMENT_API,
} = process.env;

if (!CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

if (!CONTENTFUL_ENVIRONMENT) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

if (!CONTENTFUL_MANAGEMENT_API) {
  throw new Error("CONTENTFUL_MANAGEMENT_API is not defined");
}

const getContentfulEnvironment: () => Promise<Environment> = async () => {
  return createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API,
  })
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space: Space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};

export default getContentfulEnvironment;
