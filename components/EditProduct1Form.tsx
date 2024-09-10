"use client";

import React, { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProductProps } from "@/types/Product";
import { mutate } from "swr";

interface Props {
  sku: string;
}

export default function EditProduct1Form({ sku }: Props) {
  const router = useRouter();
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /*const [mesage, setMessage] = useState({
    text: string || null,
    error: string || false,
});*/

  const [message, setMessage] = useState<{
    text: string | null;
    error: boolean | null;
  }>({
    text: null,
    error: false,
  });

  async function updateProduct() {
    const res = await fetch(`/api/products1/${sku}`, {
      method: "POST",
      body: JSON.stringify({
        productName: product?.productName,
        price: product?.price,
      }),
    });

    if (!res.ok) {
      setMessage({ text: "Error cannot set data", error: true });
    }

    return res.json();
  }

  async function getProduct() {
    const res = await fetch(`/api/products1/${sku}`);

    if (!res.ok) {
      setMessage({ text: "Not found", error: true });
    }

    const currentData = await res.json();

    setProduct(currentData);

    if (!currentData.productSKU) {
      router.push("/products1");
    }

    setIsLoading(false);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsLoading(true);

    try {
        setMessage({...message, text:'', error: false});
        updateProduct();
        setMessage({...message, text: 'Update Successfully', error: false}); 

        mutate('/api/products1');
    } catch (error:any) {
        setMessage({...message, text: error.message, error: true});
    }
    finally{
        setIsLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mx-auto mt-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="productSKU">ProductSKU</label>
            <input
              type="text"
              name="productSKU"
              defaultValue={product?.productSKU}
              className="border border-blue-500"              
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="productName">ProductName</label>
            <input
              type="text"
              name="productName"              
              value={product?.productName || ""}
              className="border border-blue-500"
              onChange={(e) => setProduct({...product, productName: e.target.value} as ProductProps)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              value={product?.price || ''}
              className="border border-blue-500"
              onChange={(e) => setProduct({...product, price: parseFloat(e.target.value)} as ProductProps)}
            />
          </div>

         <div>
            <Link href={'/products1'}>หน้าหลัก</Link>
         </div>
          <div>
            <button type="submit" className="btn btn-primary text-white">แก้ไข</button>
        </div>
        </div>        
      </form>
    </div>
  );
}
