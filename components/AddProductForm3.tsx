"use client";

import React, { useState } from "react";
import {addProduct} from "@/lib/product";

export default function AddProductForm() {
  const [productSKU, setProductSKU] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    text: '',
    error: false,
  });

  function clearForm() {
    setProductSKU('');
    setProductName('');
    setPrice(0);
  }

  async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    try {
        setMessage({...message, text:'', error:false});
        await addProduct({productSKU,productName,price});
        setMessage({...message, text:'Add product',error: false});
        clearForm();
    } catch (error:any) {
        setMessage({...message,text:error.message,error:true});
    }
    finally {
        setIsLoading(false);
    }
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  return(
    <div className="flex justify-center w-1/2 mx-auto">
        <form onSubmit={handleSubmit}>

        <div className="flex flex-col space-y-3">
            <div>
                <label htmlFor="productsku">ProductSKU</label>
                <input type="text" name="productsku" required className="border border-blue-500" onChange={e => setProductSKU(e.target.value)} />
            </div>
            <div>
                <label htmlFor="productname">ProductName</label>
                <input type="text" name="productname" required  className="border border-blue-500" onChange={e => setProductName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
            <input type="text" name="price" value={price} className="border border-blue-500" onChange={e => setPrice(parseFloat(e.target.value))} />
            </div>
        </div>

        <div className="mt-2">
            <button className="btn btn-primary text-white" type="submit">เพิ่ม</button>
        </div>
        </form>
    </div>
  )
}
