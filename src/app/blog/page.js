"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, Mail, Sparkles, FilterX } from "lucide-react";
import { blogPosts } from "../../data/blog-posts";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Categories list
  const categories = [
    "All",
    "Web Development",
    "App Development",
    "SEO",
    "Design Tips",
    "Case Studies",
    "Business Growth"
  ];

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="py-12 md:py-20 transition-all duration-300">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 text-center md:text-left">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100/50 dark:border-indigo-900/50 mb-5">
              <Sparkles className="h-3.5 w-3.5" />
              Explore Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              SmartWebLens <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-blue-400">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              Insights, trends, and expert tips on web development, app creation, digital strategy, and growing your business online — delivered fast, just like our projects.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/contact" 
                className="px-7 py-3.5 rounded-full text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-600/25 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5"
              >
                Start Your Project
              </Link>
              <a 
                href="#newsletter" 
                className="px-7 py-3.5 rounded-full text-sm font-bold bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-all transform hover:-translate-y-0.5"
              >
                Subscribe
              </a>
            </div>
          </div>
          
          {/* Decorative Right Panel */}
          <div className="md:col-span-2 hidden md:block">
            <div className="relative p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-xl shadow-indigo-950/5">
              <div className="absolute -top-3 -right-3 h-12 w-12 rounded-2xl bg-indigo-600/10 dark:bg-indigo-400/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <Sparkles className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-850 dark:text-slate-100 mb-2">Build Your Digital Vision</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed mb-4">
                We craft professional web assets and Play Store apps in Patna & all districts of Bihar. Connect directly with our development team.
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  10+
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Active Businesses Scaled Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80 dark:border-slate-800/80">
          
          {/* Categories slider */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 lg:pb-0 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 border border-slate-200 dark:border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative max-w-sm w-full">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl text-xs font-medium bg-white dark:bg-slate-900 text-slate-850 dark:text-slate-100 placeholder-slate-400 border border-slate-250 dark:border-slate-800 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 focus:ring-3 focus:ring-indigo-600/10 dark:focus:ring-indigo-500/10 transition-all"
            />
            <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-slate-400" />
          </div>
        </div>
      </section>

      {/* BLOG CARD GRID */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.slug}
                className="group relative flex flex-col bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-indigo-950/5 hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/95 dark:bg-slate-900/95 text-indigo-600 dark:text-indigo-400 shadow-sm border border-slate-100/50 dark:border-slate-800/50">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[10px] font-semibold text-slate-400 dark:text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.publishDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-850 dark:text-white line-clamp-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2.5">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  {/* Bottom Line */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-indigo-600 dark:text-indigo-400 overflow-hidden">
                        <span className="text-[10px]">{post.author.split(' ')[0][0]}</span>
                      </div>
                      <span className="text-xs font-bold text-slate-650 dark:text-slate-350">{post.author}</span>
                    </div>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group/link"
                    >
                      Read Post
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* EMPTY STATE VIEW */
          <div className="max-w-md mx-auto text-center py-16 px-4">
            <div className="h-16 w-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-6 border border-indigo-100/50 dark:border-indigo-900/50">
              <FilterX className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-850 dark:text-white mb-2">No Articles Found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              No blog posts available yet matching your filter or query. Check back soon or subscribe for instant updates.
            </p>
            <button 
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
              className="px-6 py-2.5 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* NEWSLETTER SIGNUP SECTION */}
      <section id="newsletter" className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-950 text-white p-8 md:p-12 shadow-xl shadow-indigo-950/15 border border-indigo-800">
          <div className="absolute top-0 right-0 h-40 w-40 bg-radial-gradient from-indigo-500/20 to-transparent pointer-events-none rounded-full" />
          
          <div className="relative max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-2.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-4">
              <Mail className="h-5 w-5 text-indigo-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Subscribe to SmartWebLens Newsletter
            </h2>
            <p className="text-sm text-indigo-200/80 leading-relaxed mb-8 max-w-lg mx-auto">
              Get the latest tech trends, website design metrics, SEO blueprints, and business development hacks delivered direct to your inbox weekly.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold">
                🎉 Thanks for subscribing! Check your email soon for updates.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow px-5 py-3 rounded-xl text-xs font-semibold bg-white/10 placeholder-indigo-300 text-white border border-indigo-700/50 focus:outline-none focus:border-indigo-400 focus:bg-white/15 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl text-xs font-bold bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition-all cursor-pointer whitespace-nowrap"
                >
                  Join Newsletter
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
