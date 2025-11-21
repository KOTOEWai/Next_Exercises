import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
       <h1>Archived</h1>
       <Link href={'/dashboard'}>Go to Home</Link>
    </div>
  )
}
