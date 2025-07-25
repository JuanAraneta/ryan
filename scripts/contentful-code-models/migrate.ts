import "dotenv/config";
import { migrateConfig } from "contentful-code-models";
import { models } from "../../src/models";

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_API!,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT!,
};

migrateConfig({
  models,
  options,
})
  .then((client) => {
    console.log("Migration completed successfully.");
    console.log("Client ready for further operations:", client);
  })
  .catch((error) => {
    console.error("Migration failed:", error);
    process.exit(1);
  });
