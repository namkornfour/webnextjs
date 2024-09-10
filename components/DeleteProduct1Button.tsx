'use client'
import React from 'react'
import { ProductProps } from '@/types/Product'
import { mutate } from 'swr'

interface Props {
    product : ProductProps;
}

export default function DeleteProduct1Button({product}: Props) {
    async function deleteProduct() {
        await fetch(`/api/products1/${product.productSKU}`, {
            method: 'DELETE',
            body: JSON.stringify({
                productSKU : product.productSKU
            })
        });

        mutate('/api/products');
    }
  return (
    <>
        <button className='btn bg-red-500 text-white !important' onClick={deleteProduct}>ลบสินค้า</button>   
    </>
  )
}
