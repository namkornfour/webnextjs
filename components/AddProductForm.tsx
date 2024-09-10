"use client";
import React, { useState } from "react";
import Link from "next/link";
import Loading from "@/app/loading";
import Title from "./Title";

export default function AddProductForm() {
  const [productSKU, setProductSKU] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState<{
    text: string | null;
    error: boolean | null;
  }>({ text: null, error: false });

  function clearForm() {
    setProductSKU("");
    setProductName("");
    setPrice("");
  }

  async function handlerSubmit(event: any) {
    event.preventDefault();
    setIsLoading(true);

    try {
      setMessage({ ...message, text: "", error: false });

      const res = await fetch("/api/products/add", {
        method: "POST",
        body: JSON.stringify({
          productSKU,
          productName,
          price,
        }),
      });

      const result = await res.json();
      if (result.error) {
        setMessage({ ...message, text: result.error, error: true });
      } else if (result.productSKU) {
        setMessage({ ...message, text: "Add Successfully", error: false });
        clearForm();
      }
    } catch (error) {
      setMessage({ ...message, text: "Error", error: true });
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-center mx-auto w-1/2">
      <div className="flex flex-col justify-center items-center w-1/2">
        <Title text="เพิ่มข้อมูล" />
      </div>

      <div className="flex flex-col justify-center items-center w-1/2">
        {message.text}
      </div>

      <form action="" className="flex flex-col w-1/2">
        <div className="mt-4 flex-col">
          <div className="mt-4">
            <label htmlFor="" className="block">
              <span className="text-sm mx-4">
                รหัส
              </span>

              <input type="text" required value={productSKU} className='border' onChange={(e) => setProductSKU(e.target.value)} />
            </label>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="block">
              <span className="text-sm mx-4">
                ชื่อสินค้า
              </span>

              <input type="text" required value={productName} className='border' onChange={(e) => setProductName(e.target.value)} />
            </label>
          </div>

          <div className="mt-4">
            <label htmlFor="" className="block">
              <span className="text-sm mx-4">
                ราคา
              </span>

              <input type="text" required value={price} className='border' onChange={(e) => setPrice(e.target.value)} />
            </label>
          </div>

        </div>


        <div className="flex flex-row justify-between mt-6">
          <Link href="/products" className="bg-blue-500 text-white">หน้าสินค้า</Link>
          <button type="submit" className="bg-blue-500 text-white" onClick={handlerSubmit}>เพิ่มสินค้า</button>
        </div>

      </form>
    </div>
  );
}
