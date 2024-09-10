import React from "react";
import EditProductButton from "./EditProductButton";
import DeleteProductButton from "./DeleteProductButton";

interface Product {
  productSKU: string;
  productName: string;
  price: string;
}

interface Props {
  data: Product;
  //refreshProducts: () => void;
}

export default function ProductItem({ data }: Props) {
  return (
    <div className="p-1">
      <div className="flex justify-between mx-auto text-sm m-1">
        <div className="w-1/2">รหัส SUK</div>
        <div className="w-1/2">{data.productSKU}</div>
      </div>

      <div className="flex justify-between mx-auto text-sm m-1">
        <div className="w-1/2">ชื่อสินค้า</div>
        <div className="w-1/2">{data.productName}</div>
      </div>

      <div className="flex justify-between mx-auto text-sm m-1">
        <div className="w-1/2">ราคา</div>
        <div className="w-1/2">{data.price}</div>
      </div>

      <div className="flex justify-between mx-auto text-sm m-1">
        <div className="w-1/2">
          <EditProductButton sku={data.productSKU} />
        </div>
      </div>

      <div className="flex justify-between mx-auto text-sm m-1">
        <div className="w-1/2">
          <DeleteProductButton product={data} />
        </div>
      </div>
    </div>
  );
}
