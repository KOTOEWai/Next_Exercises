'use client'

export default function DashboardError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 bg-red-100">
      <h2>🚨 Dashboard Error!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="bg-blue-600 text-white px-4 py-2 rounded">
        Retry
      </button>
    </div>
  )
}
