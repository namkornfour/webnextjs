import Product from "@/models/Product";
import { NextResponse } from "next/server";

interface Params {
  params: {
    sku: string;
  };
}

export async function GET(request: Request, { params }: Params) {
  const { sku } = params;

  try {
    const product = await Product.findOne({ productSKU: sku });

    if (product) {
      
      const prvProduct = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };

      return NextResponse.json(prvProduct);
    }

    return NextResponse.json({ message: "Not Found Any Product" });
  } catch (error: unknown) {
    let errorMessage = "Unknow";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage });
  }
}

export async function POST(request: Request, { params }: Params) {
  const { sku } = params;
  const { productName, price } = await request.json();

  try {
    const product = await Product.findOneAndUpdate(
      { productSKU: sku },
      { productName, price }
    );

    if (product) {
      const prvProduct = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };
      return NextResponse.json(prvProduct);
    }

    return NextResponse.json({ message: "No Product Found" });
  } catch (error: unknown) {
    let errorMessage = "Unknow";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  const { productSKU } = await request.json();

  try {
    const product = await Product.findOneAndDelete({ productSKU: productSKU });

    if (product) {
      const prvProduct = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };

      return NextResponse.json(prvProduct);
    }

    return NextResponse.json({ messae: "No Product Deleted" });
  } catch (error: unknown) {
    let errorMessage = "Unknown";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ message: errorMessage });
  }
}