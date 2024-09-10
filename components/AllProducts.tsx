"use client";

import Loading from "@/app/loading";
import { useAllProducts } from "@/lib/productaction";
import Title from "@/components/Title";
import ProductItem from '@/components/ProductItem';
import EditProductButton from "./EditProductButton";
import React from "react";
import Link from "next/link";

interface Product {
  productSKU: string;
  productName: string;
  price : string;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}

export default function AllProducts() {
  const {data: products, loading: isLoading, error} = useAllProducts();

  if(error){
    return <div>{error.message}</div>
  }

  if(isLoading) {
    return <div><Loading/></div>
  }

  if(products?.length === 0)
    {
      return(
        <div className='flex justify-center items-center mx-auto'>
          <div className ='text-2xl text-blue-500'>
            ไม่พบสินค้า
          </div>
        </div>
      )
  }

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-10/12 flex flex-col justify-center items-center block-border sm:block-content'>
      <Title text="Product List"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full h-fit">
        {
          products?.map((item:Product, index:number) => {
            return (
              <div key={index}>
                  <ProductItem data={item}/>
                </div>
            )
          })
        }
      </div>

        <div>
          <Link href="/">หน้าหลัก</Link>
        </div>
        <div>
          <Link href="/products/add">เพิ่มสินค้า</Link>
        </div>

    </div>
  )
}
