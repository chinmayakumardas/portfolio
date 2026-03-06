

import { client } from "@/lib/sanity"
import { postQuery } from "@/queries/blog"
import { notFound } from "next/navigation"
import Image from "next/image"
import { PortableText } from "@portabletext/react"

type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: Props) {

  const { slug } = await params

  const post = await client.fetch(postQuery, { slug })

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-20 px-6">

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 mb-8">
        {new Date(post.publishedAt).toDateString()}
      </p>

      {/* Image */}
      {post.mainImage?.asset?.url && (
        <Image
          src={post.mainImage.asset.url}
          alt={post.title}
          width={900}
          height={500}
          className="rounded-xl mb-10"
        />
      )}

      {/* Blog Content */}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>

    </article>
  )
}