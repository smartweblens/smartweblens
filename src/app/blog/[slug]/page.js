"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Link2, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { blogPosts } from "../../../data/blog-posts";

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Find current post
  const post = useMemo(() => {
    return blogPosts.find((p) => p.slug === slug);
  }, [slug]);

  // Handle redirect if post not found
  useEffect(() => {
    if (!post) {
      router.push("/blog");
    }
  }, [post, router]);

  // Reading progress scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.pageYOffset / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Related posts calculation
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    // Filter out current post
    const filtered = blogPosts.filter((p) => p.slug !== post.slug);
    // Sort so posts of same category come first
    const sorted = [...filtered].sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    });
    // Return top 3
    return sorted.slice(0, 3);
  }, [post]);

  // Copy Link to clipboard action
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="animate-spin h-6 w-6 border-2 border-indigo-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-05-28T00:00:00Z",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmartWebLens",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smartweblens.xyz/swl2.PNG"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="relative pb-24 transition-all">
      
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* READING PROGRESS BAR */}
      <div 
        className="fixed top-[69px] left-0 h-1 bg-indigo-600 dark:bg-indigo-500 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Header */}
      <header className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 pb-8 text-center md:text-left">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog List
        </Link>

        {/* Category Tag */}
        <span className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/50 mb-5">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-6">
          {post.title}
        </h1>

        {/* Meta Row */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 border-b border-slate-200/80 dark:border-slate-800/80 pb-6 text-xs text-slate-400 dark:text-slate-500">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 overflow-hidden">
              <span>{post.author[0]}</span>
            </div>
            <span className="font-bold text-slate-650 dark:text-slate-350">{post.author}</span>
          </div>

          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.publishDate}
          </span>

          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-6 mb-12 md:mb-16">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800/80 shadow-md">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      {/* MAIN CONTAINER (Content & Sidebar/Sharing) */}
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        
        {/* SHARING SIDEBAR (DESKTOP) */}
        <aside className="md:col-span-1 hidden md:block">
          <div className="sticky top-28 flex flex-col gap-5 border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-405 dark:text-slate-500">
              Share Article
            </h4>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-550 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <TwitterIcon className="h-4 w-4" />
              Twitter
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(post.title)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-550 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <button 
              onClick={handleCopyLink}
              className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-550 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer text-left"
            >
              <Link2 className="h-4 w-4" />
              {copied ? <span className="text-emerald-500 font-bold flex items-center gap-1"><CheckCircle2 className="h-3 w-3" /> Copied!</span> : "Copy Link"}
            </button>
          </div>
        </aside>

        {/* TYPOGRAPHY CONTENT PANEL */}
        <article className="md:col-span-3">
          <div 
            className="prose-custom dark:prose-dark" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* Social Share (Mobile) */}
          <div className="flex md:hidden items-center justify-center gap-6 border-t border-b border-slate-200/80 dark:border-slate-800/80 py-4 my-10 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-bold uppercase tracking-wider text-[10px] text-slate-400">Share:</span>
            <a href="#" className="hover:text-indigo-600 transition-colors"><TwitterIcon className="h-4.5 w-4.5" /></a>
            <a href="#" className="hover:text-indigo-600 transition-colors"><LinkedinIcon className="h-4.5 w-4.5" /></a>
            <button onClick={handleCopyLink} className="hover:text-indigo-600 transition-colors cursor-pointer">
              {copied ? <span className="text-emerald-500 font-bold">Copied!</span> : <Link2 className="h-4.5 w-4.5" />}
            </button>
          </div>
        </article>
      </div>

      {/* RELATED POSTS SECTION */}
      <section className="max-w-6xl mx-auto px-6 mt-20 md:mt-32 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
        <div className="flex items-center gap-2 mb-10">
          <Sparkles className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Related Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((rPost) => (
            <article 
              key={rPost.slug}
              className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-350"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img 
                  src={rPost.image} 
                  alt={rPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                  {rPost.category}
                </span>

                <h3 className="text-sm font-bold text-slate-850 dark:text-white line-clamp-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-4">
                  <Link href={`/blog/${rPost.slug}`} className="focus:outline-none">
                    {rPost.title}
                  </Link>
                </h3>

                <Link 
                  href={`/blog/${rPost.slug}`}
                  className="mt-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 group/link"
                >
                  Read Article
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
