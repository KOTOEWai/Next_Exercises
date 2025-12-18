import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Next.js Middleware Tutorial</h1>
          <p className="text-lg text-gray-600 mb-8">Learn how middleware works with these interactive examples</p>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Public Route */}
            <Link
              href="/public"
              className="block p-6 bg-green-50 border-2 border-green-200 rounded-lg hover:border-green-400 transition"
            >
              <h2 className="text-xl font-semibold text-green-900 mb-2">🌍 Public Route</h2>
              <p className="text-green-700">Accessible to everyone. No middleware protection.</p>
            </Link>

            {/* Protected Route */}
            <Link
              href="/dashboard"
              className="block p-6 bg-red-50 border-2 border-red-200 rounded-lg hover:border-red-400 transition"
            >
              <h2 className="text-xl font-semibold text-red-900 mb-2">🔒 Protected Route</h2>
              <p className="text-red-700">Requires authentication. Will redirect to login.</p>
            </Link>

            {/* Admin Route */}
            <Link
              href="/admin"
              className="block p-6 bg-purple-50 border-2 border-purple-200 rounded-lg hover:border-purple-400 transition"
            >
              <h2 className="text-xl font-semibold text-purple-900 mb-2">👑 Admin Route</h2>
              <p className="text-purple-700">Requires admin role. Will check permissions.</p>
            </Link>

            {/* API Route */}
            <Link
              href="/api/data"
              className="block p-6 bg-blue-50 border-2 border-blue-200 rounded-lg hover:border-blue-400 transition"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-2">🔌 API Route</h2>
              <p className="text-blue-700">Test API with custom headers added by middleware.</p>
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="block p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg hover:border-yellow-400 transition"
            >
              <h2 className="text-xl font-semibold text-yellow-900 mb-2">🔑 Login Page</h2>
              <p className="text-yellow-700">Simulate authentication to access protected routes.</p>
            </Link>

            {/* Rewritten Route */}
            <Link
              href="/old-page"
              className="block p-6 bg-orange-50 border-2 border-orange-200 rounded-lg hover:border-orange-400 transition"
            >
              <h2 className="text-xl font-semibold text-orange-900 mb-2">🔄 Rewritten Route</h2>
              <p className="text-orange-700">Old URL that gets rewritten to new location.</p>
            </Link>
          </div>

          {/* Explanation Section */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📚 What is Middleware?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Middleware</strong> (also called proxy in Next.js 16) runs <em>before</em> your pages and API
                routes. It's perfect for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Authentication:</strong> Check if users are logged in
                </li>
                <li>
                  <strong>Authorization:</strong> Verify user permissions
                </li>
                <li>
                  <strong>Redirects:</strong> Send users to different pages
                </li>
                <li>
                  <strong>Rewrites:</strong> Change URLs internally without redirecting
                </li>
                <li>
                  <strong>Headers:</strong> Add custom headers to requests/responses
                </li>
                <li>
                  <strong>Logging:</strong> Track requests and responses
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
