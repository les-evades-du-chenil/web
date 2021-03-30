import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../wsProvider";
import { AppProps } from "next/app";
import React from "react";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
