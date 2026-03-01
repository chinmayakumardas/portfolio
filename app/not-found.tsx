export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-5xl font-bold">404</h1>
        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
        <p className="mt-3 text-gray-500">
          The page you are looking for does not exist.
        </p>

        <a
          href="/"
          className="mt-6 inline-block rounded-lg border px-6 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
        >
          Go Home
        </a>
      </div>
    </main>
  )
}