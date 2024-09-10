"use client";

import "./globals.css";
import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

//import NavbarPage from "./navbar2/page";

//import mongodbConnect from "@/lib/mongodb";

// export const metadata = {
//   title: "Create Nex App",
//   description: "Nextjs Typescript",
// };

interface Props {
  children: ReactNode;
}

export default async function RootLayout({ children }: Props) {
  // await mongodbConnect();

  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}