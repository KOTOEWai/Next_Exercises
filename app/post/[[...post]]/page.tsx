import React from 'react'

export default function page({ params }: { params: { post?: string[] } }) {
    const { post } = params
  return (
    <div>
          <h1>Hello</h1>
              <h1>Post{post?.join(" / ")} </h1>
    </div>
  )
}
