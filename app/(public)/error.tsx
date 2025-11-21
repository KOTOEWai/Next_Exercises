'use client'
import { useRouter } from 'next/navigation'
import { startTransition } from 'react'

 // Error boundaries must be Client Components
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()
  const reload = () => {
    startTransition(() => {
    router.refresh();
    reset();
    });
  }
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={reload}>Try again</button>
      </body>
    </html>
  )
}