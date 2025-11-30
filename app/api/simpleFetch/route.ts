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

const simpledata = [
  {
    id: 1,
    name: "Category 1",
  },
  {
    id: 2,
    name: "Category 2",
  },
  {
    id: 3,
    name: "Category 3",
  },
  {
    id: 4,
    name: "Category 4",
  },
  {
    id: 5,
    name: "Category 5",
  }
]

export async function POST(request:NextRequest) {

 return Response.json({ message: "POST request received!" });
}

