import React from "react";
import { notFound } from 'next/navigation';

interface DataType {
    params: {
      id: string;
    };
}

interface ProductType {
  id: number;
  productname: string;
  price: number;
}

const products: ProductType[] = [
  { id: 1, productname: "A", price: 100 },
  { id: 2, productname: "B", price: 200 },
  { id: 3, productname: "C", price: 300 },
  { id: 4, productname: "D", price: 400 },
];

export default function BestsellerPage({ params }: DataType) {
  const id = parseInt(params.id);
  console.log("ID from props:", 1);   

  if (!id) {
    return <p>Type wrong</p>;
  }

  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-1/2 justify-center mx-auto">
      <p>{product.id}</p>
      <p>{product.productname}</p>
      <p>{product.price}</p>
    </div>
  );
}
