import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "../wsProvider";
import { AppProps } from "next/app";
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { setAccessToken } from "../package/auth/accessToken";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    fetch("http://localhost:8080/user/refresh_token", {
      method: "POST",
      credentials: "include",
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
    });
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
