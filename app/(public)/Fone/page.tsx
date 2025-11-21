import Link from "next/link"

export default function F1page() {
  return (
    <div>
      <h1>F1Page</h1>
      <Link href={'/Fone'}>Go to F1</Link>
      <br />
      <Link href={'Fone/F2'}>Go to F2</Link>
      <br />
      <Link href={'/F3'}>Go to F3</Link>
      <br />
    </div>
  )
}
