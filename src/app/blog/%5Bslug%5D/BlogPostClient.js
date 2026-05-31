"use client";

import { useState, useEffect } from "react";

export default function BlogPostClient({ title, slug }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Read progress calculations
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync dark mode class on document element
  useEffect(() => {
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

  const shareUrl = typeof window !== "undefined" ? window.location.href : `https://www.smartweblens.xyz/blog/${slug}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      {/* Fixed Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50 dark:bg-slate-800">
        <div 
          className="h-full bg-indigo-600 transition-all duration-75 dark:bg-indigo-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mini Interactive Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-1 z-40 transition-colors duration-300 dark:bg-slate-900/80 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="/blog" className="flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">
            <span>←</span> Back to Blog
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
            <a
              href="/#contact"
              className="text-xs font-bold text-white bg-indigo-600 px-3.5 py-1.5 rounded-full hover:bg-indigo-700 transition-colors active:scale-95 shadow-md hover:shadow-indigo-500/10"
            >
              Start Project
            </a>
          </div>
        </div>
      </header>

      {/* Floating social share section */}
      <div className="flex items-center flex-wrap gap-2 py-4 border-y border-slate-200 dark:border-slate-800 my-8">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mr-2">
          Share this article:
        </span>
        
        {/* Twitter / X */}
        <a 
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-850"
        >
          🐦 Twitter
        </a>

        {/* LinkedIn */}
        <a 
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-850"
        >
          💼 LinkedIn
        </a>

        {/* Copy Link */}
        <button 
          onClick={copyToClipboard}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-850"
        >
          {copied ? "✅ Copied!" : "🔗 Copy Link"}
        </button>
      </div>
    </>
  );
}
