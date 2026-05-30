"use client";

import { useState } from "react";

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
    const text = `Hi SmartWebLens, I'm interested in your services.\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Subject:* ${subject}\n*Message:* ${message}`;
    window.open(`https://wa.me/918228985946?text=${encodeURIComponent(text)}`, "_blank");
    setIsModalOpen(false);
    e.target.reset();
  };

  const faqItems = [
    {
      q: "How fast can you deliver?",
      a: "We deliver basic websites in as little as 5 business days after receiving your content and confirmation. For ecommerce or custom projects, timelines vary — call us to get an exact estimate for your project."
    },
    {
      q: "Do you provide hosting and domain?",
      a: "Yes! All our plans include a free domain name and hosting for the first year. SSL certificate is also included at no extra cost. Renewals after 1 year are at standard market rates."
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Absolutely. Every website we build is fully responsive — it looks and works great on mobile phones, tablets, and desktops. We test across multiple screen sizes before delivery."
    },
    {
      q: "What about SEO?",
      a: "Basic SEO setup is included in all plans — meta tags, page speed optimization, and Google indexing. For advanced SEO campaigns (ranking on page 1), we offer dedicated digital marketing services as an add-on."
    },
    {
      q: "What is the payment structure?",
      a: "We follow a 50% advance, 50% on delivery model. You only pay the remaining 50% once you've seen and approved the final website. If you're not satisfied, we'll revise until you are."
    },
    {
      q: "Do you provide support after delivery?",
      a: "Yes — we provide 24/7 support via WhatsApp, phone, and email even after your website goes live. Minor changes and bug fixes in the first 30 days are free."
    }
  ];

  return (
    <>
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="nav-logo">
            <img src="/swl2.PNG" alt="SmartWebLens Logo" />
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
              <a href="#faq">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                FAQ
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
        <a href="#team" onClick={() => setIsMobileNavOpen(false)}>Team</a>
        <a href="#pricing" onClick={() => setIsMobileNavOpen(false)}>Pricing</a>
        <a href="#faq" onClick={() => setIsMobileNavOpen(false)}>FAQ</a>
        <a href="tel:+918228985946" onClick={() => setIsMobileNavOpen(false)}>📞 Call: +91 82289 85946</a>
      </div>

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">🔥 LIMITED TIME OFFER</div>
          <h1>Website Ready in <span>5 Days</span><br />That Grows Your Business</h1>
          <p>Website + Android App + Domain + Hosting — complete digital presence at an unbeatable price.</p>
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
            <p className="section-sub">From websites to apps to digital marketing — we help your business thrive online.</p>
          </div>
          <div className="services-grid">

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Website Development</h3>
              <p>Fast, mobile-friendly, and SEO-ready websites. 5 pages fully customized for your brand — delivered in 5 days.</p>
              <a href="#pricing" className="service-link">
                View Pricing 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3>Android App Development</h3>
              <p>Custom Android apps that let customers install your business on their phones. Boost repeat business by 3×.</p>
              <a href="#pricing" className="service-link">
                View Pricing 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
                </svg>
              </div>
              <h3>E-Commerce Website</h3>
              <p>Full online store with COD, payment gateway, product listings, and order management — built to convert.</p>
              <a href="#pricing" className="service-link">
                View Pricing 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Digital Marketing & SEO</h3>
              <p>Rank higher on Google. Reach more customers with targeted SEO, social media, and paid ads.</p>
              <span className="service-link" style={{ cursor: "default", color: "var(--text-light)" }}>Available as add-on</span>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                </svg>
              </div>
              <h3>Domain, Hosting & SSL</h3>
              <p>1 year free domain + hosting + SSL security certificate included. 99.9% uptime guaranteed.</p>
              <span className="service-link" style={{ cursor: "default", color: "var(--text-light)" }}>Included in all plans</span>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>WhatsApp, call, and email support. We're always here when you need us — after delivery too.</p>
              <span className="service-link" style={{ cursor: "default", color: "var(--text-light)" }}>Post-launch support</span>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════ WHAT'S INCLUDED ═══════════ */}
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
              <p>Your business installed on customers' phones. Boost repeat visits by 3×.</p>
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

      {/* ═══════════ ABOUT STRIP ═══════════ */}
      <section className="about-strip">
        <div className="container">
          <div className="about-strip-inner">
            <div className="about-text">
              <div className="section-tag">About SmartWebLens</div>
              <h2 className="section-title">Your Trusted Digital Partner</h2>
              <p className="section-sub">We specialize in building fast, modern, and affordable websites and Android apps for small businesses, startups, and entrepreneurs across India. Our mission is simple: get you online in 5 days at the best price.</p>
              <button className="about-btn" onClick={() => setIsModalOpen(true)}>
                Get Free Consultation
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
            <div className="stats-grid">
              <div className="stat-card">
                <h2>10+</h2>
                <p>Websites delivered across India</p>
              </div>
              <div className="stat-card">
                <h2>4.9★</h2>
                <p>Average client rating</p>
              </div>
              <div className="stat-card">
                <h2>5</h2>
                <p>Days average delivery time</p>
              </div>
              <div className="stat-card">
                <h2>50%</h2>
                <p>Pay only after you love it</p>
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
            <h2 className="section-title">We've Worked Across Multiple Industries</h2>
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
              <div className="plan-name">Basic</div>
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
              <div className="plan-name">Standard — Best for Ecommerce</div>
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
              <div className="plan-name">Premium</div>
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
            <h2 className="section-title">Meet the Team</h2>
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
                <img src="/rahulgop.jpg" alt="Rahul Gop" className="team-avatar" />
              </div>
              <h3>Rahul Gop</h3>
              <p>Product Co-Owner</p>
            </div>

            {/* Samit Kumar*/}
            <div className="team-card">
              <div className="team-avatar-wrapper">
                <img src="/samit.jpg" alt="Samit Kumar" className="team-avatar" />
              </div>
              <h3>Samit Kumar</h3>
              <p>Full Stack Developer</p>
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
            <p className="section-sub">Still have questions? Call us — we'll answer in under 2 minutes.</p>
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
          <p>Get a free consultation. Start in 24 hours. Pay 50% only after you love it.</p>
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
          <p style={{ color: "rgba(255,255,255,.5)", fontSize: "13px", marginTop: "20px" }}>Safe: your number is never shared with third parties.</p>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/swl2.PNG" alt="SmartWebLens" style={{ height: "44px", width: "auto" }} />
              <p>SmartWebLens builds fast, modern, and affordable websites and Android apps. Get your business online in just 5 days.</p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">Android App</a></li>
                <li><a href="#services">E-Commerce</a></li>
                <li><a href="#services">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="footer-col footer-contact">
              <h5>Contact Us</h5>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3 4.18 2 2 0 0 1 4.9 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L9.91 9.91a16 16 0 0 06.29 6.29l1.18-1.18a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <a href="tel:+918228985946">+91 82289 85946</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <a href="mailto:info@smartweblens.com">info@smartweblens.xyz</a>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Bihar, India
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SmartWebLens. All rights reserved.</span>
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
          <p>Ready to launch? Fill the form and we'll reach out within minutes.</p>
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
