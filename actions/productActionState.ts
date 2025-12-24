"use server";

import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";



interface ActionState {
  message: string | null;
  success: boolean;
}


export async function createProductAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await connectToDB();

  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const description = formData.get("description") as string;

  // -------- VALIDATION --------
  if (!name || name.length < 3) {
    return { message: "Name must be at least 3 characters", success: false };
  }

  if (isNaN(price) || price <= 0) {
    return { message: "Price must be a positive number", success: false };
  }

  // VALID
  await Product.create({ name, price, description });
  
  

  return { message: "Product created successfully!", success: true };
 
}
