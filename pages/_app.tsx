import React from "react";
import { AppProps } from "next/app";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = initializeApollo();
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
