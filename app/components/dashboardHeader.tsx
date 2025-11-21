// app/dashboard/components/Header.js
'use client'

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                Dashboard
              </h1>
            </div>
          </div>
          
          <div className="flex items-center">
            <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
              <span className="sr-only">View notifications</span>
              🔔
            </button>
            
            <div className="ml-3 relative">
              <div>
                <button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                    JD
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}