"use server";

import { FormSchema, FormValues } from "@/app/(react-hook-form)/baseForm/FormSchema"; // Adjust path as needed
import { Base } from "@/models/baseFrom"; 
import { connectToDB } from "@/lib/db";


export async function submitForm(data: FormValues) {
  await connectToDB()

  // 1. Re-validate on the server for security
  const validation = FormSchema.safeParse(data);

  if (!validation.success) {
    return {
      success: false,
      errors: validation.error.flatten().fieldErrors,
    };
  }

  // 2. Save to database
  
  await Base.create(validation.data);

  return {
    success: true,
    message: "Form submitted successfully to the server!",
  };
}