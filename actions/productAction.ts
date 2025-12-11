"use server";

import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { redirect } from "next/navigation";


export async function createProduct(formData: FormData) {
  await connectToDB();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;

  await Product.create({ name, price, description });
   redirect("/products");
}
