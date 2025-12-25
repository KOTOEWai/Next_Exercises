// app/books/page.tsx

import getBooks from "@/lib/book";




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
