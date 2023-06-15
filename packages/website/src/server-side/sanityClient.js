import configuration from "../config";
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: configuration.SANITY_PROJECT_ID,
  dataset: configuration.SANITY_DATASET,
  token: configuration.SANITY_TOKEN,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});
