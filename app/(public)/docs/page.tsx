export default async function Page( { params }: { params: Promise< { slug: string } > } ) {
   const { slug } = await params;
   if (slug) {
    return <h1>Docs for {slug}</h1>;
   }
  return <h1>Docs Home Page</h1>;
}


