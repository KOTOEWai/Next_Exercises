import React from 'react'
import DashboardPage from './Dashboard'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title: "dashboard",
  description: "dashboard",
}



export default function page() {
  return (
    <DashboardPage/>
  )
}
