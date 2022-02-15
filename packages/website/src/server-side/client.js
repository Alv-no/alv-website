import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `https://${process.env.SANITY_PROJECT_ID}.apicdn.sanity.io/v1/graphql/${process.env.SANITY_DATASET}/${process.env.SANITY_TAG}`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
  },
});
