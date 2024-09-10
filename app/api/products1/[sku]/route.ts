import mongodbConnect from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/Product";

interface Props {
  params: {
    sku: string;
  };
}

export async function GET(request: NextRequest, { params }: Props) {
  const { sku } = params;

  try {
    const product = await Product.findOne({ productSKU: sku });

    if (product) {
      const data = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };

      return NextResponse.json(data);
    }

    return NextResponse.json({ message: "Not Found Product" });
  } catch (error: any) {
    return NextResponse.json({ messsage: error.messaage });
  }
}

export async function POST(request: NextRequest, { params }: Props) {
  const { sku } = params;
  const { productName, price } = await request.json();

  try {
    const product = await Product.findOneAndUpdate(
      { productSKU: sku },
      { productName, price },
      { new: true }
    );

    if (product) {
      const data = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };

      return NextResponse.json(data);
    }
    return NextResponse.json({ message: "No Product Found" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { productSKU } = await request.json();

  try {
    const product = await Product.findOneAndDelete({ productSKU: productSKU });

    if (product) {
      const data = {
        productSKU: product.productSKU,
        productName: product.productName,
        price: product.price,
      };

      return NextResponse.json(data);
    }

    return NextResponse.json({message : 'No product found'});
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}
