import React from 'react'
import AddProductForm from '@/components/AddProductForm';

async function AddProductsPage() {
  return (
    <div className="flex px-3 items-start justify-center min-h-screen w-full mx-auto">
      <AddProductForm/>
    </div>
  )
}

export default AddProductsPage;

