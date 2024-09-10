import React from 'react'
import Link from 'next/link'

interface Props {
    sku : string;
}

export default function EditProduct1Button({sku}: Props) {
  return (
    <div>
        <Link href={`products1/${sku}`}>Edit</Link>
    </div>
  )
}