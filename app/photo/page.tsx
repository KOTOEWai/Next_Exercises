import Image from "next/image";

export default function Home() {
  return (
    <div className="relative  h-72">
     <Image
     src="/hero.jpg"
     alt="Hero"
     fill
     placeholder="blur"
    blurDataURL="/placeholder.png"
    className="object-cover"
    />
    </div>
  );
}
