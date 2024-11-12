'use client';  // ระบุว่าเป็น Client Component

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react"; // นำเข้า ReactNode เพื่อจัดการกับ children props

interface LayoutProps {
  children: ReactNode; // ระบุประเภทของ children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
