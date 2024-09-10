import React from "react";
import { ProductProps } from "@/types/Product";
import EditProduct1Button from "./EditProduct1Button";
import DeleteProduct1Button from "./DeleteProduct1Button";
import Link from "next/link";

// interface ProductProps {
//   data: {
//      productSKU: string;
//      productName: string;
//      price: number;
//   };
// }

interface ProductProp {
  data: ProductProps;
}

export default function ProductItem1({ data }: ProductProp) {
  return (
    <div className="flex flex-col justify-center w-1/2 mx-auto pb-4">
      <div className="flex space-x-4">
        <div>Product Code</div>
        <div className="text-blue-500">{data.productSKU}</div>
      </div>

      <div className="flex space-x-4">
        <div>ProductName</div>
        <div>{data.productName}</div>
      </div>

      <div className="flex space-x-20">
        <div>Price</div>
        <div className="text-orange-500">{data.price}</div>
      </div>

      <div>
        <EditProduct1Button sku={data.productSKU} />
      </div>

      <div>
        <Link href={"/products1/add"}>เพิ่มสินค้า</Link>
      </div>

      <div>
        <DeleteProduct1Button product={data} />
      </div>
    </div>
  );
}
