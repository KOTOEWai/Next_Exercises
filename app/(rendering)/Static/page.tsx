// static rendering
/*
   Static Rendering

  Static Rendering ကို Next.js 13+ (App Router) မှာ default rendering strategy တစ်ခုအဖြစ် သုံးတယ်။

  အဓိက idea က —
  Request မလာခင် build time / prerender time မှာ HTML ကို generate လုပ်ပြီး CDN မှာ cache ထားတယ် → client request လာရင် super fast delivery.

*/

import getBooks from "@/lib/book";

// app/books/page.tsx
type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};





export default async function BooksPage() {
  const books = await getBooks(); 
 
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
