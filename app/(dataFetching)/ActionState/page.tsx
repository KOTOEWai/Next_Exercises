"use client";

import { useActionState, useEffect } from "react";
import { createProductAction } from "@/actions/productActionState";
import { useRouter } from "next/router";


const initialState = {
  message: null,
  success: false,
};


export default function CreateProductPage() {
  const [state, formAction, ispending] = useActionState(
    createProductAction,
    initialState
  );

  // Reset form after success
  useEffect(() => {
    if (state.success) {
      const form = document.getElementById("productForm") as HTMLFormElement;
      form?.reset();
    }
  }, [state]);

    const router = useRouter();

  // redirect after success
  useEffect(() => {
    if (state.success) router.push("/products");
  }, [state.success]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>

      <form
        id="productForm"
        action={formAction}
        className="flex flex-col gap-4"
      >
        <input
          name="name"
          placeholder="Product Name"
          required
          className="border rounded px-3 py-2"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          required
          className="border rounded px-3 py-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          className="border rounded px-3 py-2"
        />

        <button
          type="submit"
          disabled={ispending}
          className="bg-black text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {ispending ? "Creating..." : "Create Product"}
        </button>
      </form>

      {/* Message (error or success) */}
      {state.message && (
        <p
          className={`mt-4 text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
