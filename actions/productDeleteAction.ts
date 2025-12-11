"use server";

import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProduct(id: string) {
  await connectToDB();

  await Product.findByIdAndDelete(id);

  revalidatePath("/products");
}
