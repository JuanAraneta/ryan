import * as dotenv from 'dotenv';
import { $ } from 'zx';

(async () => {
  dotenv.config();

  const gqlUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`;
  const header = `Authorization: Bearer ${process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN}`;

  await $`npx gql-tada generate-schema ${gqlUrl} --header ${header}`;
  await $`gql.tada generate-output`;
})();
