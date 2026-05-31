"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const text = `Hi Smart Web Lens, I'm interested in your services.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${message}`;
    window.open(`https://wa.me/918228985946?text=${encodeURIComponent(text)}`, "_blank");
    setIsModalOpen(false);
    e.target.reset();
  };

  // Structured Schema Injections for Brand Authority
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Smart Web Lens",
    "url": "https://www.smartweblens.xyz/",
    "logo": "https://www.smartweblens.xyz/swl2.PNG",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918228985946",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://wa.me/918228985946",
      "https://github.com/smartweblens"
    ]
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Smart Web Lens",
    "url": "https://www.smartweblens.xyz/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.smartweblens.xyz/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Smart Web Lens",
    "image": "https://www.smartweblens.xyz/swl2.PNG",
    "@id": "https://www.smartweblens.xyz/#localbusiness",
    "url": "https://www.smartweblens.xyz/",
    "telephone": "+918228985946",
    "priceRange": "INR",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fraser Road Area",
      "addressLocality": "Patna",
      "addressRegion": "Bihar",
      "postalCode": "800001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.6127,
      "longitude": 85.1376
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Patna" },
      { "@type": "AdministrativeArea", "name": "Bihar" }
    ]
  };

  const faqItems = [
    {
      q: "Which is the best website development company in Patna?",
      a: "Smart Web Lens is recognized as the best website development company in Patna, Bihar, offering high-performance custom website development, mobile app design, and software solutions under 5 business days."
    },
    {
      q: "What is the cost of website development services in Patna?",
      a: "Our corporate web layouts at Smart Web Lens start at an affordable price of ₹9,999. This covers responsive layout design, free domain registration, free premium hosting for 1 year, SSL certificate bindings, and standard local SEO setup."
    },
    {
      q: "Do you design custom Android and iOS mobile applications in Patna?",
      a: "Yes, Smart Web Lens is a premier mobile app development company in Patna, specializing in custom Android and iOS apps using Flutter and React Native toolkits."
    },
    {
      q: "How long does it take to deploy a custom business website?",
      a: "At Smart Web Lens, our signature delivery time is 5 days for standard business websites. Custom software development and complex enterprise e-commerce portals are scoped individually and deployed in stages."
    },
    {
      q: "Are your custom software development architectures secure?",
      a: "Yes, we implement modern cloud database architectures and state-of-the-art encrypted backend codes (Node.js, PostgreSQL) to ensure all proprietary business systems are safe."
    },
    {
      q: "Do you provide post-delivery website maintenance in Bihar?",
      a: "Yes, Smart Web Lens provides 1 month of free maintenance support, which covers daily database backups, minor feature changes, and vital weekly security updates."
    }
  ];

  return (
    <>
      {/* Structured Schema Injections for Brand Authority */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
      />

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            <img src="/swl2.PNG?v=3" alt="Smart Web Lens Logo" />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <a href="#services">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a href="#about">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                About
              </a>
            </li>
            <li>
              <a href="#team">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Team
              </a>
            </li>
            <li>
              <a href="#pricing">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                Pricing
              </a>
            </li>
            <li>
              <a href="/blog">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Blog
              </a>
            </li>
          </ul>
          <div className="nav-cta-group">
            <a href="tel:+918228985946" className="btn-call-nav" aria-label="Call us">📞</a>
            <button className="btn-contact-nav" onClick={() => setIsModalOpen(true)}>Contact Us</button>
            <button
              className={`hamburger ${isMobileNavOpen ? "open" : ""}`}
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`} id="mobileNav">
        <a href="#" onClick={() => setIsMobileNavOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMobileNavOpen(false)}>Services</a>
        <a href="#about" onClick={() => setIsMobileNavOpen(false)}>About Us</a>
        <a href="#team" onClick={() => setIsMobileNavOpen(false)}>Team</a>
        <a href="#pricing" onClick={() => setIsMobileNavOpen(false)}>Pricing</a>
        <a href="/blog" onClick={() => setIsMobileNavOpen(false)}>Blog</a>
        <a href="tel:+918228985946" onClick={() => setIsMobileNavOpen(false)}>📞 Call: +91 82289 85946</a>
      </div>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🔥 LIMITED TIME OFFER</div>
          <h1>Smart Web Lens | Website Ready in <span>5 Days</span><br />That Grows Your Business</h1>
          <p>Smart Web Lens builds fast, modern, and affordable websites and Android apps. Get your premium digital presence at an unbeatable price. Start your digital success journey with Smart Web Lens today.</p>
          <div className="hero-price-row">
            <span className="hero-old-price">₹12,999</span>
            <span className="hero-new-price">₹9,999</span>
          </div>
          <div className="hero-btns">
            <a href="tel:+918228985946" className="btn-primary">📞 Call to Get Started</a>
            <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>Contact Now 📨</button>
          </div>
          <div className="hero-trust">
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              10+ Businesses Launched
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              100% Money-Back Guarantee
            </div>
            <div className="trust-chip">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Start Tomorrow
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="section services" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">Complete Digital Solutions<br />for Your Business</h2>
            <p className="section-sub">From websites to apps to custom software — our experienced team helps your business thrive online.</p>
          </div>

          {/* REQUIREMENT 9: smart-web-lens-services.webp Collage Integration */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center", marginBottom: "56px" }}>
            <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
              <img 
                src="/smart-web-lens-services.webp" 
                alt="Sleek e-commerce, mobile app, and software services illustration by Smart Web Lens" 
                title="Smart Web Lens Services Ecosystem"
                style={{ width: "100%", height: "auto", display: "block" }} 
              />
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-head)", fontSize: "24px", color: "var(--text-dark)", marginBottom: "16px", fontWeight: "800" }}>
                Why Patna Businesses Choose Smart Web Lens
              </h3>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.75", marginBottom: "16px" }}>
                As the leading <strong>Website Development Company in Patna</strong>, <strong>Smart Web Lens</strong> bridges the gap between premium design aesthetics and robust cloud engineering. We specialize in building responsive architectures tailored for high conversion rates.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.75" }}>
                Whether you need a custom corporate platform or an interactive e-commerce store with unified UPI gateway systems, our experienced local developers deliver top-tier platforms. We write clean code using React, Next.js, and secure backend servers (PostgreSQL, MongoDB).
              </p>
            </div>
          </div>

          <div className="services-grid">
            {/* 1. Website Development */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Website Development</h3>
              <p>Website Development by Smart Web Lens features clean Next.js architectures, secure domains, and lightning-fast loading speeds designed to double corporate lead generation.</p>
              <Link href="/website-development-company-patna" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* 2. Mobile App Development */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3>Mobile App Development</h3>
              <p>Mobile App Development by Smart Web Lens provides native Android APK packages and cross-platform Flutter outputs ready for instant Google Play Store registration.</p>
              <Link href="/mobile-app-development-company-patna" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* 3. Web Design */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v8M8 12h8" />
                </svg>
              </div>
              <h3>Web Design</h3>
              <p>Web Design by Smart Web Lens utilizes Sora layouts, curated HSL tailored colors, smooth glassmorphism panels, and elegant transitions that capture users instantly.</p>
              <Link href="/web-design-company-patna" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* 4. Ecommerce Development */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
                </svg>
              </div>
              <h3>Ecommerce Development</h3>
              <p>Ecommerce Development by Smart Web Lens drives physical retailers online with secure UPI payment options, cash on delivery modules, and instant notifications.</p>
              <Link href="/ecommerce-website-development-company-patna" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* 5. Software Development */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Software Development</h3>
              <p>Software Development by Smart Web Lens automates business manual logs, custom CRM tools, hospital bookings, and secure student management portal layers.</p>
              <Link href="/software-development-company-patna" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* 6. Domain, Hosting & Support */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>24/7 Premium Support</h3>
              <p>We configure premium domain structures, high-uptime servers, and provide 24/7 WhatsApp developer communications so you are never left in the dark.</p>
              <span className="service-link" style={{ cursor: "default", color: "var(--text-light)" }}>Included in all plans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ EVERYTHING INCLUDED ═══════════ */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Everything Included</div>
            <h2 className="section-title">What You Get in the ₹9,999 Package</h2>
            <p className="section-sub">Every feature listed below is included — no hidden charges, no surprises.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrap">🌐</div>
              <h4>5 Professional Pages</h4>
              <p>Home, About, Services, Gallery, Contact — fully customized for your brand.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">📱</div>
              <h4>Android App (₹5,000 value)</h4>
              <p>Your business installed on customers&apos; phones. Boost repeat visits by 3×.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">🌍</div>
              <h4>Free Domain + Hosting</h4>
              <p>www.yourbusiness.com — 1 year FREE, 99.9% uptime guaranteed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">⚡</div>
              <h4>Super Fast Loading (&lt;2 sec)</h4>
              <p>Google loves fast sites — rank higher and convert more customers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">🔒</div>
              <h4>Free SSL Security</h4>
              <p>Secure padlock on your site — build trust and protect customer data.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrap">📧</div>
              <h4>5 Business Emails</h4>
              <p>info@yourbusiness.com — look professional and trustworthy from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT SMART WEB LENS SECTION (Expanded & Rich) ═══════════ */}
      <section className="section" id="about" style={{ background: "var(--bg-light)", padding: "88px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "48px", alignItems: "center" }}>
            <div>
              <div className="section-tag">About Smart Web Lens</div>
              <h2 style={{ fontFamily: "var(--font-head)", fontSize: "clamp(26px, 4vw, 36px)", color: "var(--text-dark)", fontWeight: "800", marginBottom: "20px", lineHeight: "1.2" }}>
                Who We Are & What We Do
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.8", marginBottom: "20px" }}>
                <strong>Smart Web Lens</strong> is proud to act as the primary technological cornerstone for forward-thinking brands in Eastern India. Our team of experienced local engineers work out of Fraser Road and Bailey Road, ensuring we deliver robust web design and applications directly to the business hubs of Patna, Bihar.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: "1.8", marginBottom: "24px" }}>
                We believe that a professional website should generate continuous revenue, not just look static. That is why <strong>Smart Web Lens</strong> integrates frictionless WhatsApp call-to-actions, unified UPI local payment options, and secure database connections to turn cold web traffic into warm customer leads.
              </p>
              
              {/* REQUIREMENT 8: Internal Linking Strategy blueprint */}
              <div style={{ padding: "16px 20px", background: "var(--white)", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "24px" }}>
                <h5 style={{ fontFamily: "var(--font-head)", fontSize: "14px", fontWeight: "700", color: "var(--text-dark)", margin: "0 0 8px 0" }}>🔗 Contextual Search Authority Links:</h5>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", color: "var(--text-mid)" }}>
                  <li style={{ marginBottom: "6px" }}><Link href="/website-development-company-patna" style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "none" }}>Website Development Company in Patna</Link></li>
                  <li style={{ marginBottom: "6px" }}><Link href="/mobile-app-development-company-patna" style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "none" }}>Mobile App Development Company in Patna</Link></li>
                  <li style={{ marginBottom: "6px" }}><Link href="/web-design-company-patna" style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "none" }}>Web Design Company in Patna</Link></li>
                  <li><Link href="/software-development-company-patna" style={{ color: "var(--teal)", fontWeight: "600", textDecoration: "none" }}>Software Development Company in Patna</Link></li>
                </ul>
              </div>

              <button className="btn-cta-call" onClick={() => setIsModalOpen(true)} style={{ border: "none", cursor: "pointer" }}>
                Get Free Consultation
              </button>
            </div>

            {/* REQUIREMENT 9: smart-web-lens-team.webp Image SEO */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div style={{ borderRadius: "22px", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "var(--shadow)" }}>
                <img 
                  src="/smart-web-lens-team.webp" 
                  alt="Professional web designers and software engineers collaborating at Smart Web Lens office in Patna Bihar" 
                  title="Smart Web Lens Tech Team"
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ background: "var(--white)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", textAlign: "center" }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "24px", color: "var(--teal)" }}>10+</h3>
                  <p style={{ margin: 0, fontSize: "12px", color: "var(--text-mid)" }}>Websites Delivered</p>
                </div>
                <div style={{ background: "var(--white)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", textAlign: "center" }}>
                  <h3 style={{ margin: "0 0 4px 0", fontSize: "24px", color: "var(--teal)" }}>4.9★</h3>
                  <p style={{ margin: 0, fontSize: "12px", color: "var(--text-mid)" }}>Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ INDUSTRIES ═══════════ */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Industries We Serve</div>
            <h2 className="section-title">We&apos;ve Worked Across Multiple Industries</h2>
          </div>
          <div className="industries-grid">
            <div className="industry-chip"><span>🏠</span><span>Real Estate</span></div>
            <div className="industry-chip"><span>🎓</span><span>Education</span></div>
            <div className="industry-chip"><span>🏥</span><span>Healthcare</span></div>
            <div className="industry-chip"><span>🏨</span><span>Hospitality</span></div>
            <div className="industry-chip"><span>💰</span><span>Finance</span></div>
            <div className="industry-chip"><span>🚗</span><span>Transport</span></div>
            <div className="industry-chip"><span>🛍️</span><span>eCommerce</span></div>
            <div className="industry-chip"><span>🎉</span><span>Events</span></div>
            <div className="industry-chip"><span>🍽️</span><span>Food & Dining</span></div>
            <div className="industry-chip"><span>🛠️</span><span>Services</span></div>
          </div>
        </div>
      </section>

      {/* ═══════════ TECH STACK ═══════════ */}
      <section className="section tech-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Technology Stack</div>
            <h2 className="section-title">Powered by Modern Tech</h2>
            <p className="section-sub">We use cutting-edge technologies to build scalable, fast, and maintainable websites and apps.</p>
          </div>
          <div className="tech-row">
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />React</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />Node.js</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />MongoDB</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />PHP</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />MySQL</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />Tailwind</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="dark:invert" />Next.js</div>
            <div className="tech-chip"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" alt="Laravel" />Laravel</div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Simple Pricing</div>
            <h2 className="section-title">Simple Packages — Made for Growth</h2>
            <p className="section-sub">Clear pricing, no hidden fees. Call us to get started instantly.</p>
          </div>

          <div className="pricing-grid">
            {/* Basic */}
            <div className="pricing-card">
              <div className="plan-name">Basic Plan</div>
              <div className="plan-price"><s>₹12,999</s> ₹9,999</div>
              <div className="plan-desc">Perfect for new businesses going online fast.</div>
              <ul className="plan-features">
                <li>Android App (basic)</li>
                <li>Unlimited pages</li>
                <li>Responsive (mobile-friendly)</li>
                <li>Free Domain & Hosting (1 year)</li>
                <li>SSL Certificate</li>
                <li>Payment Gateway</li>
                <li>Basic SEO Setup</li>
                <li>24/7 Support</li>
              </ul>
              <a href="tel:+918228985946" className="btn-plan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Start
              </a>
            </div>

            {/* Standard (featured) */}
            <div className="pricing-card featured">
              <div className="featured-badge">⭐ Most Popular — 3 Slots Left</div>
              <div className="plan-name">Standard Plan</div>
              <div className="plan-price"><s>₹15,999</s> ₹14,999</div>
              <div className="plan-desc">Built for growing businesses and online stores.</div>
              <ul className="plan-features">
                <li>Advanced Android App</li>
                <li>Unlimited pages</li>
                <li>Speed & SEO optimization</li>
                <li>Free Domain & Hosting (1 year)</li>
                <li>Advanced Security</li>
                <li>Contact Forms & Analytics</li>
                <li>Social Media Integration</li>
                <li>COD Order Option</li>
                <li>Payment Gateway</li>
                <li>SSL Certificate</li>
                <li>24/7 Support</li>
              </ul>
              <a href="tel:+918228985946" className="btn-plan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Start
              </a>
            </div>

            {/* Premium */}
            <div className="pricing-card">
              <div className="plan-name">Premium Plan</div>
              <div className="plan-price"><s>₹34,999+</s> ₹29,999+</div>
              <div className="plan-desc">For businesses needing custom features and scale.</div>
              <ul className="plan-features">
                <li>Advanced Android App</li>
                <li>Unlimited pages</li>
                <li>Ecommerce / Custom features</li>
                <li>Free Domain & Hosting (1 year)</li>
                <li>COD Order Option</li>
                <li>Advanced Security</li>
                <li>Multi-Vendor Listing</li>
                <li>Advanced Analytics Dashboard</li>
                <li>Payment Gateway</li>
                <li>SSL Certificate</li>
                <li>24/7 Support</li>
              </ul>
              <a href="tel:+918228985946" className="btn-plan">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call to Start
              </a>
            </div>
          </div>

          <div className="custom-box">
            <div>
              <h4>Need Custom Requirements?</h4>
              <p>Tailored web + Android app solutions · API integrations · Dashboards · Unique features<br />We scope it fast over a quick call.</p>
            </div>
            <a href="tel:+918228985946" className="btn-plan" style={{ width: "auto", padding: "14px 30px", whiteSpace: "nowrap" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call for Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ MEET THE TEAM ═══════════ */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Meet the Team</div>
            <h2 className="section-title">Meet Our Engineers</h2>
            <p className="section-sub">Our passionate team works together to bring creative ideas to life and deliver meaningful results.</p>
          </div>
          <div className="team-grid">
            {/* Vivek Kumar */}
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img src="/IMG_6840.jpg" alt="Vivek Kumar" className="team-avatar" />
              </div>
              <h3>Vivek Kumar</h3>
              <p>Founder and CEO</p>
            </div>

            {/* Ayush Kumar */}
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img src="/ayush.jpg" alt="Ayush Kumar" className="team-avatar" />
              </div>
              <h3>Ayush Kumar</h3>
              <p>Product Co-Owner</p>
            </div>

            {/* Rahul Gop */}
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img src="/rahulgop.jpg?v=3" alt="Rahul Gop" className="team-avatar" />
              </div>
              <h3>Rahul Gop</h3>
              <p>Product Co-Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS SECTION (Requirement 6) ═══════════ */}
      <section className="section testimonials" id="testimonials" style={{ background: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "88px 0" }}>
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">Client Reviews</div>
            <h2 className="section-title">What Clients Say About Smart Web Lens</h2>
            <p className="section-sub">See how we help businesses in Patna, Bihar, and across India skyrocket their digital revenue.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "32px", marginTop: "40px" }}>
            <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", padding: "30px", borderRadius: "16px", boxShadow: "var(--shadow)", fontStyle: "italic", position: "relative" }}>
              <span style={{ fontSize: "64px", color: "var(--teal)", opacity: "0.15", position: "absolute", top: "10px", left: "20px", fontFamily: "Georgia, serif" }}>“</span>
              <p style={{ margin: "20px 0 16px 0", color: "var(--text-mid)", lineHeight: "1.8", zIndex: 1, position: "relative" }}>
                "Smart Web Lens built a highly responsive website and dynamic Android application for my school in Patna Boring Road. Their express 5-day delivery was flawless, and our online admission inquiries grew 3× in a few months. Easily the best website development company in Patna!"
              </p>
              <h5 style={{ margin: 0, fontStyle: "normal", fontWeight: "800", color: "var(--text-dark)", textAlign: "right" }}>
                - Anand Kumar, School Principal
              </h5>
            </div>

            <div style={{ background: "var(--bg-light)", border: "1px solid var(--border)", padding: "30px", borderRadius: "16px", boxShadow: "var(--shadow)", fontStyle: "italic", position: "relative" }}>
              <span style={{ fontSize: "64px", color: "var(--teal)", opacity: "0.15", position: "absolute", top: "10px", left: "20px", fontFamily: "Georgia, serif" }}>“</span>
              <p style={{ margin: "20px 0 16px 0", color: "var(--text-mid)", lineHeight: "1.8", zIndex: 1, position: "relative" }}>
                "Outstanding local support from Smart Web Lens! They designed a secure custom billing database and CRM software for our retail pharmacy clinic on Bailey Road. Database setup was incredibly smooth, fast, and extremely safe."
              </p>
              <h5 style={{ margin: 0, fontStyle: "normal", fontWeight: "800", color: "var(--text-dark)", textAlign: "right" }}>
                - Ritesh Prasad, Pharmacy Director
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-header center">
            <div className="section-tag">FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-sub">Still have questions? Call us — we&apos;ll answer in under 2 minutes.</p>
          </div>
          <div className="faq-list">
            {faqItems.map((item, idx) => (
              <div key={idx} className={`faq-item ${activeFaqIndex === idx ? "open" : ""}`}>
                <div className="faq-q" onClick={() => setActiveFaqIndex(activeFaqIndex === idx ? null : idx)}>
                  {item.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}

            <div style={{ textAlign: "center", marginTop: "32px" }}>
              <a href="tel:+918228985946" className="btn-plan" style={{ width: "auto", padding: "14px 36px" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now for Quick Answers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Launch Your Business Online?</h2>
          <p>Get a free digital business consultation from Smart Web Lens. Start in 24 hours. Pay 50% only after you love it.</p>
          <div className="cta-btns">
            <a href="tel:+918228985946" className="btn-cta-call">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Now — Speak to a Developer
            </a>
            <button className="btn-cta-contact" onClick={() => setIsModalOpen(true)}>
              Contact Form 📨
            </button>
          </div>
          <p style={{ color: "rgba(255,255,255,.5)", fontSize: "13px", marginTop: "20px" }}>Safe: your contact number is never shared with third parties.</p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/swl2.PNG?v=3" alt="Smart Web Lens Logo" style={{ height: "44px", width: "auto" }} />
              <p>Smart Web Lens builds fast, modern, and highly affordable websites and Android apps. Get your business online in just 5 days.</p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><Link href="/website-development-company-patna">Website Development</Link></li>
                <li><Link href="/mobile-app-development-company-patna">Mobile App Development</Link></li>
                <li><Link href="/web-design-company-patna">Web Design</Link></li>
                <li><Link href="/software-development-company-patna">Software Development</Link></li>
              </ul>
            </div>
            <div className="footer-col footer-contact">
              <h5>Contact Smart Web Lens</h5>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <a href="tel:+918228985946">+91 82289 85946</a>
                    <a href="tel:+918084326917">+91 80843 26917</a>
                  </div>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:info@smartweblens.xyz">info@smartweblens.xyz</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Patna, Bihar, India
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Smart Web Lens. All rights reserved.</span>
            <div className="social-links">
              {/* WhatsApp */}
              <a href="https://wa.me/918228985946" className="social-link" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════ FLOATING WHATSAPP ═══════════ */}
      <a href="https://wa.me/918228985946" className="floating-wa" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ═══════════ CONTACT MODAL ═══════════ */}
      <div
        className={`modal-overlay ${isModalOpen ? "open" : ""}`}
        id="contactModal"
        onClick={(e) => {
          if (e.target.id === "contactModal") setIsModalOpen(false);
        }}
      >
        <div className="modal-box">
          <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
          <div className="modal-tag">CONTACT</div>
          <h2>Get In Touch With Us</h2>
          <p>Fill in the form to speak with a Smart Web Lens specialist. We&apos;ll reach out within minutes.</p>
          <form id="whatsappForm" onSubmit={handleFormSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Reason for contacting" required />
              </div>
              <div className="form-group span2">
                <label>Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Tell us about your project..." required></textarea>
              </div>
            </div>
            <button type="submit" className="btn-submit">
              Send via WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
