import React from "react";
import { Metadata } from "next";
import Link from "next/link";


// REQUIREMENT: Next.js metadata export (Title under 60 chars, description under 160 chars)
export const metadata: Metadata = {
  title: "Web Design Company in Patna | SmartWebLens",
  description: "Looking for the best web design company in Patna? SmartWebLens offers top-tier corporate web design, UX/UI, and website development services in Patna, Bihar.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/web-design-company-patna",
  },
  openGraph: {
    title: "Web Design Company in Patna | SmartWebLens",
    description: "Get elite UX/UI layouts, mobile responsive interfaces, and custom visual templates in Patna, Bihar. 5-day delivery and 24/7 priority support.",
    url: "https://www.smartweblens.xyz/web-design-company-patna",
    type: "website",
    images: [
      {
        url: "https://www.smartweblens.xyz/swl2.PNG",
        width: 1200,
        height: 630,
        alt: "SmartWebLens Web Design Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Company in Patna | SmartWebLens",
    description: "Top-rated graphic design and corporate web layouts agency in Patna, Bihar. Elegant, fast, and secure frontend structures.",
    images: ["https://www.smartweblens.xyz/swl2.PNG"],
  },
};

export default function WebDesignPatna() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartWebLens",
    "image": "https://www.smartweblens.xyz/swl2.PNG",
    "@id": "https://www.smartweblens.xyz/web-design-company-patna/#localbusiness",
    "url": "https://www.smartweblens.xyz/web-design-company-patna",
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
      { "@type": "AdministrativeArea", "name": "Bihar" },
      { "@type": "AdministrativeArea", "name": "India" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is the best web design company in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmartWebLens is recognized as the best web design company in Patna, Bihar, offering high-performance, responsive UI/UX templates, corporate branding, and lightweight coding frameworks."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of professional web design services in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our premium responsive web design packages start at an affordable price of ₹9,999, which includes UI prototyping, free domain registration, free premium hosting, and SSL installation."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design mobile-friendly responsive websites in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every layout we build is fully responsive, meaning it renders beautifully on desktops, Apple iPad tablets, and android smartphones in Boring Road and Fraser Road."
        }
      },
      {
        "@type": "Question",
        "name": "How long does the web design process take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our signature delivery time is 5 days for standard corporate websites. We share an active preview link on Day 4 so you can review and approve it."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide graphic design and UI/UX wireframing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we construct interactive prototypes and wireframe pathways before writing code, ensuring the customer journey matches conversion best practices."
        }
      }
    ]
  };

  return (
    <>
      {/* Structural JSON-LD Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Semantic main section */}
      <main style={{ padding: "40px 20px", maxWidth: "960px", margin: "0 auto", backgroundColor: "#ffffff" }}>
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: "50px", borderBottom: "1px solid #e2e8f0", paddingBottom: "30px" }}>
          <div style={{ display: "inline-block", backgroundColor: "#f9ca24", color: "#1a202c", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: "bold", marginBottom: "15px" }}>
            🎨 PREMIER UI/UX AGENCY IN BIHAR
          </div>
          
          {/* REQUIREMENT: Primary Keyword in H1 */}
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "2.6rem", color: "#0f172a", lineHeight: "1.2", margin: "0 0 20px 0" }}>
            Web Design Company in Patna | SmartWebLens
          </h1>
          
          {/* REQUIREMENT: Primary Keyword in the first 100 words / first paragraph */}
          <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#334155", textAlign: "justify", fontWeight: "500" }}>
            Finding a creative and strategic <strong>Web Design Company in Patna</strong> is essential for businesses seeking to establish a lasting online brand. At <strong>SmartWebLens</strong>, we specialize in designing custom, conversion-focused, and mobile-friendly websites that showcase your business value. Whether you are a retail store in Boring Road, a financial office in Fraser Road, or an educational institution in Kankarbagh, our elite web design team constructs highly optimized, secure layouts that load in milliseconds across Patna, Bihar, and India.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#349ca9", color: "#ffffff", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", marginRight: "15px" }}>
              📞 Talk to our Designers: +91 82289 85946
            </a>
            <a href="#contact" style={{ display: "inline-block", backgroundColor: "#f8fafc", color: "#349ca9", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", border: "1px solid #349ca9" }}>
              View Portfolio ✉️
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Visual Storytelling Combined with Technological Excellence
          </h2>
          <p>
            A high-performing website is the single most powerful marketing asset for any expanding brand. SmartWebLens stands out from generic web agencies by providing elite user interface (UI) and user experience (UX) strategies that capture consumer attention instantly. We do not use bloated pre-made templates. We write clean, semantic HTML5, CSS3, and modern React code to ensure your web pages load exceptionally fast.
          </p>
          <p>
            Our graphic and web design specialists work directly with you to map out your customer pathways. We ensure key data, such as your call-to-action buttons, service lists, and secure WhatsApp prompts, are visible immediately. This structured approach reduces your bounce rate, satisfies Google&apos;s strict layout metrics, and boosts your direct inquiries.
          </p>
        </section>

        {/* SERVICE OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Web Design Services Patna: Crafting Visual Identities
          </h2>
          <p>
            We offer a comprehensive spectrum of design solutions meant to boost corporate credibility and attract regional buyers in Bihar.
          </p>
          
          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>1. Corporate & Brand UI/UX Design</h3>
          <p>
            Establish local authority. We design minimal, modern, and cohesive website structures that highlight your core capabilities, integrate client review grids, and feature prominent lead capture forms. Perfect for real estate developers and professional consultants in Fraser Road.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>2. Landing Page Layout Optimization</h3>
          <p>
            Multiply your advertisement conversion rates. We construct high-impact standalone landing pages optimized for Google Ads campaigns, featuring fast load speeds, secure databases, and zero distractions.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>3. Custom Mobile-First Layouts</h3>
          <p>
            Over 85% of traffic originates on mobile phones. We prioritize mobile-first interfaces, ensuring all sizing, navigation icons, and pop-up contact modals operate gracefully on Apple iOS and Android screens.
          </p>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 1 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 1:</div>
          <strong>File Name:</strong> <code>web-design-company-in-patna-office.webp</code><br />
          <strong>Alt Text:</strong> Web design company in Patna designers wireframing a responsive corporate interface layout.<br />
          <strong>Title Text:</strong> Web Design Services Patna - SmartWebLens
        </div>

        {/* BENEFITS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Direct Business Benefits of Professional Web Design
          </h2>
          <p>
            An optimized business website acts as a valuable investment that yields continuous returns for your brand:
          </p>
          <ul>
            <li><strong>Build Immediate Trust:</strong> Sleek layouts with secure padlock encryption (SSL) show consumers you are reliable.</li>
            <li><strong>Reduce Bounce Rate:</strong> Quick page load speeds and intuitive menus keep users browsing longer.</li>
            <li><strong>Dominate Local Search:</strong> Optimized semantic structures help your site rank high on Google local listings.</li>
            <li><strong>Multiply Daily Leads:</strong> Strategy-driven CTAs encourage direct client inquiries via call and WhatsApp.</li>
          </ul>
        </section>

        {/* FEATURES */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Premium Features Integrated Into Every Template
          </h2>
          <p>
            We implement rich utility features to ensure an engaging customer experience.
          </p>
          <ul>
            <li><strong>Core Web Vitals Compliance:</strong> Lightweight scripting and optimized images to load under 2 seconds.</li>
            <li><strong>Dynamic Call to Actions (CTAs):</strong> Prominent phone buttons, integrated WhatsApp chat prompts, and request forms.</li>
            <li><strong>Localized Schema Mappings:</strong> Rich structured data mappings that display your location coordinates, address, and client reviews on local map packs.</li>
            <li><strong>Secure Cloud Integrations:</strong> Encrypted databases that safeguard your prospective client leads.</li>
          </ul>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 2 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 2:</div>
          <strong>File Name:</strong> <code>responsive-web-design-bihar.webp</code><br />
          <strong>Alt Text:</strong> Mobile-responsive corporate layout interface rendering on desktop and mobile screens in Patna, Bihar.<br />
          <strong>Title Text:</strong> Responsive Web Design Company Patna
        </div>

        {/* WHY CHOOSE SMARTWEBLENS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Why Choose SmartWebLens: Patna&apos;s Premier Web Design Team
          </h2>
          <p>
            Startups, local shops, and medical clinics in Patna, Bihar, select us because of our fast execution, transparent pricing, and continuous support.
          </p>
          <ul>
            <li><strong>Express 5-Day Delivery:</strong> Standard corporate websites go live within 5 business days.</li>
            <li><strong>50/50 Secured Payments:</strong> Pay 50% upfront to start coding. The remaining balance is due after you review and approve the build.</li>
            <li><strong>24/7 Direct Developer Support:</strong> Call or WhatsApp our Fraser Road developers directly whenever you need updates.</li>
          </ul>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Our Structured Web Design Process
          </h2>
          <p>
            We follow a structured, collaborative pipeline that guarantees high-performance output on time.
          </p>
          <ol>
            <li><strong>Consultation & Scope:</strong> We map your target audience, identify primary search competition, and outline site navigation menus.</li>
            <li><strong>Interactive Layout Design:</strong> We design clean prototypes, ensuring responsiveness and placement of call-to-actions match search standards.</li>
            <li><strong>Robust System Coding:</strong> Our developers write clean, SEO-compliant code, optimizing layouts to load in under 2 seconds.</li>
            <li><strong>Client Testing & Review:</strong> We share a live demo link. You test the interfaces and request minor tweaks.</li>
            <li><strong>Launch & Server Optimization:</strong> We bind your domain, configure security certificates, set up local indexing, and launch your site!</li>
          </ol>
        </section>

        {/* TECHNOLOGIES USED */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Technologies We Use: High-Performance, Scalable Coding Stack
          </h2>
          <p>
            We write future-proof layouts using industry-standard tech, avoiding bloated templates.
          </p>
          <ul>
            <li><strong>Frontend Layouts:</strong> React, Next.js, HTML5, CSS3, Tailwind styling.</li>
            <li><strong>Backend Engines:</strong> Node.js, secure PHP, Laravel systems.</li>
            <li><strong>Cloud Databases:</strong> MongoDB, MySQL, secure PostgreSQL.</li>
            <li><strong>Mobile Toolkits:</strong> Flutter, React Native, Native Java/Swift.</li>
          </ul>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Industries We Serve: Local Business Solutions in Patna, Bihar
          </h2>
          <p>
            SmartWebLens has deployed successful projects across various commercial sectors in Bihar:
          </p>
          <ul>
            <li><strong>Real Estate Companies:</strong> We build property listings, Google Maps location integrations, and virtual tour galleries.</li>
            <li><strong>Educational Groups & Schools:</strong> We build student admission dashboards, online fee payment gateways, and course catalogs.</li>
            <li><strong>Healthcare Clinics & Hospitals:</strong> We integrate patient booking panels, doctor schedules, and digital record tools.</li>
            <li><strong>Ecommerce Retailers:</strong> We construct online shops with Cash on Delivery options and Razorpay/UPI gateway systems.</li>
          </ul>
        </section>

        {/* PRICING OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Transparent Pricing Plans Built for Growing Brands
          </h2>
          <p>
            Clear pricing, no surprise fees. Choose a plan that matches your business scale.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8fafc" }}>
                <th style={{ border: "1px solid #e2e8f0", padding: "12px", textAlign: "left" }}>Package Name</th>
                <th style={{ border: "1px solid #e2e8f0", padding: "12px", textAlign: "left" }}>Starting Price</th>
                <th style={{ border: "1px solid #e2e8f0", padding: "12px", textAlign: "left" }}>Target Group</th>
                <th style={{ border: "1px solid #e2e8f0", padding: "12px", textAlign: "left" }}>Included Deliverables</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Basic Plan</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹9,999</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Local Business & Shops</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>5 Pages layout, Android App pack, Free Domain & Hosting, SSL certificate, 30 days support.</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Standard Plan</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹14,999</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Growing E-commerce Shops</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>10 Pages layout, Advanced Android app, UPI checkout gateway, COD option, 60 days support.</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Enterprise Custom</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹29,999+</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Clinics, Real Estate & Schools</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Unlimited pages, Custom Mobile App (Android/iOS), Multi-tenant database, 1 year priority support.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 3 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 3:</div>
          <strong>File Name:</strong> <code>professional-ui-ux-design-services-patna.webp</code><br />
          <strong>Alt Text:</strong> Digital UI/UX interface wireframe created by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> UI/UX Design Services Patna
        </div>

        {/* INTERNAL LINKING BLOCK */}
        <section style={{ backgroundColor: "#edf2f7", padding: "20px", borderRadius: "8px", marginBottom: "50px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#236f79" }}>🔗 Explore Professional IT Services in Bihar:</h3>
          <p style={{ margin: 0, fontSize: "14px" }}>
            Are you looking to scale your business online? Learn more about our top-rated local services:
            <br />
            🌐 Website Development: <Link href="/website-development-company-patna">Website Development Company in Patna</Link> | 
            📱 Mobile App: <Link href="/mobile-app-development-company-patna">Mobile App Development Company in Patna</Link> | 
            🎨 Web Design: <Link href="/web-design-company-patna">Web Design Company in Patna</Link> | 
            💻 Software Engineering: <Link href="/software-development-company-patna">Software Development Company in Patna</Link> | 
            🛒 E-commerce Store: <Link href="/ecommerce-website-development-company-patna">Ecommerce Website Development Company in Patna</Link> | 
            ✉️ Contact: <Link href="/contact">Contact Page</Link> | 
            📝 Blog: <Link href="/blog">Our SEO Blog</Link>
          </p>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Frequently Asked Questions: Web Design in Patna, Bihar
          </h2>
          <p>
            To help you get started, here are clear answers to common questions about our web design services in Bihar.
          </p>

          <div style={{ marginTop: "20px" }}>
            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Which is the best web design company in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> SmartWebLens is recognized as the best web design company in Patna, Bihar, offering high-performance, responsive UI/UX templates, corporate branding, and lightweight coding frameworks.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: What is the cost of professional web design services in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Our premium responsive web design packages start at an affordable price of ₹9,999, which includes UI prototyping, free domain registration, free premium hosting, and SSL installation.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you design mobile-friendly responsive websites in Bihar?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, every layout we build is fully responsive, meaning it renders beautifully on desktops, Apple iPad tablets, and android smartphones in Boring Road and Fraser Road.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: How long does the web design process take?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Our signature delivery time is 5 days for standard corporate websites. We share an active preview link on Day 4 so you can review and approve it.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you provide graphic design and UI/UX wireframing?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we construct interactive prototypes and wireframe pathways before writing code, ensuring the customer journey matches conversion best practices.
              </p>
            </details>
          </div>
        </section>

        {/* CONCLUSION & CONTACT CTA */}
        {/* REQUIREMENT: Primary Keyword in Conclusion */}
        <section id="contact" style={{ background: "linear-gradient(135deg, #349ca9 0%, #236f79 100%)", color: "#ffffff", padding: "40px", borderRadius: "12px", textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ color: "#f9ca24", border: "none", padding: 0, margin: "0 0 15px 0", fontSize: "2rem" }}>
            Grow Your Digital Presence in Bihar with SmartWebLens
          </h2>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 25px auto", lineHeight: "1.8" }}>
            A slow or outdated web layout will only drive potential clients to your competitors. Partnering with a professional <strong>Web Design Company in Patna</strong> like SmartWebLens guarantees you secure a fast, responsive, and secure digital platform designed to grow.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#f9ca24", color: "#1a202c", padding: "14px 36px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
              📞 Consult our Design Experts: +91 82289 85946
            </a>
            <a href="https://wa.me/918228985946" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", backgroundColor: "#00c781", color: "#ffffff", padding: "14px 36px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
              💬 Chat on WhatsApp
            </a>
          </div>
        </section>

      </main>
    </>
  );
}
