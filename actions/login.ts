"use server";

import { signIn } from "next-auth/react";
import  AuthError from "next-auth";


export interface LoginState {
  error?: string;
  success?: boolean;
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
   return {
    success: true,
   }
   
    
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      return { error: "Invalid email or password" };
    }
    return { error: "Something went wrong" };
  }
}
