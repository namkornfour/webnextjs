import React from "react";
import { filterProductByDate, thaiDate } from "@/helpers/products";

interface Product {
    id:number;
    name:string;
    price: number;
    date: Date;
}

interface Props {
  params: {    
    slug: string[];
  };
}

export default function Products2Page({ params }: Props) {
  console.log(params);
  
  const [ year, month, day ] = params.slug;

  console.log(year, month, day);

  const products : Product[]= filterProductByDate(
    Number(year),
    Number(month),
    Number(day)
  );

  if (products.length === 0) {
    return (
      <div>
        <div>Not found</div>
      </div>
    );
  }

  return (
    <div>
      {products.map((item) => (
        <div key={item.id} className="flex w-full p-2 space-x-2">
          <div>{item.id}</div>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
}
