
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";

export async function POST(req: Request) {
  await connectToDB();

  const body = await req.json();
  const product = await Product.create(body);

  return NextResponse.json({ message: "Product created", product });
}

export async function GET() {
  await connectToDB();

  const products = await Product.find();
  return NextResponse.json(products);
}
