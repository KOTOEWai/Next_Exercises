import React from 'react'
import Gotoback from '../../components/gotoback'
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'About',
  description: 'About us page',
}



export default async function Aboutpage() {
   
    const res = await fetch("http://localhost:3000/api/book", {
     cache: "no-store",
     });

     const books = await res.json();
  return (
    <>
     <ul>
        {books.map((book:any) => (
          <li key={book.id}>
            {book.title} - {book.author} ({book.year})
          </li>
        ))}
      </ul>
    <div>page</div>
    <Gotoback para="Go to Home" page=""/>
    <Gotoback para="Go to Blog" page="blog"/>
    
    
    </>
    
    
  )
}

