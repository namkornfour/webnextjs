import { NextRequest, NextResponse } from "next/server";

const products = [
  { id: 1, productName: "A", score: 10 },
  { id: 2, productName: "B", score: 20 },
  { id: 3, productName: "C", score: 30 },
  { id: 5, productName: "D", score: 40 },
  { id: 6, productName: "E", score: 50 },
];

interface Props {
  params: {
    id: string;
    score?: string;
  };
}

export function GET(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const score = params.score ? parseInt(params.score, 10) : undefined;

  const product = products.find((x) => x.id === id);

  if (product) {
    const responseData = {
      productName: product.productName,
      ...(score !== undefined && { score }), // เพิ่ม score เฉพาะเมื่อมีค่า
    };

    return NextResponse.json(responseData);
  }

  return NextResponse.json({ message: "Not Found" }, { status: 404 });
} 