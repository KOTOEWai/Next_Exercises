import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   if(request.nextUrl.pathname.startsWith('/profile')) {
    return NextResponse.redirect(new URL('/', request.url));
   }

   return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};