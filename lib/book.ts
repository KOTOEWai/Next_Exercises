// app/api/books/route.ts
import { NextResponse } from "next/server";

type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
};

export default async function getBooks(): Promise<Book[]> {
  // direct DB or mock data
   const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  return books;
}

