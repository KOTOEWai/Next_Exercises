import React from 'react'
import Gotoback from '../../components/gotoback'
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title: 'About',
  description: 'About us page',
}


export default async function Aboutpage() {
  await new Promise((resolve)=>setTimeout(resolve,500))
  
  return (
    <>
    <div>page</div>
    <Gotoback para="Go to Home" page=""/>
    <Gotoback para="Go to Blog" page="blog"/>
    
    
    </>
    
    
  )
}

