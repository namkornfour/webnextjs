'use client'

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavbarPage() {
  const menus = [
    { text: "Home", path: "/" },
    { text: "Product2", path: "/products2" },
    { text: "About", path: "/about" },
  ];

  const productId = 1;

  const router = useRouter();

  return (
    <div className="flex justify-center bg-base-200 w-1/2 mx-auto space-x-4">
      {menus.map((menu, index) => (
        <div key={index}>
          <Link href={menu.path}>{menu.text}</Link>
        </div>
      ))}

      <div>
        <Link href={`/product2/${productId}`}>Product2</Link>
      </div>

      <div><button onClick={() => router.push('/')}>Back Home</button></div>
    </div>
  );
}