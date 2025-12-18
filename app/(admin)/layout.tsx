import { Metadata } from "next"
import DashboardHeader from "../components/dashboardHeader"
import AppSidebar from "../components/dashboardSidebar"


export const metadata: Metadata = {
   title: {
    default: 'MyApp',
    template: '%s | MyApp',
  },
  description: 'A modern web application built with Next.js and Tailwind CSS',
}



export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="en" >
              <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffffff" />
              </head>
              <body>
                <div className="min-h-screen bg-gray-100 flex flex-col">
                  {/* Sidebar: hidden on mobile, visible on large screens */}
                  <div className="  fixed inset-y-0 left-0 w-64 z-40">
                    <AppSidebar />
                  </div>
                  <div className="flex-1 flex flex-col lg:pl-64">
                    <DashboardHeader />
                    <main className="py-6">
                      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                     
                      </div>
                    </main>
                  </div>
                </div>
              </body>
            </html>
    )   

}
