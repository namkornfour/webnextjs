"use client";

import React from "react";

interface Product {
  productSKU: string;
  productName: string;
  price: number;
}

interface ProductProps {
  products?: Product[];
}

export default function AllProducts({ products }: ProductProps) {
  if (!products) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>ไม่พบสินค้า</div>;
  }
  return (
    <div>
        {/* <div>
            {products.map ((item, key) => (
                <div key={key}>

                </div>
            ))}
        </div> */}
    </div>
  );
}
