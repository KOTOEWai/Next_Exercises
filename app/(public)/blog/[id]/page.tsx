import { notFound } from "next/navigation";


export default async function page({params}:{params:Promise<{id:string}>}) {
   const blogId =(await params).id;
   if(!blogId){
    notFound();
   }

   if(parseInt(blogId) === Math.floor( Math.random()*1)){
    throw new Error("Not Found");
   }
  return (
   <h1>Blog Post Id : {blogId}</h1>
  )
}

