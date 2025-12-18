"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [role, setRole] = useState<"user" | "admin">("user")

  const redirect = searchParams.get("redirect") || "/dashboard"

  const handleLogin = (loginRole: "user" | "admin") => {
    // Set authentication cookie
    document.cookie = "auth-token=demo-token-123; path=/"
    document.cookie = `user-role=${loginRole}; path=/`

    // Redirect to the original destination or dashboard
    router.push(redirect)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Login</h1>
        <p className="text-gray-600 mb-6">Choose a role to simulate authentication</p>

        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
            <h2 className="font-semibold text-blue-900 mb-2">🔑 How it works:</h2>
            <p className="text-sm text-blue-700">
              Clicking login sets a cookie that the middleware checks. Try accessing protected routes before and after
              logging in!
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => handleLogin("user")}
              className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
            >
              Login as User
            </button>

            <button
              onClick={() => handleLogin("admin")}
              className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition"
            >
              Login as Admin
            </button>
          </div>

          <button onClick={() => router.push("/middle")} className="w-full py-2 text-gray-600 hover:text-gray-900 transition">
            ← Back to Home
          </button>
        </div>
      </div>
    </main>
  )
}
