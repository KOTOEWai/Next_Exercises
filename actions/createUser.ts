"use server";

import { User } from "@/models/User";
import { connectToDB } from "@/lib/db";
import bcrypt from "bcryptjs";

export interface FormState {
  error?: string;
  success?: string;
}

export async function register(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {

  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  
  if (!name || !email || !password) {
    return { error: "All fields are required" };
  }
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long" };
  }
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return { error: "Invalid email address" };
  }
  
  

  

  await connectToDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return { error: "User already exists" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({
    name,
    email,
    password: hashedPassword,
  });

  return { success: "User created successfully" };
}
