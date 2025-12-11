"use server";

import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { revalidatePath } from "next/cache";

interface UpdateState {
  message: string | null;
  success: boolean;
}

export async function updateProductAction(
  prevState: UpdateState,
  formData: FormData
): Promise<UpdateState> {
  await connectToDB();

  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;

  // ---------- Validations ----------
  if (!id) return { message: "Invalid product ID", success: false };

  if (!name || name.length < 3) {
    return { message: "Name must be at least 3 characters", success: false };
  }

  if (isNaN(price) || price <= 0) {
    return { message: "Price must be a positive number", success: false };
  }

  // ---------- Update ----------
  await Product.findByIdAndUpdate(id, {
    name,
    price,
    description,
  });

  return {
    message: "Product updated successfully!",
    success: true,
  };
}
