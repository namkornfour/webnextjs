import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //const url = request.nextUrl.clone();
  //url.pathname = "/products";

  //return NextResponse.redirect(url);

  /*const token = request.cookies.get("next-auth.session.token");
  if (!token) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();*/
}

export const config = {
  //matcher: ["/post", "/profile2"]
}

export { default } from "next-auth/middleware";
