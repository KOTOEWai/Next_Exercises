import { connectToDB } from "@/lib/db";
import { Product } from "@/models/Product";
import EditProductForm from "./EditForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 

  await connectToDB();

  const data = await Product.findById(id).lean();
  const product = JSON.parse(JSON.stringify(data));

  return <EditProductForm product={product} />;
}
