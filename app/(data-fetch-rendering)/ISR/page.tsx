import getBooks from "@/lib/book";


export const revalidate =  60; // regenerate every 60s

export default async function Page() {
    const books = await getBooks(); 

  return (
    <div>
         <h1>Book List (ISR)</h1>
     
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
