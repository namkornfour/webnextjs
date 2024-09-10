import React from 'react'
import Link from 'next/link'

interface Product {
    sku: string;
}

export default function EditProductButton({sku}:Product) {
  return (
    <div className='text-center w-24 sm:w-16 lg:w-14 text-white bg-blue-500 hover:bg-blue-300 active:bg-blue-600 rounded-sm showdow-md mx-2'>
        <Link href={`/products/${sku}`}>
        Edit
        </Link>
    </div>
  )
}
