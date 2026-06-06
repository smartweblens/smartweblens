import React from "react";
import { Metadata } from "next";
import Link from "next/link";


// REQUIREMENT: Next.js metadata export (Title under 60 chars, description under 160 chars)
export const metadata: Metadata = {
  title: "Website Development Company in Patna | SmartWebLens",
  description: "Looking for the best website development company in Patna? SmartWebLens offers top-tier corporate web design and web development services in Patna, Bihar.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/website-development-company-patna",
  },
  openGraph: {
    title: "Website Development Company in Patna | SmartWebLens",
    description: "Get elite corporate websites, customized landing pages, and robust web architectures in Patna, Bihar. 5-day delivery and 24/7 priority support.",
    url: "https://www.smartweblens.xyz/website-development-company-patna",
    type: "website",
    images: [
      {
        url: "https://www.smartweblens.xyz/swl2.PNG",
        width: 1200,
        height: 630,
        alt: "SmartWebLens Web Development Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development Company in Patna | SmartWebLens",
    description: "Top-rated web design and software engineering agency in Patna, Bihar. Dynamic website design and native app solutions.",
    images: ["https://www.smartweblens.xyz/swl2.PNG"],
  },
};

export default function WebsiteDevelopmentPatna() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartWebLens",
    "image": "https://www.smartweblens.xyz/swl2.PNG",
    "@id": "https://www.smartweblens.xyz/website-development-company-patna/#localbusiness",
    "url": "https://www.smartweblens.xyz/website-development-company-patna",
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
        "name": "Which is the best website development company in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmartWebLens is recognized as the best website development company in Patna, Bihar, offering highly responsive corporate web layouts, mobile app design, e-commerce storefronts, and local SEO services under 5 business days."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a website development service cost in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our corporate web layouts start at an affordable price of ₹9,999. This covers responsive layout design, free domain registration, free premium hosting for 1 year, SSL certificate bindings, and standard local SEO setup."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to deploy a custom website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard business landing pages and corporate sites, our team delivers within 5 working days. Complex enterprise web applications or multi-vendor stores are delivered in milestones."
        }
      },
      {
        "@type": "Question",
        "name": "Are your web design templates optimized for Google search results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we write custom, lightweight, semantically correct code instead of bloated templates. Every layout includes metadata configuration, local business schemas, and is optimized for quick indexing."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide website maintenance services in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 30 days of free comprehensive maintenance support with all web design projects, which covers daily backups, weekly security audits, and minor modifications."
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
            🔥 LEADING IT SOLUTIONS IN BIHAR
          </div>
          
          {/* REQUIREMENT: Primary Keyword in H1 */}
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "2.6rem", color: "#0f172a", lineHeight: "1.2", margin: "0 0 20px 0" }}>
            Website Development Company in Patna | SmartWebLens
          </h1>
          
          {/* REQUIREMENT: Primary Keyword in the first 100 words / first paragraph */}
          <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#334155", textAlign: "justify", fontWeight: "500" }}>
            Finding a trusted, technologically superior <strong>Website Development Company in Patna</strong> is a crucial decision for expanding brands. At <strong>SmartWebLens</strong>, we specialize in engineering high-speed, secure, and mobile-responsive websites that act as continuous organic lead generation engines. If you are an enterprise located on Fraser Road, a dynamic startup in Boring Road, a private clinic on Bailey Road, or an educational institution in Kankarbagh, our elite website development team is ready to design optimized layouts that convert organic traffic into revenue across Patna, Bihar, and India.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#349ca9", color: "#ffffff", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", marginRight: "15px" }}>
              📞 Call Developer: +91 82289 85946
            </a>
            <a href="#contact" style={{ display: "inline-block", backgroundColor: "#f8fafc", color: "#349ca9", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", border: "1px solid #349ca9" }}>
              Contact Now ✉️
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Empowering Patna Businesses with High-Performance Digital Solutions
          </h2>
          <p>
            In the modern corporate area, a basic website is no longer sufficient. Search engines prioritize websites that load in under 2 seconds, utilize secure padlock bindings (SSL), display correctly across all devices, and feature clean semantic HTML structures. SmartWebLens stands out from generic IT agencies by building custom-coded web architectures engineered to rank at the top of local search listings in Patna, Bihar.
          </p>
          <p>
            We consult directly with you to map out your core target audience, inspect local competitors in Bihar, and build websites styled for conversions. Whether you need a corporate portal, a landing page optimized for Google Ads, or a secure cloud application, our engineers deliver highly optimized platforms backed by secure databases.
          </p>
        </section>

        {/* SERVICE OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Website Development Services Patna: Tailored for Every Brand
          </h2>
          <p>
            Our tech stack is flexible and tailored to your specific requirements. We utilize modern tools like React, Next.js, and Node.js for ultra-fast frontend rendering, alongside robust databases such as MongoDB and PostgreSQL.
          </p>
          
          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>1. Corporate & Business Websites</h3>
          <p>
            Represent your brand professionally. We build sleek, responsive business web designs that showcase your services, display client trust elements, and contain clear lead-capture channels. Perfect for real estate firms, legal advocates, and corporate services in Fraser Road and Kankarbagh.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>2. E-commerce Stores & Shopping Platforms</h3>
          <p>
            Scale your retail business beyond geographic limits. We set up robust e-commerce solutions with UPI payment systems, cash on delivery (COD) tracking, and simple inventory management consoles, designed to target buyers in Patna, Bihar, and across India.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>3. Custom Next.js Web Architectures</h3>
          <p>
            Enjoy next-generation web performance. Next.js is highly optimized for Google&apos;s Core Web Vitals, pre-rendering code on the server so pages load in milliseconds, ensuring you secure the highest ranks in Google Search results.
          </p>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 1 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 1:</div>
          <strong>File Name:</strong> <code>website-development-company-in-patna-office.webp</code><br />
          <strong>Alt Text:</strong> Professional web developers in Patna configuring a responsive business website at SmartWebLens Fraser Road office.<br />
          <strong>Title Text:</strong> Website Development Services Patna - SmartWebLens
        </div>

        {/* BENEFITS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Direct Benefits of Partnering with our Website Developer in Patna
          </h2>
          <p>
            When you select SmartWebLens as your technology partner, we provide complete digital resources designed to eliminate unnecessary third-party overhead costs.
          </p>
          <ul>
            <li><strong>Free 1 Year High-Speed Hosting:</strong> We configure secure cloud server space with 99.9% uptime guarantees so your site is always online.</li>
            <li><strong>Free Domain Name Registration:</strong> Get your custom corporate identity (e.g., www.yourcompany.com) registered for the first year at zero cost.</li>
            <li><strong>Prismatic SSL Security Bindings:</strong> Secure data transfers with HTTPS padlock configurations, standard for user trust and search engine optimization.</li>
            <li><strong>Inbuilt Play Store-Ready Android Package:</strong> Expand your target audience by packaging your website into an Android application.</li>
          </ul>
        </section>

        {/* FEATURES */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Enterprise Features Built Into Every Digital Layout
          </h2>
          <p>
            Our web developments are feature-rich, ensuring a high-performance experience for your customers.
          </p>
          <ul>
            <li><strong>Fast Page Loading (Under 2 seconds):</strong> Optimized image loading, minified scripting, and server cache settings.</li>
            <li><strong>High-Intent Call to Actions (CTAs):</strong> Prominent phone buttons, integrated WhatsApp chat prompts, and request forms.</li>
            <li><strong>Localized Schema Integrations:</strong> Rich structured data mappings that display your location coordinates, address, and client reviews on local map packs.</li>
            <li><strong>Standard Database Security:</strong> Fully secure contact databases that safeguard your prospective client leads.</li>
          </ul>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 2 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 2:</div>
          <strong>File Name:</strong> <code>web-design-services-bihar-responsive.webp</code><br />
          <strong>Alt Text:</strong> Multi-device mobile responsive corporate web design developed by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> Responsive Web Design Company Patna
        </div>

        {/* WHY CHOOSE SMARTWEBLENS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Why Choose SmartWebLens: Fraser Road&apos;s Elite Web Team
          </h2>
          <p>
            Local companies in Patna, Bihar, select us because of our execution speed, clear pricing, and continuous support.
          </p>
          <ul>
            <li><strong>Express 5-Day Delivery:</strong> We do not keep you waiting. Standard business websites go live within 5 business days.</li>
            <li><strong>50/50 Payment Security:</strong> Pay only 50% upfront to start coding. The remaining balance is due after you review and approve the final setup.</li>
            <li><strong>24/7 Local Support:</strong> Speak directly to our engineers via phone or WhatsApp whenever you need text or banner modifications.</li>
          </ul>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Our Structured Website Development Process
          </h2>
          <p>
            We follow a structured, collaborative pipeline that guarantees high-performance output on time.
          </p>
          <ol>
            <li><strong>Discovery & Planning:</strong> We analyze your business model, inspect local competition in Bihar, and select layouts.</li>
            <li><strong>Interface Mockups:</strong> We design prototypes, ensuring CTA placement and mobile layouts match search standards.</li>
            <li><strong>Frontend & Backend Coding:</strong> Our developers write clean, lightweight code, optimizing pages for instant loading.</li>
            <li><strong>Revisions & Client Testing:</strong> We host a private preview URL. You test the interfaces and request minor tweaks.</li>
            <li><strong>Final Deployment:</strong> We bind your custom domain, set up security certificates, and launch your site!</li>
          </ol>
        </section>

        {/* TECHNOLOGIES USED */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Modern Tech Stack: Fast, Secure, and Future-Proof Coding
          </h2>
          <p>
            We write future-proof layouts using industry-standard tech, avoiding bloated templates.
          </p>
          <ul>
            <li><strong>Frontend Layouts:</strong> React, Next.js, modern Javascript, semantic HTML5, CSS3, Tailwind styling.</li>
            <li><strong>Backend Engines:</strong> Node.js, secure PHP, Laravel systems.</li>
            <li><strong>Cloud Databases:</strong> MongoDB, MySQL, encrypted PostgreSQL.</li>
            <li><strong>Mobile Tools:</strong> Flutter, React Native for cross-platform app deployments.</li>
          </ul>
        </section>

        {/* INDUSTRIES WE SERVE */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Industries We Serve: Local Business Solutions in Patna, Bihar
          </h2>
          <p>
            We have deployed successful projects across various commercial sectors in Bihar:
          </p>
          <ul>
            <li><strong>Real Estate Companies:</strong> Property listing pages, interactive contact forms, and map integrations.</li>
            <li><strong>Private Schools & Colleges:</strong> Admission inquiry channels, online fee payment options, and course lists.</li>
            <li><strong>Healthcare Clinics & Doctors:</strong> Online appointment scheduling, doctor profiles, and list of services.</li>
            <li><strong>Retail Shops & Online Stores:</strong> Safe checkouts, product galleries, and cash-on-delivery tracking.</li>
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
          <strong>File Name:</strong> <code>ecommerce-website-development-patna-setup.webp</code><br />
          <strong>Alt Text:</strong> Local retail online store setup designed by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> E-commerce Web Design Patna
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
            Frequently Asked Questions: Web Services in Patna, Bihar
          </h2>
          <p>
            To help you get started, here are clear answers to common questions about our web design services in Bihar.
          </p>

          <div style={{ marginTop: "20px" }}>
            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Which is the best website development company in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> SmartWebLens is recognized as the best website development company in Patna, Bihar, offering highly responsive corporate web layouts, mobile app design, e-commerce storefronts, and local SEO services under 5 business days.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: How much does a website development service cost in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Our corporate web layouts start at an affordable price of ₹9,999. This covers responsive layout design, free domain registration, free premium hosting for 1 year, SSL certificate bindings, and standard local SEO setup.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: How long does it take to deploy a custom website?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> For standard business landing pages and corporate sites, our team delivers within 5 working days. Complex enterprise web applications or multi-vendor stores are delivered in milestones.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Are your web design templates optimized for Google search results?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we write custom, lightweight, semantically correct code instead of bloated templates. Every layout includes metadata configuration, local business schemas, and is optimized for quick indexing.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you provide website maintenance services in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we provide 30 days of free comprehensive maintenance support with all web design projects, which covers daily backups, weekly security audits, and minor modifications.
              </p>
            </details>
          </div>
        </section>

        {/* CONCLUSION & CONTACT CTA */}
        {/* REQUIREMENT: Primary Keyword in Conclusion */}
        <section id="contact" style={{ background: "linear-gradient(135deg, #349ca9 0%, #236f79 100%)", color: "#ffffff", padding: "40px", borderRadius: "12px", textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ color: "#f9ca24", border: "none", padding: 0, margin: "0 0 15px 0", fontSize: "2rem" }}>
            Grow Your Local Business in Bihar with SmartWebLens
          </h2>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 25px auto", lineHeight: "1.8" }}>
            In modern marketing, your web page is the foundation of your digital brand presence. Relying on slow, outdated, or generic templates will only drive potential clients to your competitors. Partnering with a professional <strong>Website Development Company in Patna</strong> like SmartWebLens ensures you secure a fast, responsive, and secure platform designed to grow your business.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#f9ca24", color: "#1a202c", padding: "14px 36px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
              📞 Call to Get Started: +91 82289 85946
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
