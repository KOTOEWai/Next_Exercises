

import Link from "next/link"

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
}

export default function AdminPage() {
  return (
    <main className="min-h-screen w-full p-8 bg-amber-600">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">👑 Admin Panel</h1>

          <div className="p-6 bg-purple-50 border-2 border-purple-200 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-purple-900 mb-2">🎉 Admin Access Granted!</h2>
            <p className="text-purple-700">
              You logged in as an admin, so the middleware checked your user-role cookie and granted access to this
              admin-only page.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Role-Based Authorization</h2>
            <p className="text-gray-700">This demonstrates how middleware can implement role-based access control:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Middleware checks for user-role cookie</li>
              <li>Only users with role="admin" can access /admin routes</li>
              <li>Other users get redirected to home with error message</li>
            </ul>

            <div className="pt-4 space-x-4">
              <Link
                href="/dashboard"
                className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/middle"
                className="inline-block px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition"
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
