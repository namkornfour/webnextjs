"use client";

import React, { useState } from "react";

interface ProductProps {
  productSKU: string;
  productName: string;
  price: number;
}

export default function Products2Form() {
  const [data, setData] = useState<ProductProps[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function loadData() {
    setIsLoading(true);
    const res = await fetch("/api/products2", { next: { revalidate: 60 } });

    const data: ProductProps[] = await res.json();
    setData(data);
    setIsLoading(false);
  }

  const btnLoadProductBtn = (
    <button onClick={loadData} className="flex justify-center mx-auto w-3/4">
      Load Products
    </button>
  );

  if (isLoading) {
    return <div className="flex justify-center mx-auto w-1/2">Loading...</div>;
  }
  
  return (
    <div className="flex">
      {btnLoadProductBtn}

      {data && data.length !== 0 ? (
        <div className="flex flex-col justify-center mx-auto w-1/2">
          {data.map((product, index) => (
            <div key={index}>
              <div>{product.productSKU}</div>
              <div>{product.productName}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>
      ) : (
        !isLoading && <div>No data</div>
      )}
    </div>
  );
}