/* istanbul ignore file */
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";

export const createHasuraClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/graphql`,
  });

  const link = ApolloLink.from([httpLink]);

  const cache = new InMemoryCache();
  return new ApolloClient({ link, cache });
};

export const client = createHasuraClient();

export function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
