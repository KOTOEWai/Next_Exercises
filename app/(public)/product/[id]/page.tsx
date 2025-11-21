import React from 'react'

export const generateMetadata = ({ params }: { params: { id: string } }) => {
    return {
        title: `product ${params.id}`,
    }
}

export default function ({ params }: { params: { id: string } }) {

  return (
    <div>
       <h1>product {params.id}</h1>
    </div>
  )
}
