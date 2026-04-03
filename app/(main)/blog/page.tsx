




// app/(main)/blog/page.tsx
import { sanityClient } from '@/lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { url: string }; alt?: string };
  publishedAt: string;
};

// Fetch all posts with defined slugs
async function getPosts(): Promise<Post[]> {
  return sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)]{
      _id,
      title,
      slug,
      mainImage{asset->{url}, alt},
      publishedAt
    } | order(publishedAt desc)
  `);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">My Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug.current}`} // Dynamic slug link
            className="border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || 'Blog Image'}
                width={600}
                height={300}
                className="object-cover w-full h-48"
              />
            )}
            <div className="p-4">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">
                {new Date(post.publishedAt).toDateString()}
              </p>
              <p className="text-blue-600 mt-2">Read More →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}