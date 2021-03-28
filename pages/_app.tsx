import { ApolloClient, ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = new ApolloClient({
    uri: "locahost:3000",
    cache: {},
  });
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
