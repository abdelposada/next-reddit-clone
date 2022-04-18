import { GraphQLClient } from 'graphql-request';
import { QueryClient } from 'react-query';

const graphqlURL: string = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';
console.log(graphqlURL)

export const gqlClient = new GraphQLClient(graphqlURL, {
  credentials: 'include',
});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});
