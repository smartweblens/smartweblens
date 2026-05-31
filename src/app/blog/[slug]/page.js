"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  Calendar, 
  Clock, 
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
        <div className="animate-spin h-6 w-6 border-2 border-indigo-650 border-t-transparent rounded-full" />
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
    <>
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* READING PROGRESS BAR */}
      <div className="reading-bar" style={{ width: `${scrollProgress}%` }} />

      {/* ARTICLE HEADER HERO */}
      <header className="section" style={{ background: "var(--white)", padding: "56px 0 32px" }}>
        <div className="container">
          
          {/* Back link */}
          <Link 
            href="/blog" 
            className="blog-card-link"
            style={{ textDecoration: "none", marginBottom: "24px", display: "inline-flex", alignItems: "center", gap: "6px" }}
          >
            <ArrowLeft style={{ width: "16px", height: "16px" }} />
            Back to Blog Index
          </Link>

          {/* Category tag */}
          <div style={{ margin: "16px 0" }}>
            <span className="section-tag" style={{ display: "inline-block", background: "var(--teal-light)", color: "var(--teal)", textTransform: "uppercase" }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", color: "var(--text-dark)", margin: "16px 0 24px", lineHeight: "1.25" }}>
            {post.title}
          </h1>

          {/* Meta details */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--border)", fontSize: "13px", color: "var(--text-light)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "750", color: "var(--text-dark)" }}>
              <img src={post.authorImage || "/IMG_6840.jpg"} alt={post.author} style={{ width: "26px", height: "26px", borderRadius: "50%", border: "1.5px solid var(--teal)", objectFit: "cover" }} />
              <span>{post.author}</span>
            </div>

            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Calendar style={{ width: "14px", height: "14px", color: "var(--teal)" }} />
              {post.publishDate}
            </span>

            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Clock style={{ width: "14px", height: "14px", color: "var(--teal)" }} />
              {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <section style={{ background: "var(--white)", paddingBottom: "48px" }}>
        <div className="container">
          <div style={{ aspectRatio: "21 / 9", borderRadius: "22px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 10px 30px rgba(52, 156, 169, 0.03)" }}>
            <img 
              src={post.image} 
              alt={post.title} 
              style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            />
          </div>
        </div>
      </section>

      {/* BODY CONTENT PANEL */}
      <section style={{ background: "var(--white)", paddingBottom: "88px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "start" }}>
          
          {/* Main Article column */}
          <div style={{ gridColumn: "span 3" }}>
            <div 
              className="prose-custom" 
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />

            {/* Mobile Sharing widget */}
            <div className="flex md:hidden items-center justify-center gap-6 border-t border-b border-slate-200/80 dark:border-slate-800/80 py-4 my-10 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-bold uppercase tracking-wider text-[10px] text-slate-400">Share:</span>
              <a href="#" className="hover:text-indigo-650 transition-colors"><TwitterIcon className="h-4.5 w-4.5" /></a>
              <a href="#" className="hover:text-indigo-650 transition-colors"><LinkedinIcon className="h-4.5 w-4.5" /></a>
              <button onClick={handleCopyLink} className="hover:text-indigo-650 transition-colors cursor-pointer">
                {copied ? <span className="text-emerald-500 font-bold">Copied!</span> : <Link2 className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          {/* Sidebar sharing box (Desktop only) */}
          <aside className="share-box hidden md:block" style={{ gridColumn: "span 1" }}>
            <div className="share-title">Share Article</div>
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="share-link"
              style={{ textDecoration: "none" }}
            >
              <TwitterIcon />
              Twitter / X
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&title=${encodeURIComponent(post.title)}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="share-link"
              style={{ textDecoration: "none" }}
            >
              <LinkedinIcon />
              LinkedIn
            </a>
            <button 
              onClick={handleCopyLink}
              className="share-link"
              style={{ border: "none", background: "none", width: "100%", cursor: "pointer" }}
            >
              <Link2 style={{ width: "16px", height: "16px" }} />
              {copied ? <span style={{ color: "var(--green)", fontWeight: "700" }}>Copied!</span> : "Copy Link"}
            </button>
          </aside>
        </div>
      </section>

      {/* RELATED POSTS SECTION */}
      <section className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", padding: "88px 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
            <Sparkles style={{ width: "20px", height: "20px", color: "var(--teal)" }} />
            <h2 style={{ fontFamily: "var(--font-head)", fontSize: "24px", fontWeight: "800", color: "var(--text-dark)", margin: 0 }}>
              Related Articles
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
            {relatedPosts.map((rPost) => (
              <article key={rPost.slug} className="blog-card">
                <div className="blog-card-image-wrapper">
                  <img 
                    src={rPost.image} 
                    alt={rPost.title} 
                    className="blog-card-image"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow" style={{ padding: "24px" }}>
                  <span className="blog-card-category-badge" style={{ position: "static", display: "inline-block", background: "var(--teal-light)", border: "none", boxShadow: "none", color: "var(--teal)", marginBottom: "8px", width: "fit-content" }}>
                    {rPost.category}
                  </span>

                  <h3 className="blog-card-title" style={{ fontSize: "16px", margin: "8px 0 16px" }}>
                    <Link href={`/blog/${rPost.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {rPost.title}
                    </Link>
                  </h3>

                  <Link 
                    href={`/blog/${rPost.slug}`}
                    className="blog-card-link"
                    style={{ textDecoration: "none", marginTop: "auto" }}
                  >
                    Read Article
                    <ArrowRight style={{ width: "12px", height: "12px", marginLeft: "4px" }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
