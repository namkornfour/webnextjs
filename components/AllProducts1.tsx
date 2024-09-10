"use client";
import React from "react";
import { useProducts } from "@/lib/product1action";
import ProductItem1 from '@/components/ProductItem1'

export default function AllProducts() {
  const { data: products, isLoading, error } = useProducts();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (products?.length === 0) {
    return <div>ไม่พบสินค้า</div>;
  }

  return (
  <div className="flex flex-col justify-center mx-auto w-3/4">
    {/* <div className="flex flex-col justify-center mx-auto">ข้อมูลสินค้า</div> */}
    {
        products?.map((item, index) => {
            return (
                <div key={index} className="flex flex-col">                    
                    <ProductItem1 data={item}/>
                </div>
            )
        })
    }
    </div>
    );
}
