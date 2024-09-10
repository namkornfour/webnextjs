import React from 'react'

export default function Product({data}:any) {
  return (
    <div className='flex justify-center items-center w-full px-5'>
        <div>รหัส</div>
        <div>{data.productSKU}</div>
        <div>ชื่อสินค้า</div>
        <div>{data.productName}</div>
        <div>ราคาสินค้า</div>
        <div>{data.price}</div>
    </div>
  )
}
