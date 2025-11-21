"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
export default function Gotoback({para , page}:{para:string , page?:string}) {
 const router=useRouter();
 const backPage=()=>{
    router.push('/' + (page?page:''));
 }
  return (
    <button className='bg-amber-400 m-4 p-5 rounded-3xl' onClick={()=>backPage()}>{para}</button>
  )
}
