'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <main className="flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-4xl font-bold">Something went wrong</h1>
            <p className="mt-3 text-gray-500">
              An unexpected error occurred.
            </p>

            <button
              onClick={() => reset()}
              className="mt-6 rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  )
}