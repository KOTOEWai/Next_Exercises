"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    // Clear authentication cookies
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "user-role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"

    router.push("/middle")
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">🔒 Protected Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Logout
            </button>
          </div>

          <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-green-900 mb-2">✅ Success!</h2>
            <p className="text-green-700">
              You successfully accessed this protected route. The middleware checked your auth-token cookie and allowed
              you through.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What happened?</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
              <li>You clicked "Login" and a cookie was set</li>
              <li>You navigated to /dashboard</li>
              <li>
                <strong>Middleware ran first</strong> and checked for auth-token cookie
              </li>
              <li>Cookie was found, so middleware allowed the request</li>
              <li>This page loaded successfully</li>
            </ol>

            <div className="pt-4">
              <p className="text-gray-600 mb-4">Try logging out and accessing this page again!</p>
              <Link
                href="/middle"
                className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
