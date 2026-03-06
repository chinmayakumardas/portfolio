import { client } from "@/lib/sanity"
import { postsQuery } from "@/queries/blog"
import Link from "next/link"

export default async function BlogPage() {

  const posts = await client.fetch(postsQuery)

  return (
    <main className="max-w-4xl mx-auto py-20">

      <h1 className="text-4xl font-bold mb-10">
        Blog
      </h1>

      {posts.map((post:any) => (
        <article key={post.slug.current}>

          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>
          </Link>

        </article>
      ))}

    </main>
  )
}