import { AppProps } from "next/app";
//import { CounterProvider } from "@/components/CounterContext";
import { SessionProvider } from "next-auth/react";
//import { Component } from "react";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
