import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `https://mnr37rl0.apicdn.sanity.io/v1/graphql/production/default`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.SANITY_TOKEN}`,
  },
});
