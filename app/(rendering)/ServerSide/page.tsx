// app/books/page.tsx
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

export const dynamic = "force-dynamic";

async function getBooks(): Promise<Book[]> {
  const res = await fetch("http://localhost:3000/api/book", {
    cache: "no-store",   // 🔥 make it SSR (no caching)
  });

  if (!res.ok) throw new Error("Failed to fetch");

  return res.json();
}

export default async function BooksPage() {
  const books = await getBooks(); // 🟢 Server fetch (SSR)
 
  return (
    <div>
      <h1>Book List (SSR)</h1>
      <div> <h2>Book List (SSR)</h2></div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} — {book.author} ({book.year})
          </li>
        ))}
      </ul>
    </div>
  );
}
