import { NextRequest, NextResponse } from "next/server";
import mongodbConnect from '@/lib/mongodb';

import Product from "@/models/Product";

export async function GET() {
  try {
    await mongodbConnect();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }  
}
