import React from 'react'
import EditProduct1Form from '@/components/EditProduct1Form';

interface Props {
    params: {
        sku:string;
    }
}

export default function ProductPage({params}: Props) {
    const {sku} = params;
  return (
    <div>
        <EditProduct1Form sku={sku}/>
    </div>
  )
}
