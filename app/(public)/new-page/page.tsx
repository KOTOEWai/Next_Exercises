import Link from "next/link"

export default function NewPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">🔄 Rewritten Page</h1>

          <div className="p-6 bg-orange-50 border-2 border-orange-200 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-orange-900 mb-2">URL Rewriting Example</h2>
            <p className="text-orange-700 mb-4">
              If you came here via <code className="bg-orange-100 px-2 py-1 rounded">/old-page</code>, the middleware
              secretly rewritten the URL to <code className="bg-orange-100 px-2 py-1 rounded">/new-page</code>.
            </p>
            <p className="text-orange-700">The user never sees a redirect - it happens server-side invisibly!</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Rewrite vs Redirect</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Rewrite (Internal)</h3>
                <p className="text-sm text-blue-700">
                  URL stays the same in browser. Content is served from different location. User doesn't notice.
                </p>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Redirect (External)</h3>
                <p className="text-sm text-green-700">
                  URL changes in browser. User is sent to new location. Browser navigation occurs.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/middle"
              className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
