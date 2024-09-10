import React from "react";
import Link from "next/link";

function MainNav() {
  return (
    <div className="flex justify-center items-center border-2 border-gray-200 rounded-md bg-slate-500">
      <div className="m-4">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="m-4">
        <Link href={"/products"}>Profile</Link>
      </div>
      <div className="m-4">
        <Link href={"/about"}>About</Link>
      </div>
    </div>
  );
}

export default MainNav;
