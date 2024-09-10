import mongoose from "mongoose";
import Product from "@/models/Product";
import mongodbConnect from "@/lib/mongodb";

interface ProductProps {
  productSKU: string;
  productName: string;
  price: number;
}

export async function addProduct(product: ProductProps) {
  const newProduct = {
    productSKU: product.productSKU,
    productName: product.productName,
    price: product.price,
  };

  try {
    await Product.create(newProduct);        
  } catch (error) {
    throw error;
  }
}

export async function getAllProducts():Promise<ProductProps[]> {  
  try 
  {   
    //await mongodbConnect();

    const products = await Product.find();    
    return products.map((product) => {
      return {

        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };
    });
  } catch (error) {
    throw error;
  }
}
