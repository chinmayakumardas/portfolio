



// app/(main)/blog/page.tsx
import { sanityClient } from '@/lib/sanityClient';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  image?: { asset?: { url?: string }; alt?: string } | null;
  publishedAt: string;
  excerpt?: string;
};

async function getPosts(): Promise<Post[]> {
  const posts: Post[] = await sanityClient.fetch(`
    *[_type == "post" && defined(slug.current)]{
      _id,
      title,
      slug,
      image{
        asset->{
          _id,
          url
        },
        alt
      },
      publishedAt,
      excerpt
    } | order(publishedAt desc)
  `);

  return posts;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto px-6    text-white font-sans">
    

      {/* Hero Title */}
      <div className=" mx-auto px-6 pt-6 pb-6">
        <h1 className="text-[60px] md:text-[80px] leading-none font-bold tracking-tighter">
          RECENT BLOG 
        </h1>
      </div>

      {/* Filter Buttons - Exact Lazarev Style */}
      <div className=" mx-auto px-6 pb-6">
        <div className="flex flex-wrap gap-3">
          <button className="px-6 py-2.5 hover:border-white hover:bg-white hover:text-black cursor-pointer bg-white text-black rounded-full text-xs font-medium tracking-widest">
            ALL
          </button>
          <button className="px-6 py-2.5 hover:border-white hover:bg-white hover:text-black cursor-pointer border border-white/30 hover:border-white/60 rounded-full text-xs font-medium tracking-widest transition-colors">
            WEBSITES
          </button>
          <button className="px-6 py-2.5 hover:border-white hover:bg-white hover:text-black cursor-pointer border border-white/30 hover:border-white/60 rounded-full text-xs font-medium tracking-widest transition-colors">
            SAAS
          </button>
          <button className="px-6 py-2.5 hover:border-white hover:bg-white hover:text-black cursor-pointer border border-white/30 hover:border-white/60 rounded-full text-xs font-medium tracking-widest transition-colors">
            MOBILE APPS
          </button>
        </div>
      </div>

      {/* 3-Column Grid - Matches Lazarev Card Style */}
      <div className=" mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-3 py-20 text-center text-white/40">
              No case studies yet.
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group flex flex-col"
              >
                {/* Large Title + Description (Top) */}
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-4 text-[15px] leading-relaxed text-white/70 line-clamp-4">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                {/* Image (Bottom) */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 mt-auto">
                  {post.image?.asset?.url ? (
                    <Image
                      src={post.image.asset.url}
                      alt={post.image.alt || post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-900" />
                  )}
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}









