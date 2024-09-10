import React from 'react'
import AllProducts2 from '@/components/AllProducts2'

export default function ReducerPage() {
    const data = [
        {id: 1 , name: 'Pro 1', price: 100},
        {id: 2 , name: 'Pro 2', price: 200},
        {id: 3 , name: 'Pro 3', price: 300},
        {id: 4 , name: 'Pro 4', price: 400},
        {id: 5 , name: 'Pro 5', price: 500},
        {id: 6 , name: 'Pro 6', price: 600},
        {id: 7 , name: 'Pro 7', price: 700},
        {id: 8 , name: 'Pro 8', price: 800},
        {id: 9 , name: 'Pro 9', price: 900},
    ]
  return (
    <div>
        <AllProducts2 data={data}/>
    </div>
  )
}
