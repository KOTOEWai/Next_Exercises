export default function Page({ params }: { params: { slug: string } }) {
  return <h1>Docs {params.slug}</h1>;
}
