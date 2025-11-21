import React from 'react'
import Gotoback from '../../components/gotoback'
import { Metadata } from 'next'
export const metadata:Metadata = {
  title: 'Blog',
  description: 'Blog page',
}
export default function page() {
  return (
    <div>
       <h1 className='bg-blue-500'>Blog Post</h1>
       <Gotoback para="Go to Home" page=""/>
       <Gotoback para="Go to About" page="about"/>
    </div>
  )
}
