import { notFound } from "next/navigation";

function generateRandomNumber(max:number) {
  return Math.floor(Math.random() * max);
}

export default async function page(
  {params}:
  {params:Promise<{id:string, ReviewId:string}>}) {
    const randomnumber = generateRandomNumber(2);
    if(randomnumber === 1){
      throw new Error("Random Error Occurred");
    }
   const blogId =(await params).id;
   const reviewId =(await params).ReviewId;

   if(parseInt(reviewId) > 5){
    notFound();
   }
  return (
   <h1>Blog Post Id : {blogId} of review {reviewId} review</h1>
  )
}

