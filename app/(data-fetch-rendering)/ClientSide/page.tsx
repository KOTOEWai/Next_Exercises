"use client";

import { useEffect, useState } from "react";

type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
};

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    fetch("/api/book") // must match API route
      .then((res) => res.json())
      .then((data: Book[]) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Book List (CSR)</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
          </li>
        ))}
      </ul>
  
    </div>
  );
}
