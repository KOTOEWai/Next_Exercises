import React from 'react'

export default async function StreamingTwo() {
   await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
       <h1>Streaming Two</h1>
    </div>
  )
}
