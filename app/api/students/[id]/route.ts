import { NextRequest, NextResponse } from "next/server";

const students = [
  { id: 1, studentName: "A", score: 100 },
  { id: 2, studentName: "B", score: 200 },
  { id: 3, studentName: "C", score: 300 },
  { id: 4, studentName: "D", score: 400 },
];

interface Props {
  params: {
    id: string;
  };
}

export function GET(request: NextRequest, { params }: Props) {
  const id = parseInt(params.id); 

  const product = students.find((item) => item.id === id);

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json(
    { message: "Not Found Any Student" },
    { status: 404 }
  );
}
