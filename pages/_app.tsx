import { initializeApollo } from "@/gql";
import localFont from "next/font/local";

import "@/styles/globals.css";
import { ApolloProvider, NormalizedCacheObject } from "@apollo/client";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { Layout } from "@/components";

const PTRootUI = localFont({
  variable: "--font-root",
  src: [
    {
      path: "../assets/fonts/PT Root UI/pt-root-ui_light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/PT Root UI/pt-root-ui_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/PT Root UI/pt-root-ui_medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/PT Root UI/pt-root-ui_bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialApolloState: NormalizedCacheObject }>) {
  const client = useMemo(
    () => initializeApollo(pageProps.initialApolloState),
    [pageProps.initialApolloState]
  );
  return (
    <ApolloProvider client={client}>
      <Layout className={PTRootUI.variable}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
