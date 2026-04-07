



// // app/(main)/blog/[slug]/page.tsx
// import { sanityClient } from '@/lib/sanityClient';
// import Image from 'next/image';
// import { PortableText } from '@portabletext/react';

// type Post = {
//   title: string;
//   body: any;
//   image?: { asset: { url: string }; alt?: string };
//   publishedAt: string;
// };

// type Props = {
//   params: { slug: string };
// };

// // Fetch single post by slug
// async function getPost(slug: string): Promise<Post | null> {
//   return sanityClient.fetch(
//     `*[_type == "post" && slug.current == $slug][0]{
//       title,
//       body,
//       image{asset->{url}, alt},
//       publishedAt
//     }`,
//     { slug }
//   );
// }

// export default async function PostPage({ params }: Props) {
//   // ✅ Unwrap params as App Router now returns a Promise
//   const { slug } = await params;  

//   if (!slug) return <p>⚠️ No slug provided!</p>;

//   const post = await getPost(slug);

//   if (!post) return <p>⚠️ Post not found!</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

//       {post.image?.asset?.url && (
//         <Image
//           src={post.image.asset.url}
//           alt={post.image.alt || 'Blog Image'}
//           width={800}
//           height={400}
//           className="rounded mb-6"
//         />
//       )}

//       <PortableText value={post.body} />
//       <p className="text-gray-400 text-sm mt-4">
//         Published on {new Date(post.publishedAt).toDateString()}
//       </p>
//     </div>
//   );
// }






// app/(main)/blog/[slug]/page.tsx
import { sanityClient } from '@/lib/sanityClient';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';

type Post = {
  title: string;
  body: any;
  image?: { asset: { url: string }; alt?: string };
  excerpt?: string;
  publishedAt: string;
  author?: { name: string };
  categories?: Array<{ title: string }>;
  featured?: boolean;
};

type Props = {
  params: Promise<{ slug: string }>;
};

async function getPost(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      image{asset->{url}, alt},
      excerpt,
      publishedAt,
      author-> { name },
      categories[]-> { title },
      featured
    }`,
    { slug }
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) return <div className="text-center py-20 text-red-400">No slug provided</div>;

  const post = await getPost(slug);

  if (!post) return <div className="text-center py-20 text-white/50">Post not found</div>;

  return (
    <article className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="max-w-3xl mx-auto">

          {/* Featured Badge */}
          {post.featured && (
            <div className="inline-flex items-center gap-2 px-4 py-1 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs tracking-widest">
              ★ FEATURED POST
            </div>
          )}

          {/* Title - Smooth & Professional */}
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight leading-snug mb-8">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-zinc-400 mb-12">
            {post.publishedAt && (
              <div>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            )}

            {post.author?.name && (
              <div>By <span className="text-zinc-200">{post.author.name}</span></div>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((cat, i) => (
                  <span 
                    key={i}
                    className="bg-zinc-900 px-4 py-1 rounded-full text-xs border border-white/10"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg text-zinc-300 leading-relaxed mb-14 border-l-4 border-zinc-700 pl-6">
              {post.excerpt}
            </p>
          )}

          {/* Featured Image */}
          {post.image?.asset?.url && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-16 border border-white/10">
              <Image
                src={post.image.asset.url}
                alt={post.image.alt || post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>
          )}

          {/* Main Content - Smooth & Readable */}
          <div className="prose prose-invert prose-zinc max-w-none 
                         text-[17px] leading-relaxed 
                         prose-headings:font-medium prose-headings:tracking-tight
                         prose-p:text-zinc-300">
            <PortableText
              value={post.body}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="text-3xl mt-16 mb-6 tracking-tight text-white">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl mt-12 mb-5 text-white">
                      {children}
                    </h3>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <div className="my-14 relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                      <Image
                        src={value.asset.url}
                        alt={value.alt || ''}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    </div>
                  ),
                  code: ({ value }) => (
                    <pre className="bg-zinc-900 p-6 rounded-2xl overflow-auto text-sm my-10 border border-white/10">
                      <code className="text-zinc-300">{value.code}</code>
                    </pre>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}