import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  return NextResponse.json({ method: "POST", username, password });
}