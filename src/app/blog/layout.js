"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, ArrowUpRight, ArrowLeft } from "lucide-react";
import "./blog.css";

export default function BlogLayout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check local storage or default to light
    const savedTheme = localStorage.getItem("swl-blog-theme");
    if (savedTheme === "dark") {
      setIsDark(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("swl-blog-theme", newTheme ? "dark" : "light");
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased">
        
        {/* HEADER NAVIGATION */}
        <header 
          className={`sticky top-0 z-50 transition-all duration-300 border-b ${
            scrolled 
              ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-3 border-slate-200/80 dark:border-slate-800/80 shadow-sm" 
              : "bg-white dark:bg-slate-950 py-5 border-slate-200 dark:border-slate-850"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <img 
                src="/swl2.PNG" 
                alt="SmartWebLens" 
                className="h-9 w-auto object-contain transition-transform group-hover:scale-102" 
              />
              <span className="text-xs uppercase tracking-widest font-bold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-100/50 dark:border-indigo-900/50">
                Blog
              </span>
            </Link>

            {/* Navigation links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-indigo-600 dark:text-indigo-400">
                Blog Index
              </Link>
              <a href="/#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Services
              </a>
              <a href="/#pricing" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                Pricing
              </a>
              <a href="/#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                FAQ
              </a>
            </nav>

            {/* CTAs & Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme} 
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800 transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="h-4.5 w-4.5 text-yellow-500" /> : <Moon className="h-4.5 w-4.5 text-indigo-600" />}
              </button>

              {/* Start Project Button */}
              <Link 
                href="/contact" 
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Start Your Project
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN BODY CONTENT */}
        <main className="flex-grow">
          {children}
        </main>

        {/* DEDICATED BLOG FOOTER */}
        <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/60 py-12 transition-all">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand Description */}
              <div>
                <img src="/swl2.PNG" alt="SmartWebLens" className="h-9 w-auto mb-4" />
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
                  We build highly scalable websites and native Android apps optimized for local search, UPI operations, and rapid deployment in Bihar and across India.
                </p>
              </div>

              {/* Navigation Columns */}
              <div className="flex md:justify-center gap-16 col-span-2">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-850 dark:text-slate-100 mb-4">
                    Company
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
                    <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link></li>
                    <li><Link href="/blog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Blog</Link></li>
                    <li><Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Form</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-850 dark:text-slate-100 mb-4">
                    Expertise
                  </h4>
                  <ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400">
                    <li><a href="/#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Website Development</a></li>
                    <li><a href="/#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Android App Dev</a></li>
                    <li><a href="/#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Local SEO & Growth</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-200 dark:border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
              <span>© 2026 SmartWebLens. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="https://wa.me/918228985946" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">WhatsApp support</a>
                <a href="mailto:info@smartweblens.xyz" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">info@smartweblens.xyz</a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
