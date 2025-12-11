"use client";

import { useActionState, useEffect } from "react";
import { updateProductAction } from "@/actions/productUpdateAction";
import { useRouter } from "next/navigation";

const initial = { message: null, success: false };

export default function EditProductForm({ product }: any) {
  const [state, formAction, pending] = useActionState(
    updateProductAction,
    initial
  );

    const router = useRouter();

  // redirect after success
  useEffect(() => {
    if (state.success) router.push("/products");
  }, [state.success]);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="id" value={product._id} />

      <input
        name="name"
        defaultValue={product.name}
        className="border px-3 py-2 rounded"
      />

      <input
        name="price"
        type="number"
        defaultValue={product.price}
        className="border px-3 py-2 rounded"
      />

      <textarea
        name="description"
        defaultValue={product.description}
        className="border px-3 py-2 rounded"
      />

      <button disabled={pending}>
        {pending ? "Updating..." : "Update Product"}
      </button>

      {state.message && (
        <p className={state.success ? "text-green-600" : "text-red-600"}>
          {state.message}
        </p>
      )}
    </form>
  );
}
