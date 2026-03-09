export default function BlogPage() {
  return (
    <main className="min-h-screen p-20">
      <h1 className="text-5xl font-bold mb-10">Blog</h1>

      <div className="space-y-6">
        <div className="border p-6 rounded">
          <h2 className="text-2xl font-semibold">
            Building Animated Websites with GSAP
          </h2>
          <p className="mt-2 text-gray-600">
            Learn how to create modern scroll animations with GSAP
            and Next.js.
          </p>
        </div>

        <div className="border p-6 rounded">
          <h2 className="text-2xl font-semibold">
            React Three Fiber for Web Experiences
          </h2>
          <p className="mt-2 text-gray-600">
            Adding interactive 3D elements to modern websites.
          </p>
        </div>
      </div>
    </main>
  );
}