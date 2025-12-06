import React from 'react'
export const dynamicParams = false; // disable dynamic params
export const generateMetadata = ({ params }: { params: { id: string } }) => {
    return {
        title: `Static Id ${params.id}`,
    }
}
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" }
  ];
}

export default function ({ params }: { params: { id: string } }) {

  return (
    <div>
       <h1>Static Id  {params.id}</h1>
    </div>
  )
}
