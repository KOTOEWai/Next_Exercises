import Image from "next/image";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photoUrl = `https://picsum.photos/id/${params.id}/1000/1000`;
  
  return (
    <main className="p-10 flex flex-col items-center">
      <Image
        src={photoUrl}
        alt={`Photo ${params.id}`}
        width={1000}
        height={1000}
        className="rounded-xl"
      />
      <p className="mt-4 text-lg text-gray-600">
        Viewing photo {params.id} as a full page.
      </p>
    </main>
  );
}
