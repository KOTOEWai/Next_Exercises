import { getProducts } from "../mongo-db";
import ProductsList from "./productList";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <ProductsList products={products} />
    </div>
  );
}
