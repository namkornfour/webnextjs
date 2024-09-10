"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  const pathName = usePathname();
  const styles = {
    actived: "text-blue-500 underline px-4 py-2",
    nonSelected: "text-gray-500 px-4 py-2 hover:text-pink-500 hovr:italic",
  };

  return (
    <div className="fixed top-0 w-full z-50 flex flex-row justify-between">
      <Link
        href={"/"}
        className={`flex items-center justify-center sm:hidden ${
          pathName === "/" ? styles.actived : styles.nonSelected
        }`}
      >
        <FaHome />
      </Link>
      <Link
        href={"/"}
        className={`sm:hidden ${
          pathName === "/" ? styles.actived : styles.nonSelected
        }`}
      >
        Home
      </Link>
      <Link
        href={"/products"}
        className={`sm:hidden ${
          pathName === "/" ? styles.actived : styles.nonSelected
        }`}
      >
        Products
      </Link>
      <Link
        href={"/products/add"}
        className={`sm:hidden ${
          pathName === "/" ? styles.actived : styles.nonSelected
        }`}
      >
        Add Product
      </Link>

      <Link href="/downloads">
        Singin
      </Link>
    </div>
  );
}