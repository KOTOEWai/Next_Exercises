import Link from "next/link";

export default async function FriendsPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async data fetching
  return (
    <div className="bg-amber-100 p-4 m-4 shadow-2xl">
      <h3 className="text-lg font-bold mb-2 ">👫 Friends</h3>
      <ul className="space-y-1">
        <li>John Doe</li>
        <li>Jane Smith</li>
        <li>Alex Brown</li>
        <li><Link href={"/dashboard/archived"}>Archived</Link></li>
      </ul>
    </div>
  );
}
