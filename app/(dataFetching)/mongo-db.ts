
import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";
export async function getProducts() {
  await connectToDB();
  const products = await Product.find().lean(); // ✔ lean()
  return JSON.parse(JSON.stringify(products));  // ✔ safe plain objects
}
