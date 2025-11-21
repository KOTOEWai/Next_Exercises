import "../../globals.css"
import DashboardHeader from "../../components/dashboardHeader"
import AppSidebar from "../../components/dashboardSidebar"

export const metadata = {
  title: 'Dashboard - MyApp',
  description: 'User dashboard',
}

export default function DashboardLayout({
   children,
   friends,
   posts

 }: {
   children: React.ReactNode ,
   friends?: React.ReactNode,
   posts?: React.ReactNode
 }) {
  return (
    <html lang="en">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {children}
                {friends}
                {posts}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}