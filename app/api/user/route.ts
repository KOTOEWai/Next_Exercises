import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();
  const user = await User.create(body);

  return NextResponse.json({ message: "User created", user });
}

export async function GET() {
  await connectToDB();

  const users = await User.find();
  return NextResponse.json(users);
}
