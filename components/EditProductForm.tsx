"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/app/loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import Title from "@/components/Title";
//import { setDefaultAutoSelectFamily } from "net";

interface Product {
  sku: string;
  productSKU:string;
  productName:string;
  price: string;
}

export default function EditProductForm({ sku }: any) {
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    text: string | null;
    error: boolean | null;
  }>({
    text: null,
    error: false,
  });

  async function updateProduct() {
    try {
      const res = await fetch(`/api/products/${sku}`, {
        method: "POST",
        body: JSON.stringify({
          productName: product?.productName,
          price: product?.price,
        }),
      });

      if (!res.ok) {
        throw new Error("Error can not set data : product to API");
      }

      return res.json();
    } catch (error) {
      let errorMessage = "Error API";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessage({ text: errorMessage, error: true });
    }
  }

  async function getProductData() {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/products/${sku}`);

      if (!res.ok) {
        throw new Error("Error no Data");
      }

      const currentProduct = await res.json();
      setProduct(currentProduct);

      if (!currentProduct.productSKU) {
        router.push("/products");
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      let errorMessage = "Error API";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessage({ text: errorMessage, error: true });
    }
  }

  useEffect(() => {
    getProductData();
  }, []);

  async function handlerSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    try {
      setMessage({ ...message, text: "", error: true });
      updateProduct();
      setMessage({ ...message, text: "Successfully", error: false });

      mutate("/api/product");
    } catch (error) {
      setIsLoading(false);

      let errorMessage = "Error API";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setMessage({ text: errorMessage, error: true });
    }
    finally{
        setIsLoading(false);
    }
  }

  if(!product){
    return null;
  }

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='flex flex-col justify-center mx-auto w-1/2'>
        <Title text='ฟอร์มแก้ไขข้อมูล'/>
      {
        message.text &&
        <div className='text-center w-full'>
            {message.text}
        </div>
      }

      <form onSubmit={handlerSubmit} className='w-full bg-whtie justify-center mx-auto'>
        <div className="mt-4">
            <div className="mt-4">
                <label className='block'>
                        <span>รหัส</span>
                        <input type="text" required defaultValue={product.productSKU} disabled className="mt-1 block"/>
                </label>
                <label className='block'>
                        <span>ชื่อสินค้า</span>
                        <input type="text" required defaultValue={product.productName} className="mt-1 block" onChange={(e) => setProduct({ ...product, productName: e.target.value })}/>
                </label>
                <label className='block'>
                        <span>ราคา</span>
                        <input type="text" required defaultValue={product.price} className="mt-1 block" onChange={(e) => setProduct({...product,price: e.target.value})}/>
                </label>
            </div>

            <div className="flex justify-end">
                <Link href="/products">หน้าหลัก</Link>
            </div>

            <button type="submit" className="w-24">
                แก้ไข
            </button>

        </div>
        </form>      
    </div>
  );
}
