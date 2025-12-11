import React from 'react'

export default function ProductsList({products}: any) {
  return (
    <div>
      {products.map((product: any) => (
        <div key={product.id}>
        <p>{product.name}</p>
        <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}
