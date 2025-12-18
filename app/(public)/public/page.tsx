import Link from "next/link"

export default function PublicPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🌍 Public Page</h1>

          <div className="p-6 bg-gray-50 border-2 border-gray-200 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Anyone can access this page</h2>
            <p className="text-gray-700">
              The middleware ran, but it didn't block you because this route doesn't require authentication. Middleware
              called NextResponse.next() to continue.
            </p>
          </div>

          <Link
            href="/middle"
            className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
