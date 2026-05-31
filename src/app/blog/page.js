"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, FilterX } from "lucide-react";
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
    <>
      {/* HERO SECTION */}
      <section className="blog-hero">
        <div className="container">
          <div className="section-tag">Explore Our Blog</div>
          <h1>SmartWebLens Blog</h1>
          <p>Insights, trends, and expert tips on web development, app creation, digital strategy, and growing your business online — delivered fast, just like our projects.</p>
          <div className="hero-btns" style={{ display: "flex", justifyContent: "center", gap: "16px" }}>
            <Link href="/contact" className="btn-cta-call" style={{ textDecoration: "none" }}>
              Start Your Project
            </Link>
            <a href="#newsletter" className="btn-cta-contact" style={{ textDecoration: "none" }}>
              Subscribe
            </a>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="section bg-light" style={{ padding: "48px 0 0", background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
            
            {/* Categories chips list */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-chip ${selectedCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search input box */}
            <div style={{ position: "relative", width: "100%", maxWidth: "340px" }}>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search"
              />
              <Search style={{ position: "absolute", left: "14px", top: "15px", width: "16px", height: "16px", color: "var(--text-light)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* BLOG CARD GRID */}
      <section className="section" style={{ background: "var(--bg)", paddingTop: "40px", paddingBottom: "88px" }}>
        <div className="container">
          {filteredPosts.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
              {filteredPosts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-image-wrapper">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="blog-card-image"
                      loading="lazy"
                    />
                    <span className="blog-card-category-badge">
                      {post.category}
                    </span>
                  </div>

                  <div className="blog-card-content">
                    {/* Meta details */}
                    <div className="blog-card-meta">
                      <span>
                        <Calendar style={{ width: "13px", height: "13px" }} />
                        {post.publishDate}
                      </span>
                      <span>
                        <Clock style={{ width: "13px", height: "13px" }} />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="blog-card-title">
                      <Link href={`/blog/${post.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="blog-card-excerpt">
                      {post.excerpt}
                    </p>

                    {/* Footer Row */}
                    <div className="blog-card-footer">
                      <div className="blog-card-author">
                        <img 
                          src={post.authorImage || "/IMG_6840.jpg"} 
                          alt={post.author} 
                          className="blog-card-author-avatar" 
                        />
                        <span>{post.author}</span>
                      </div>

                      <Link 
                        href={`/blog/${post.slug}`}
                        className="blog-card-link"
                        style={{ textDecoration: "none" }}
                      >
                        Read Post
                        <ArrowRight style={{ width: "14px", height: "14px", marginLeft: "4px" }} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* EMPTY STATE VIEW */
            <div style={{ maxWidth: "480px", margin: "48px auto", textAlign: "center" }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "22px", background: "var(--teal-light)", color: "var(--teal)", display: "flex", alignItems: "center", justifySpace: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <FilterX style={{ width: "32px", height: "32px" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "20px", fontWeight: "700", color: "var(--text-dark)", marginBottom: "8px" }}>
                No Articles Found
              </h3>
              <p style={{ fontSize: "14px", color: "var(--text-mid)", lineHeight: "1.6", marginBottom: "24px" }}>
                No blog posts available matching your category or search parameters. Check back soon or subscribe for instant updates.
              </p>
              <button 
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
                className="btn-plan"
                style={{ width: "auto", padding: "12px 30px", margin: "0 auto", cursor: "pointer" }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER SIGNUP SECTION (CTA Banner) */}
      <section id="newsletter" className="cta-banner">
        <div className="container">
          <h2>Subscribe to SmartWebLens Newsletter</h2>
          <p>Get the latest tech trends, website design metrics, SEO blueprints, and business development hacks delivered direct to your inbox weekly.</p>

          {subscribed ? (
            <div style={{ background: "rgba(255, 255, 255, 0.12)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "16px 36px", borderRadius: "50px", display: "inline-block", fontWeight: "700", color: "var(--white)" }}>
              🎉 Thanks for subscribing! Check your email soon for updates.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "row", gap: "12px", maxWidth: "540px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ flexGrow: 1, padding: "14px 24px", borderRadius: "50px", border: "1px solid rgba(255, 255, 255, 0.25)", background: "rgba(255, 255, 255, 0.1)", color: "var(--white)", fontSize: "14px", outline: "none", minWidth: "260px" }}
                required
              />
              <button
                type="submit"
                className="btn-cta-call"
                style={{ border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
              >
                Join Newsletter
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
