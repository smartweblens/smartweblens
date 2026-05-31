"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./blog.css";

export default function BlogLayout({ children }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="navbar">
        <div className="container">
          <Link href="/" className="nav-logo">
            <img src="/swl2.PNG?v=2" alt="SmartWebLens Logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <a href="/#services">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a href="/#team">
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
              <a href="/#pricing">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                Pricing
              </a>
            </li>
            <li>
              <a href="/#faq">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                FAQ
              </a>
            </li>
            <li>
              <Link href="/blog" className="active">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Blog
              </Link>
            </li>
          </ul>
          <div className="nav-cta-group">
            <a href="tel:+918228985946" className="btn-call-nav" aria-label="Call us">📞</a>
            <Link href="/contact" className="btn-contact-nav">Contact Us</Link>
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
        <Link href="/" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
        <a href="/#services" onClick={() => setIsMobileNavOpen(false)}>Services</a>
        <a href="/#team" onClick={() => setIsMobileNavOpen(false)}>Team</a>
        <a href="/#pricing" onClick={() => setIsMobileNavOpen(false)}>Pricing</a>
        <a href="/#faq" onClick={() => setIsMobileNavOpen(false)}>FAQ</a>
        <Link href="/blog" onClick={() => setIsMobileNavOpen(false)}>Blog</Link>
        <a href="tel:+918228985946" onClick={() => setIsMobileNavOpen(false)}>📞 Call: +91 82289 85946</a>
      </div>

      {/* Spacing wrapper so content sits cleanly below sticky navigation */}
      <div style={{ paddingTop: "68px" }}>
        {children}
      </div>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/swl2.PNG?v=2" alt="SmartWebLens" style={{ height: "44px", width: "auto" }} />
              <p>SmartWebLens builds fast, modern, and affordable websites and Android apps. Get your business online in just 5 days.</p>
            </div>
            <div className="footer-col">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><a href="/#services">Services</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="/#services">Website Development</a></li>
                <li><a href="/#services">Android App</a></li>
                <li><a href="/#services">E-Commerce</a></li>
                <li><a href="/#services">Digital Marketing</a></li>
              </ul>
            </div>
            <div className="footer-col footer-contact">
              <h5>Contact Us</h5>
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
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "15px", height: "15px" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "15px", height: "15px" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "15px", height: "15px" }}>
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
