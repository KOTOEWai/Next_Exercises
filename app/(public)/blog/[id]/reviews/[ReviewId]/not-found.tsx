"use client"
import { usePathname } from "next/navigation";

function NotFound() {
    const pathname = usePathname();
     const blogId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
     console.log(blogId);
  return (
    <div>
        <h1>Blog {blogId} of review Id  {reviewId}  is Not Found</h1>
    </div>
  )
}

export default NotFound
