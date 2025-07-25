import "dotenv/config";
import { syncToLocal } from "contentful-code-models";

const options = {
  spaceId: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_API!,
  environmentId: process.env.CONTENTFUL_ENVIRONMENT!,
};

syncToLocal({
  modelsBasePath: "./src/models", // Optional param where to save model files
  options,
})
  .then(() => {
    console.log("Sync completed successfully.");
  })
  .catch((error) => {
    console.error("Sync failed:", error);
    process.exit(1);
  });
