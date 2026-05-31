import React from "react";
import { Metadata } from "next";

// REQUIREMENT: Next.js metadata export (Title under 60 chars, description under 160 chars)
export const metadata: Metadata = {
  title: "Software Development Company in Patna | SmartWebLens",
  description: "Looking for the best software development company in Patna? SmartWebLens offers top-tier custom software development and database solutions in Patna, Bihar.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/software-development-company-patna",
  },
  openGraph: {
    title: "Software Development Company in Patna | SmartWebLens",
    description: "Get elite custom corporate software, CRM systems, and cloud database applications in Patna, Bihar. 5-day delivery and 24/7 priority support.",
    url: "https://www.smartweblens.xyz/software-development-company-patna",
    type: "website",
    images: [
      {
        url: "https://www.smartweblens.xyz/swl2.PNG",
        width: 1200,
        height: 630,
        alt: "SmartWebLens Software Development Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company in Patna | SmartWebLens",
    description: "Top-rated software engineering and cloud database solutions agency in Patna, Bihar. Secure, fast, and scalable frameworks.",
    images: ["https://www.smartweblens.xyz/swl2.PNG"],
  },
};

export default function SoftwareDevelopmentPatna() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartWebLens",
    "image": "https://www.smartweblens.xyz/swl2.PNG",
    "@id": "https://www.smartweblens.xyz/software-development-company-patna/#localbusiness",
    "url": "https://www.smartweblens.xyz/software-development-company-patna",
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
        "name": "Which is the best software development company in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmartWebLens is recognized as the best software development company in Patna, Bihar, offering highly secure custom software engineering, cloud CRM databases, and school/hospital billing tools."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of custom software development in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our basic custom corporate software development setups start at an affordable price of ₹14,999, which increases depending on user roles, cloud storage space, and API integrations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design secure cloud database tools in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our software company implements modern, encrypted databases (MongoDB, PostgreSQL) that ensure all proprietary client information remains secure in Fraser Road and Kankarbagh."
        }
      },
      {
        "@type": "Question",
        "name": "How long does custom software engineering take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Timeline varies by scope. Basic informational tools and CRM modules are deployed in 7-15 business days, while enterprise dashboards are scheduled in stages."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide training for employee administrative panels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 1-on-1 walkthrough sessions and detailed usage video guides for your administrative staff to ensure seamless operations."
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
            💻 ELITE SOFTWARE SOLUTIONS IN BIHAR
          </div>
          
          {/* REQUIREMENT: Primary Keyword in H1 */}
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "2.6rem", color: "#0f172a", lineHeight: "1.2", margin: "0 0 20px 0" }}>
            Software Development Company in Patna | SmartWebLens
          </h1>
          
          {/* REQUIREMENT: Primary Keyword in the first 100 words / first paragraph */}
          <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#334155", textAlign: "justify", fontWeight: "500" }}>
            Choosing a technologically superior <strong>Software Development Company in Patna</strong> is essential for modern brands seeking to automate their business workflows. At <strong>SmartWebLens</strong>, we specialize in engineering high-performing, secure, and custom-coded software applications that reduce administrative overhead and increase efficiency. Whether you are an educational institution in Boring Road, a corporate office on Fraser Road, or a private medical clinic in Kankarbagh, our elite team of software developers constructs optimized tools that automate database processes across Patna, Bihar, and India.
          </p>

          <div style={{ marginTop: "25px" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#349ca9", color: "#ffffff", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", marginRight: "15px" }}>
              📞 Talk to our Engineers: +91 82289 85946
            </a>
            <a href="#contact" style={{ display: "inline-block", backgroundColor: "#f8fafc", color: "#349ca9", padding: "12px 30px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", border: "1px solid #349ca9" }}>
              Request Quote ✉️
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Bespoke Software Systems Designed for Operational Excellence
          </h2>
          <p>
            In the modern digital area, generic off-the-shelf software tools often fail to satisfy the unique operational requirements of your business. SmartWebLens stands out from generic IT outsourcing groups by building custom-coded corporate CRM systems, billing dashboards, school management portals, and client trackers designed to match your specific workflows. We do not use bloated pre-made structures.
          </p>
          <p>
            Our software engineers work directly with your operational staff to map out employee roles and database triggers. We write secure REST APIs, minified frontend scripts, and robust cloud configurations. This tailored approach reduces human error, automates repetitive reporting tasks, and saves local businesses in Patna, Bihar, hours of manual labor every week.
          </p>
        </section>

        {/* SERVICE OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Software Development Services Patna: Our Coding Spectrum
          </h2>
          <p>
            We utilize secure, robust, and modern programming architectures to construct scalable solutions that satisfy corporate standards.
          </p>
          
          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>1. Custom CRM & ERP Dashboards</h3>
          <p>
            Automate customer tracking and internal processes. We build secure dashboards that display your active leads, track employee targets, generate instant invoice receipts, and automate dynamic reporting. Perfect for real estate developers and professional consultancies in Fraser Road.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>2. Educational & School Management portals</h3>
          <p>
            Manage school assets easily. We construct custom portals with online student admission channels, unified automated fee billing systems, and student record databases, tailored for private schools in Boring Road.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>3. Secure Cloud Database Integrations</h3>
          <p>
            Data security is our primary focus. We implement modern, encrypted database solutions (MongoDB, PostgreSQL) that ensure your proprietary commercial data is safe, backed up daily, and accessible securely from any device.
          </p>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 1 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 1:</div>
          <strong>File Name:</strong> <code>software-development-company-in-patna-office.webp</code><br />
          <strong>Alt Text:</strong> Software engineers coding a custom corporate CRM database dashboard at SmartWebLens Patna office.<br />
          <strong>Title Text:</strong> Software Development Services Patna - SmartWebLens
        </div>

        {/* BENEFITS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Direct Business Benefits of Custom Software
          </h2>
          <p>
            A professionally developed corporate software system acts as a valuable investment that yields continuous returns for your brand:
          </p>
          <ul>
            <li><strong>Reduce Human Error:</strong> Automated billing and calculation engines eliminate mathematical mistakes.</li>
            <li><strong>Prismatic Data Security:</strong> Advanced encryption algorithms safeguard your proprietary client databases.</li>
            <li><strong>Streamline Operations:</strong> Real-time data displays help your managers make decisions faster.</li>
            <li><strong>Highly Scalable:</strong> Modular code structures allow you to add new features as your brand grows.</li>
          </ul>
        </section>

        {/* FEATURES */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Enterprise Features Built Into Every System Layout
          </h2>
          <p>
            We implement rich utility features to ensure an engaging customer experience.
          </p>
          <ul>
            <li><strong>Role-Based User Permissions:</strong> Restrict database access so employees only view information relevant to their roles.</li>
            <li><strong>Unified Automated Invoicing:</strong> Generate PDF receipts instantly upon checkout and send automated email alerts.</li>
            <li><strong>Dynamic Analytics & Graphs:</strong> Visual data representations that help you analyze daily revenue and lead sources.</li>
            <li><strong>Secure API Mappings:</strong> Encrypted REST API connections that prevent unauthorized resource access.</li>
          </ul>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 2 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 2:</div>
          <strong>File Name:</strong> <code>custom-software-development-company-bihar.webp</code><br />
          <strong>Alt Text:</strong> Cloud CRM database dashboard built for a Patna-based healthcare clinic by SmartWebLens.<br />
          <strong>Title Text:</strong> Software Company Bihar
        </div>

        {/* WHY CHOOSE SMARTWEBLENS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Why Choose SmartWebLens: Patna&apos;s Elite Software Team
          </h2>
          <p>
            Startups, local shops, and medical clinics in Patna, Bihar, select us because of our secure builds, transparent pricing, and continuous support.
          </p>
          <ul>
            <li><strong>50/50 Secured Payments:</strong> Pay 50% upfront to start coding. The remaining balance is due after you review and approve the build.</li>
            <li><strong>Comprehensive 1-on-1 Training:</strong> We provide detailed video guides and walkthroughs for your administrative staff.</li>
            <li><strong>24/7 Direct Developer Support:</strong> Call or WhatsApp our Fraser Road developers directly whenever you need database updates.</li>
          </ul>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Our Structured Software Engineering Process
          </h2>
          <p>
            We follow a structured, collaborative pipeline that guarantees high-performance output on time.
          </p>
          <ol>
            <li><strong>Consultation & Scope:</strong> We map your target audience, identify primary competition, and outline workflows.</li>
            <li><strong>Interactive Layout Design:</strong> We design clean prototypes, ensuring responsiveness and placement of call-to-actions match standards.</li>
            <li><strong>Robust System Coding:</strong> Our developers write clean, secure code, optimizing pages for instant loading.</li>
            <li><strong>Client Testing & Review:</strong> We share a live demo link. You test the interfaces and request minor tweaks.</li>
            <li><strong>Launch & Server Optimization:</strong> We configure secure databases, set up security certificates, and launch your system!</li>
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
          <strong>File Name:</strong> <code>cloud-crm-database-development-patna.webp</code><br />
          <strong>Alt Text:</strong> Cloud-based secure database architecture developed by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> Cloud Database Development Patna
        </div>

        {/* INTERNAL LINKING BLOCK */}
        <section style={{ backgroundColor: "#edf2f7", padding: "20px", borderRadius: "8px", marginBottom: "50px" }}>
          <h3 style={{ margin: "0 0 10px 0", color: "#236f79" }}>🔗 Explore Professional IT Services in Bihar:</h3>
          <p style={{ margin: 0, fontSize: "14px" }}>
            Are you looking to scale your business online? Learn more about our top-rated local services:
            <br />
            🌐 Website Development: <a href="/website-development-company-patna">Website Development Company in Patna</a> | 
            📱 Mobile App: <a href="/mobile-app-development-company-patna">Mobile App Development Company in Patna</a> | 
            🎨 Web Design: <a href="/web-design-company-patna">Web Design Company in Patna</a> | 
            💻 Software Engineering: <a href="/software-development-company-patna">Software Development Company in Patna</a> | 
            🛒 E-commerce Store: <a href="/ecommerce-website-development-company-patna">Ecommerce Website Development Company in Patna</a> | 
            ✉️ Contact: <a href="/contact-us">Contact Page</a> | 
            📝 Blog: <a href="/blog">Our SEO Blog</a>
          </p>
        </section>

        {/* FAQs */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Frequently Asked Questions: Software Development in Patna, Bihar
          </h2>
          <p>
            To help you get started, here are clear answers to common questions about our software development in Bihar.
          </p>

          <div style={{ marginTop: "20px" }}>
            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Which is the best software development company in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> SmartWebLens is recognized as the best software development company in Patna, Bihar, offering highly secure custom software engineering, cloud CRM databases, and school/hospital billing tools.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: What is the cost of custom software development in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Our basic custom corporate software development setups start at an affordable price of ₹14,999, which increases depending on user roles, cloud storage space, and API integrations.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you design secure cloud database tools in Bihar?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, our software company implements modern, encrypted databases (MongoDB, PostgreSQL) that ensure all proprietary client information remains secure in Fraser Road and Kankarbagh.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: How long does custom software engineering take?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Timeline varies by scope. Basic informational tools and CRM modules are deployed in 7-15 business days, while enterprise dashboards are scheduled in stages.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you provide training for employee administrative panels?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we provide 1-on-1 walkthrough sessions and detailed usage video guides for your administrative staff to ensure seamless operations.
              </p>
            </details>
          </div>
        </section>

        {/* CONCLUSION & CONTACT CTA */}
        {/* REQUIREMENT: Primary Keyword in Conclusion */}
        <section id="contact" style={{ background: "linear-gradient(135deg, #349ca9 0%, #236f79 100%)", color: "#ffffff", padding: "40px", borderRadius: "12px", textAlign: "center", marginTop: "50px" }}>
          <h2 style={{ color: "#f9ca24", border: "none", padding: 0, margin: "0 0 15px 0", fontSize: "2rem" }}>
            Automate Your Operations in Bihar with SmartWebLens
          </h2>
          <p style={{ color: "rgba(255,255,255,0.92)", fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto 25px auto", lineHeight: "1.8" }}>
            A manual operational workflow will only slow your business down. Partnering with a professional <strong>Software Development Company in Patna</strong> like SmartWebLens guarantees you secure a fast, secure, and fully customized digital platform designed to grow.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            <a href="tel:+918228985946" style={{ display: "inline-block", backgroundColor: "#f9ca24", color: "#1a202c", padding: "14px 36px", borderRadius: "50px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
              📞 Speak to our Software Experts: +91 82289 85946
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
