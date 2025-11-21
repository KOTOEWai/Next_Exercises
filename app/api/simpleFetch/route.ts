import { headers } from "next/headers";
import  { type NextRequest } from "next/server";


import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();

  (await cookieStore).set("token", "abc123", {
    httpOnly: true,
    secure: true,
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });

  return Response.json({ message: "Cookie set!" });
}


export async function POST(request:NextRequest) {

 return Response.json({ message: "POST request received!" });
}

