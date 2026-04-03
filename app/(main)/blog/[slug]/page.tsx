// app/(main)/blog/[slug]/page.tsx
import { sanityClient } from '@/lib/sanityClient';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type Post = {
  title: string;
  body: any;
  image?: { asset: { url: string }; alt?: string };
  publishedAt: string;
};

type Props = {
  params: { slug: string };
};

// Fetch single post by slug
async function getPost(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      image{asset->{url}, alt},
      publishedAt
    }`,
    { slug }
  );
}

export default async function PostPage({ params }: Props) {
  // ❌ Remove 'await' here
  const { slug } = params;  

  if (!slug) return <p>⚠️ No slug provided!</p>;

  const post = await getPost(slug);

  if (!post) return <p>⚠️ Post not found!</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.image?.asset?.url && (
        <Image
          src={post.image.asset.url}
          alt={post.image.alt || 'Blog Image'}
          width={800}
          height={400}
          className="rounded mb-6"
        />
      )}

      <PortableText value={post.body} />
      <p className="text-gray-400 text-sm mt-4">
        Published on {new Date(post.publishedAt).toDateString()}
      </p>
    </div>
  );
}