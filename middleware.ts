import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
//import { getServerSession } from "next-auth/next";
//import { options } from "./app/api/auth/[...nextauth]/options";

export async function middleware(req: NextRequest) {

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  //console.log('Token:', token);

  if (!token) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();

  /*const session = await getServerSession({
    req,
    secret: process.env.NEXTAUTH_SECRET,
    options,
  });

  console.log("Session:", session); // เช็คข้อมูล session

  if (!session) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  return NextResponse.next();*/
}

export { default } from "next-auth/middleware";

 export const config = {
   matcher: ["/hook", "/context", "/downloads"],
 };
 