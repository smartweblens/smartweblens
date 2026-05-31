import { notFound } from "next/navigation";
import { blogPosts } from "../postsData";
import BlogPostClient from "./BlogPostClient";

// Statically generate routes for all 6 articles at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate dynamic SEO metadata for each article
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | SmartWebLens Blog`,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.smartweblens.xyz/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: `https://www.smartweblens.xyz/blog/${post.slug}`,
      type: "article",
      publishedTime: "2026-05-31T00:00:00.000Z",
      authors: ["SmartWebLens Team"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts (articles in the same category, or select others if not enough)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  // Schema.org structured data for rich snippets (BlogPosting)
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": "2026-05-31T00:00:00.000Z",
    "author": {
      "@type": "Organization",
      "name": "SmartWebLens",
      "url": "https://www.smartweblens.xyz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmartWebLens",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smartweblens.xyz/swl2.PNG"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.smartweblens.xyz/blog/${post.slug}`
    }
  };

  return (
    <>
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* Interactive header + Reading progress bar + Social Share */}
      <BlogPostClient title={post.title} slug={post.slug} />

      {/* ARTICLE CONTENT */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 transition-colors duration-300">
        <article className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm dark:bg-slate-900 dark:border-slate-800">
          
          {/* Post Header */}
          <header className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 uppercase tracking-wider dark:bg-indigo-950/50 dark:border-indigo-900 dark:text-indigo-400 mb-4">
              {post.category}
            </div>

            <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 font-semibold pb-6 border-b border-slate-100 dark:border-slate-800/80">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-md">
                SWL
              </div>
              <div className="flex flex-col">
                <span className="text-slate-800 dark:text-slate-200">SmartWebLens Team</span>
                <span className="text-xs text-slate-500">{post.date} · {post.readTime} read</span>
              </div>
            </div>
          </header>

          {/* Featured Visual Header Card */}
          <div className={`aspect-video rounded-2xl bg-gradient-to-br ${post.imageColor} flex items-center justify-center text-8xl mb-10 relative overflow-hidden shadow-inner`}>
            <span className="relative z-10 drop-shadow-lg animate-bounce">{post.imageEmoji}</span>
            <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>

          {/* Post Body (Clean semantic typographic output) */}
          <div className="font-sans text-slate-700 leading-relaxed text-base sm:text-lg dark:text-slate-300 space-y-6">
            {post.body.map((block, idx) => {
              if (block.type === "heading") {
                return (
                  <h2 
                    key={idx} 
                    className="font-sans font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight pt-6 pb-2"
                  >
                    {block.content}
                  </h2>
                );
              }
              // Render paragraph text, converting bullet format strings if necessary
              return (
                <p 
                  key={idx} 
                  className="whitespace-pre-line leading-relaxed"
                >
                  {block.content}
                </p>
              );
            })}
          </div>

          {/* Call to action inside the article */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-150 text-center dark:bg-slate-850 dark:border-slate-800">
            <h3 className="font-sans font-bold text-lg sm:text-xl text-slate-950 dark:text-white mb-2">
              Ready to Launch Your Business Online?
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-lg mx-auto">
              Get an elite, mobile-perfect business website or customized mobile application built and fully deployed in just 5 working days.
            </p>
            <a 
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 active:scale-95 transition-all shadow-md"
            >
              Start Your Project →
            </a>
          </div>
        </article>
      </main>

      {/* RELATED POSTS SECTION */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-slate-900/50 dark:border-slate-850">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-sans font-bold text-2xl text-slate-900 dark:text-white tracking-tight mb-8">
            Related Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.slice(0, 2).map((p) => (
              <a 
                key={p.id}
                href={`/blog/${p.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all dark:bg-slate-900 dark:border-slate-800"
              >
                {/* Visual Header */}
                <div className={`aspect-video bg-gradient-to-br ${p.imageColor} flex items-center justify-center text-4xl relative`}>
                  <span className="relative z-10">{p.imageEmoji}</span>
                  <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
                    {p.category}
                  </span>
                  
                  <h3 className="font-sans font-bold text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 mb-2">
                    {p.title}
                  </h3>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-300 mt-auto">
                    Read Post →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-850 py-12 text-center text-xs text-slate-500 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src="/swl2.PNG" alt="SmartWebLens" className="h-7 w-auto brightness-90" />
            <span className="text-slate-400 font-bold">SmartWebLens Blog</span>
          </div>
          <span>© 2026 SmartWebLens. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
