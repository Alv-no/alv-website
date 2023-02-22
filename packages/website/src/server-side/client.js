import { ApolloClient, InMemoryCache } from "@apollo/client";
import config from "../config";

export const client = new ApolloClient({
  uri: `https://${config.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${config.SANITY_DATASET}/${config.SANITY_TAG}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${config.SANITY_TOKEN}`,
  },
});
