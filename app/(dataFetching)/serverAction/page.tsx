import { createProduct } from "@/actions/productAction";
import SubmitButton from "@/app/components/submitButton";
export default function CreateProductPage() {
  return (
    <div className="p-6 max-w-xl mx-auto ">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>

      <form action={createProduct} className="flex justify-center flex-col gap-4">
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

       <SubmitButton />
      </form>
    </div>
  );
}
