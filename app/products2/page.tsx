import React from "react";
import { getAllProduct, thaiDate } from "@/helpers/products";

export default function ProductPage() {
  const products = getAllProduct();

  return (
    <div className="flex flex-col justify-center mx-auto w-1/2">
      {products.map((item, key) => (
        <div key={key} className="flex w-full p-2 space-x-2">
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
}
