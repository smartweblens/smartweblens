"use client";

import { useState, useEffect, useMemo } from "react";
import { blogPosts } from "./postsData";

export default function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Sync dark mode class on document element
  useEffect(() => {
    // Check local storage or system preference on load
    const isDark = localStorage.getItem("blog-theme") === "dark" || 
      (!localStorage.getItem("blog-theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("blog-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("blog-theme", "light");
    }
  };

  const categories = [
    "All",
    "Web Development",
    "App Development",
    "SEO",
    "Design Tips",
    "Case Studies",
    "Business Growth"
  ];

  // Filter blog posts based on search query and category
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSuccess(true);
    setEmail("");
    setTimeout(() => setNewsletterSuccess(false), 6000);
  };

  // Schema.org structured data for Organization & Blog listing
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "SmartWebLens Blog",
    "url": "https://www.smartweblens.xyz/blog",
    "description": "Insights, trends, and expert tips on web development, app creation, digital strategy, and growing your business online.",
    "publisher": {
      "@type": "Organization",
      "name": "SmartWebLens",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smartweblens.xyz/swl2.PNG"
      }
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "url": `https://www.smartweblens.xyz/blog/${post.slug}`,
      "datePublished": "2026-05-31",
      "headline": post.title,
      "description": post.metaDescription
    }))
  };

  return (
    <>
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      {/* HEADER NAVIGATION */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <img 
              src="/swl2.PNG" 
              alt="SmartWebLens Logo" 
              className="h-9 w-auto dark:brightness-110" 
            />
            <span className="font-sans font-extrabold text-lg text-slate-800 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              SmartWebLens<span className="text-indigo-600 dark:text-indigo-400">.blog</span>
            </span>
          </a>

          <div className="flex items-center gap-4">
            <a 
              href="/"
              className="text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              Main Site 🌐
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>

            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 active:scale-95 transition-all shadow-md hover:shadow-indigo-500/20"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 bg-white dark:bg-slate-900 transition-colors duration-300">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-radial from-indigo-500/8 to-transparent rounded-full pointer-events-none dark:from-indigo-500/5"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-radial from-teal-500/5 to-transparent rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 dark:bg-indigo-950/50 dark:border-indigo-900 dark:text-indigo-400 mb-6">
            ✨ INSIGHTS, TRENDS & PROCESS
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-tight tracking-tight mb-6">
            SmartWebLens <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent dark:from-indigo-400 dark:to-indigo-300">Blog</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-350 leading-relaxed mb-8">
            Insights, trends, and expert tips on web development, app creation, digital strategy, and growing your business online — delivered fast, just like our projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="w-full relative">
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all dark:border-slate-800 dark:bg-slate-900/50 dark:text-white dark:focus:bg-slate-900"
              />
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">🔍</span>
            </div>
            <a 
              href="/#contact"
              className="w-full sm:w-auto shrink-0 px-6 py-3 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 active:scale-95 transition-all shadow-md hover:shadow-indigo-500/20 text-center"
            >
              Start Your Project →
            </a>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="bg-slate-50 border-y border-slate-200/60 py-4 transition-colors duration-300 dark:bg-slate-900/50 dark:border-slate-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center overflow-x-auto no-scrollbar gap-2 py-1 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap active:scale-95 transition-all ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/10"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-350 dark:bg-slate-850 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG POSTS GRID */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200/80 overflow-hidden blog-card-transition hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800/80 dark:hover:border-slate-700"
              >
                {/* Image Placeholder with high-end matching gradients */}
                <a href={`/blog/${post.slug}`} className="block aspect-video overflow-hidden relative">
                  <div className={`w-full h-full bg-gradient-to-br ${post.imageColor} flex items-center justify-center text-5xl relative group-hover:scale-105 transition-transform duration-500`}>
                    <span className="relative z-10 drop-shadow-md">{post.imageEmoji}</span>
                    {/* Visual geometric overlay grid */}
                    <div className="absolute inset-0 bg-white/[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  </div>
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-slate-900/60 backdrop-blur-md uppercase tracking-wider">
                    {post.category}
                  </span>
                </a>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                    <span>{post.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                    <span>{post.readTime} read</span>
                  </div>

                  <h3 className="font-sans font-bold text-xl text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 mb-3 line-clamp-2">
                    <a href={`/blog/${post.slug}`}>
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-350 leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {post.metaDescription}
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <a 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Read Full Article 
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* EMPTY STATE DESIGN */
          <div className="max-w-md mx-auto text-center py-16 px-4">
            <div className="text-6xl mb-6">🏜️</div>
            <h3 className="font-sans font-bold text-2xl text-slate-900 dark:text-white mb-3">No articles found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              No blog posts available yet matching your search or category choice. Check back soon or subscribe to our updates.
            </p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="px-6 py-2.5 text-sm font-bold text-indigo-600 bg-indigo-50 border border-indigo-150 rounded-full hover:bg-indigo-100 transition-all dark:bg-indigo-950/30 dark:border-indigo-900 dark:text-indigo-400"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>

      {/* NEWSLETTER SIGNUP SECTION */}
      <section className="bg-slate-100 border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 dark:bg-slate-900/60 dark:border-slate-850">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-indigo-850">
          <div className="absolute top-[-20%] left-[-20%] w-[300px] h-[300px] bg-radial from-indigo-500/10 to-transparent rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest block mb-3">
              📩 Stay Informed
            </span>
            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-4">
              Get Growth Advice in Your Inbox
            </h2>
            <p className="text-sm sm:text-base text-indigo-200/80 leading-relaxed mb-8">
              Join small business owners and startup founders who receive our fast web blueprints, SEO optimizations, and digital scaling tips weekly.
            </p>

            {newsletterSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl max-w-md mx-auto text-emerald-400 font-semibold animate-pulse">
                🎉 Awesome! Check your inbox soon to confirm your subscription.
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your work email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-full bg-white/10 border border-indigo-800 text-white placeholder-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/20 transition-all text-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 text-sm font-bold text-indigo-900 bg-white rounded-full hover:bg-slate-100 active:scale-95 transition-all shrink-0"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-center text-xs text-slate-500 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
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
