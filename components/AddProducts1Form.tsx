'use client'

import React,{FormEvent, useState} from 'react'
import Link from 'next/link'

export default function AddProducts1Form() {
  const [productSKU, setProductSKU] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState({
    text: '',
    error: false
  });

  function clearForm() {
    setProductSKU('');
    setProductName('');
    setPrice('');
  }
  
  async function handleSubmit(e: FormEvent)  {
    e.preventDefault();

    setIsLoading(true);

    try {
        setMessage({...message,text: '', error:false});

        const res = await fetch('/api/products1/add', {
            method: 'POST',
            body: JSON.stringify({
                productSKU,
                productName,
                price
            })
        })

        const result = await res.json();

        if(result.error){
            setMessage({...message,text: result.error, error: true});
        }
        else if(result.productSKU){
            setMessage({...message,text: 'Success', error: false});            
        }

        clearForm();

    } catch (error:any) {
        setMessage({...message,text: error.message, error:true});
    }
    finally {
        setIsLoading(false);
    }
  }

  return (
    <div className='flex justify-center mx-auto'>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor="productSKU">ProductSKU</label>
              <input type="text" name="productSKU" value={productSKU} required onChange={(e) => setProductSKU(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="productName">ProductName</label>
              <input type="text" name="productName" value={productName} required onChange={(e) => setProductName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input type="text" name="price" value={price} required onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
              <button type='submit' className='btn btn-primary text-white'>{isLoading ? 'กำลังเพิ่มสินค้า' : "เพิ่มสินค้า"}</button>
            </div>
          </div>
        </form>
    </div>
  )
}
