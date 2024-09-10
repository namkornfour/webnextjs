"use client";

// import { SessionProvider } from "next-auth/react";

import React from "react";

export default function Layout({ children }) {
  // return <SessionProvider>{children}</SessionProvider>;
  return <div>{children}</div>
}