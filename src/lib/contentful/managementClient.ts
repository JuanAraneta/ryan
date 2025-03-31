import contentful, { type ClientAPI } from "contentful-management";

const { CONTENTFUL_MANAGEMENT_API } = process.env;

if (!CONTENTFUL_MANAGEMENT_API) {
  throw new Error("CONTENTFUL_MANAGEMENT_API is not defined");
}

const getContentfulEnvironment: () => ClientAPI = () =>
  contentful.createClient({
    accessToken: CONTENTFUL_MANAGEMENT_API,
  });

export default getContentfulEnvironment;
