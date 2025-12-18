



export default function DashboardLayout({
   children,
   friends,
   posts,
  

 }: {
   children: React.ReactNode ,
   friends?: React.ReactNode,
   posts?: React.ReactNode,
  
 }) {
  return (
   
      
            <main className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {children}
                {friends}
                {posts}
              </div>
            </main>
         
     
  )
}