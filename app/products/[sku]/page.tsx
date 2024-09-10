import React from 'react'
import EditProductForm from '@/components/EditProductForm';

interface Params {
    params: {
        sku : string;
    }
}

async function ProductPage({params}:Params) {
    const {sku} = params;

  return (
    <div>
        <EditProductForm sku={sku}/>
    </div>
  )
}

export default ProductPage;