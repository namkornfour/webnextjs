import Product from "@/models/Product";
import mongodbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const headers = new Headers(request.headers);

  await mongodbConnect();
   
  const products = await Product.find();

  const productMap = products.map((product) => {
    return {
      productSKU: product.productSKU,
      productName: product.productName,
      price: product.price,
    };
  });

  return NextResponse.json(productMap, { headers: headers });
}
