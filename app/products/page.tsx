import React from 'react'
import AllProducts from '@/components/AllProducts';

async function AllProductsPage() {
  return (
    <div className="flex px-3 items-start justify-center min-h-screen w-full mx-auto">
      <AllProducts/>
    </div>
  )
}

export default AllProductsPage;
