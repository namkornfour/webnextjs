'use client'

import React, { useReducer } from "react";
import Product2 from '@/components/Product2';
import reducer from '@/store/reducer';
import AddProductForm2 from "./AddProductForm2";

interface Product {
    id:number;
    name:string;
    price: number;
}

interface State {
    data: Product[];
}

interface AllProductProps {
    data: Product[];
}

export default function AllProducts2({data}: AllProductProps) {
    const initialState: State = {data};
    const [products, dispatch] = useReducer(reducer, initialState);
  return (
  <div className="flex justify-center w-2/3 min-h-screen mx-auto">
    <div>Product List</div>
    
    <div><AddProductForm2 dispatch={dispatch}/></div>

    <div className="flex w-1/2 justify-center mx-auto">
      {
        products.data.length !== 0 && products.data.map((item, key) => {
          return (
             <Product2 key={key} data={item} dispatch={dispatch}/>
          )
        })
      }

      {
        products.data.length === 0 &&
        <div>
          Product Not Found
        </div>
      }
    </div>
  </div>
  );
}