'use client'
import React from 'react'

interface ProductType {
    id: number;
    productname:string;
    price: number;
}

const products : ProductType[] = [
    {id:1, productname:'A', price: 100},
    {id:2, productname:'B', price: 200},
    {id:3, productname:'C', price: 300},
    {id:4, productname:'D', price: 400},
]

export default function BestsellerPage() {
  return (
    <div className='flex justify-center'>
        <div className='flex flex-col bg-base-300 w-1/2'>
        {
            products.map((item, key) => (
                <p key={key}>{item.id} {item.productname} {item.price}</p>
            ))
        }
    </div>
    </div>
  )
}
