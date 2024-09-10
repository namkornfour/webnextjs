import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: {
    id: string;
  };
}

export function GET(request: Request, { params }: Params) {
  const id = params.id;
  return NextResponse.json({ id });
}