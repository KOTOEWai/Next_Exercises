export default function DocsPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      <h1>Catch All Docs</h1>
      <p>Slug segments: {params.slug.join(" / ")}</p>
    </div>
  );
}
