import mongodbConnect from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { productSKU, productName, price } = await request.json();
    await mongodbConnect();

    const product = await Product.create(
        {
            productSKU: productSKU.trim(),
            productName,
            price
        }
    );

    const productMap = {
        _id: product._id,
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price
    }

    return NextResponse.json(productMap);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
