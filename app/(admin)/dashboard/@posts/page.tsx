export default async function PostsPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate async data fetching
  return (
    <div className="bg-amber-100 p-4 m-4 shadow-2xl">
      <h3 className="text-lg font-bold mb-2">📸 Posts</h3>
      <ul className="space-y-1">
        <li>My Breakfast Recipe</li>
        <li>My Travel Photo</li>
        <li>My Coding Journey</li>
      </ul>
    </div>
  );
}
