import "dotenv/config";
import contentfulManagementClient from "./src/lib/contentful/managementClient.ts";
import { Environment, Space } from "contentful-management";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } = process.env;

if (!CONTENTFUL_SPACE_ID) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

if (!CONTENTFUL_ENVIRONMENT) {
  throw new Error("CONTENTFUL_SPACE_ID is not defined");
}

const getContentfulEnvironment: () => Promise<Environment> = async () => {
  return contentfulManagementClient()
    .getSpace(CONTENTFUL_SPACE_ID)
    .then((space: Space) => space.getEnvironment(CONTENTFUL_ENVIRONMENT));
};

export default getContentfulEnvironment;
