import { NextResponse } from "next/server";

const students = [
  { id: 1, studentName: "A", score: 100 },
  { id: 2, studentName: "B", score: 200 },
  { id: 3, studentName: "C", score: 300 },
  { id: 4, studentName: "D", score: 400 },
];

export function GET(request: any) {
  return NextResponse.json(students, { status: 200 });
}
