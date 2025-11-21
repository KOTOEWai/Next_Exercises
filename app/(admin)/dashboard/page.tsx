import Link from "next/link";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async data fetching
  return (
    <div className="bg-amber-100 p-4 m-4 shadow-2xl">
      <h3 className="text-lg font-bold mb-2 ">Default Page</h3>
    
    </div>
  );
}
