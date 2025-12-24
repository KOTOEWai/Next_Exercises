"use server";

import { signIn } from "@/auth";
import  AuthError from "next-auth";

export interface LoginState {
  error?: string;
}

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    return {};
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Invalid email or password" };
    }
    return { error: "Something went wrong" };
  }
}
