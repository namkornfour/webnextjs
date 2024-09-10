import { AppProps } from "next/app";
import { CounterProvider } from "@/components/CounterContext";
import { Component } from "react";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </>
  );
}

export default MyApp;
