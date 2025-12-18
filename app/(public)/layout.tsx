import { Suspense } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../globals.css'

import Loading from './loading'
import { TodoProvider } from '../components/TodoContext'




export const metadata = {
  title: {
    default: 'MyApp',
    template: '%s | MyApp',
  },
  description: 'A modern web application built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"  >
     
      <body className="text-gray-900">
        <TodoProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 container mx-auto px-4 py-8">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>
            <Footer />
          </div>
        </TodoProvider>
      </body>
    </html>
  )
}
