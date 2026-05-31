import React from "react";
import { Metadata } from "next";

// REQUIREMENT: Next.js metadata export (Title under 60 chars, description under 160 chars)
export const metadata: Metadata = {
  title: "Mobile App Development Company in Patna | SmartWebLens",
  description: "Looking for the best mobile app development company in Patna? SmartWebLens designs elite Android and iOS applications in Patna, Bihar.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/mobile-app-development-company-patna",
  },
  openGraph: {
    title: "Mobile App Development Company in Patna | SmartWebLens",
    description: "Get high-performance custom Android and iOS mobile applications in Patna, Bihar. Expert hybrid Flutter & React Native development with Play Store ready support.",
    url: "https://www.smartweblens.xyz/mobile-app-development-company-patna",
    type: "website",
    images: [
      {
        url: "https://www.smartweblens.xyz/swl2.PNG",
        width: 1200,
        height: 630,
        alt: "SmartWebLens Mobile App Development Patna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Company in Patna | SmartWebLens",
    description: "Top Android and iOS mobile app developers in Patna, Bihar. We build scalable cross-platform apps using React Native and Flutter.",
    images: ["https://www.smartweblens.xyz/swl2.PNG"],
  },
};

export default function MobileAppDevelopmentPatna() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SmartWebLens",
    "image": "https://www.smartweblens.xyz/swl2.PNG",
    "@id": "https://www.smartweblens.xyz/mobile-app-development-company-patna/#localbusiness",
    "url": "https://www.smartweblens.xyz/mobile-app-development-company-patna",
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
        "name": "Which is the best mobile app development company in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmartWebLens is recognized as the best mobile app development company in Patna, Bihar, offering high-performance native and cross-platform apps using Flutter & React Native with absolute Play Store upload support."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of mobile app development services in Patna?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of mobile app development starts from ₹14,999 for standard Android business applications, including clean database panel setup, push notification integrations, and 1 year free server maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "Do you design cross-platform hybrid applications for iOS and Android?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in high-performance cross-platform Flutter and React Native architectures that allow a single codebase to run elegantly on both Android and iOS devices, reducing your cost by 40%."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to deploy a mobile app on the Google Play Store?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard business application takes between 10 to 15 business days for final compilation, staging review, and play console listing approval."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide post-delivery update support for apps in Bihar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 30 days of comprehensive post-launch support at zero cost, which covers server optimizations, performance tracking, and direct developer helpline consultations."
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

      <main style={{ padding: "40px 20px", maxWidth: "960px", margin: "0 auto", backgroundColor: "#ffffff" }}>
        
        {/* HERO SECTION */}
        <section style={{ marginBottom: "50px", borderBottom: "1px solid #e2e8f0", paddingBottom: "30px" }}>
          <div style={{ display: "inline-block", backgroundColor: "#f9ca24", color: "#1a202c", padding: "6px 14px", borderRadius: "50px", fontSize: "13px", fontWeight: "bold", marginBottom: "15px" }}>
            📱 ELITE MOBILE APP DEVELOPERS IN BIHAR
          </div>
          
          {/* REQUIREMENT: Primary Keyword in H1 */}
          <h1 style={{ fontFamily: "Sora, sans-serif", fontSize: "2.6rem", color: "#0f172a", lineHeight: "1.2", margin: "0 0 20px 0" }}>
            Mobile App Development Company in Patna | SmartWebLens
          </h1>
          
          {/* REQUIREMENT: Primary Keyword in the first 100 words / first paragraph */}
          <p style={{ fontSize: "1.15rem", lineHeight: "1.8", color: "#334155", textAlign: "justify", fontWeight: "500" }}>
            In a mobile-first digital era, having a dedicated business application is the single most powerful strategy to boost customer retention. As the premier <strong>Mobile App Development Company in Patna</strong>, <strong>SmartWebLens</strong> designs, codes, and deploys high-performance Android and iOS applications that increase repeat sales by up to 3×. Whether you run a retail store in Boring Road, a private clinic on Bailey Road, an educational coaching institute in Kankarbagh, or an expanding corporate office on Fraser Road, our elite mobile app engineers build lightweight, robust, and Play Store-ready mobile apps across Patna, Bihar, and India.
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
          {/* REQUIREMENT: Primary Keyword in one H2 Heading */}
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Mobile App Development Company in Patna: Scalable Apps Designed for Success
          </h2>
          <p>
            SmartWebLens has established itself as the leading mobile app engineering hub in Eastern India by prioritizing client value, performance, and code compliance. A successful corporate app must act as a reliable gateway for your inventory, services, and communication. Our team writes custom Kotlin and Swift codebases, alongside hybrid tools like Flutter, to ensure your mobile apps are fast, secure, and run gracefully on newer and older smartphones alike.
          </p>
          <p>
            By designing highly intuitive interfaces (UI/UX) and integrating quick-loading server API backends, we eliminate friction in checkout and sign-up flows. This optimization helps businesses across Bihar engage local buyers, send promotional push notifications directly to screens, and multiply their monthly revenue.
          </p>
        </section>

        {/* SERVICE OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Our Mobile Development Services: Custom Android & iOS Engineering
          </h2>
          <p>
            We handle the complete development life cycle—from initial interface mockups to final deployment on public store channels. Explore our primary mobile divisions:
          </p>
          
          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>1. Native Android App Development</h3>
          <p>
            Kotlin and Java remain the industry standards for pure Android performance. As the leading <strong>Android App Development Company Bihar</strong>, we build high-speed applications tailored to perform seamlessly across all smartphone formats.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>2. iOS App Development Services</h3>
          <p>
            For premium customer segments, we write secure, elegant iOS apps using Swift. Adhering to Apple's strict design parameters, we construct interfaces that match your brand's elite image.
          </p>

          <h3 style={{ fontSize: "1.3rem", color: "#0f172a", margin: "25px 0 10px" }}>3. Cross-Platform Flutter & React Native Apps</h3>
          <p>
            Deploy single-code architectures that run natively on both iOS and Android. This cross-platform approach saves up to 40% on layout design and development costs while ensuring future updates are fast and simple to maintain.
          </p>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 1 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 1:</div>
          <strong>File Name:</strong> <code>mobile-app-development-company-in-patna-office.webp</code><br />
          <strong>Alt Text:</strong> Mobile app developers in Patna designing a Flutter hybrid application at SmartWebLens Boring Road office.<br />
          <strong>Title Text:</strong> Mobile App Developers Patna - SmartWebLens
        </div>

        {/* BENEFITS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Direct Benefits of Launching Your App with SmartWebLens
          </h2>
          <p>
            Partnering with our experienced mobile engineers in Patna, Bihar, guarantees premium software resources designed for fast business scaling:
          </p>
          <ul>
            <li><strong>Automated Client Engagement:</strong> Use custom, unlimited push notifications to alert your audience about seasonal discounts, stock updates, and new services instantly.</li>
            <li><strong>Optimized Local Visibility:</strong> Connect your mobile app landing page with optimized local business citation directories to rank at the top of local map searches.</li>
            <li><strong>Safe Data Management:</strong> Secure cloud databases (MongoDB, encrypted PostgreSQL) and secure API endpoints prevent data leaks.</li>
          </ul>
        </section>

        {/* FEATURES */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Advanced Features Built Into Every Mobile Interface
          </h2>
          <p>
            We optimize every interface for maximum customer retention and ease of transaction processing:
          </p>
          <ul>
            <li><strong>UPI & Secure Card Gateways:</strong> Integration with trusted aggregators (Razorpay, PhonePe) for quick mobile checkout.</li>
            <li><strong>Offline Data Caching:</strong> Allow customers to browse critical menus, saved layouts, and contact forms even with limited internet connectivity.</li>
            <li><strong>Real-time Live Chat Integrations:</strong> Direct links to WhatsApp or live chat panels to answer user inquiries in under 2 minutes.</li>
          </ul>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 2 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 2:</div>
          <strong>File Name:</strong> <code>android-app-development-company-bihar.webp</code><br />
          <strong>Alt Text:</strong> High-performance Android application package designed by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> Android App Development Company Bihar
        </div>

        {/* WHY CHOOSE SMARTWEBLENS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Why Choose SmartWebLens: Fraser Road's Elite Mobile Team
          </h2>
          <p>
            Growing companies in Patna, Bihar, select us because of our execution speed, clear pricing structures, and direct developer access:
          </p>
          <ul>
            <li><strong>50/50 Payment Security:</strong> Pay only 50% upfront to initiate coding. The remaining balance is payable only after you review and approve the final setup.</li>
            <li><strong>Play Store/App Store Staging Help:</strong> We handle the entire submission checklist, resolving metadata parameters and store criteria.</li>
            <li><strong>24/7 Support Helpline:</strong> Direct contact with our engineers via phone or WhatsApp whenever you require database updates or minor revisions.</li>
          </ul>
        </section>

        {/* DEVELOPMENT PROCESS */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Our Mobile Development Process: Staged Execution for Quality
          </h2>
          <p>
            We follow a structured 5-step development pipeline that guarantees pristine, high-performing outputs:
          </p>
          <ol>
            <li><strong>Consultation & Scope:</strong> We map your target audience, analyze local mobile competition in Bihar, and select layout frameworks.</li>
            <li><strong>Wireframes & UI Design:</strong> We design interactive mockups, ensuring screen paths are intuitive and call-to-actions stand out.</li>
            <li><strong>Coding frontend and API Integration:</strong> Our developers write secure native and hybrid codebases and connect cloud databases.</li>
            <li><strong>Milestone Testing:</strong> We compile an executable APK file. You test on your devices and request minor refinements.</li>
            <li><strong>Public Deployment:</strong> We deploy your application to the Google Play Store and Apple App Store, and launch your promotional site!</li>
          </ol>
        </section>

        {/* PRICING OVERVIEW */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ fontSize: "1.85rem", color: "#236f79", borderLeft: "5px solid #f9ca24", paddingLeft: "15px", margin: "40px 0 20px" }}>
            Transparent Pricing Packages Crafted for Growth
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
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Basic Android Plan</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹14,999</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Retail Shops & local stores</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Dynamic business app, offline menu, WhatsApp support, free APK compilation, 30 days maintenance.</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Premium Standard Plan</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹24,999</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Schools & E-commerce Hubs</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Cross-platform app, admin panel console, UPI payment API integration, push notifications, 60 days support.</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}><strong>Custom Enterprise</strong></td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>₹49,999+</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Hospitals & Large Corporates</td>
                <td style={{ border: "1px solid #e2e8f0", padding: "12px" }}>Native Android & iOS apps, custom cloud database systems, SMS API bindings, 1 year priority developer support.</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* REQUIREMENT: Image SEO Suggestion 3 */}
        <div style={{ backgroundColor: "#f8fafc", border: "1px dashed #349ca9", padding: "18px", borderRadius: "8px", margin: "25px 0" }}>
          <div style={{ fontWeight: "bold", color: "#236f79", fontSize: "14px", textTransform: "uppercase", marginBottom: "8px" }}>📸 Image SEO Suggestion 3:</div>
          <strong>File Name:</strong> <code>ios-app-development-services-bihar.webp</code><br />
          <strong>Alt Text:</strong> Swift iOS mobile application layout designed by SmartWebLens in Patna, Bihar.<br />
          <strong>Title Text:</strong> iOS App Development Services
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
            Frequently Asked Questions: App Services in Patna, Bihar
          </h2>
          <p>
            To help you get started, here are clear answers to common questions about our web design services in Bihar.
          </p>

          <div style={{ marginTop: "20px" }}>
            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Which is the best mobile app development company in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> SmartWebLens is recognized as the best mobile app development company in Patna, Bihar, offering high-performance native and cross-platform apps using Flutter & React Native with absolute Play Store upload support.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: What is the cost of mobile app development services in Patna?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> The cost of mobile app development starts from ₹14,999 for standard Android business applications, including clean database panel setup, push notification integrations, and 1 year free server maintenance.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you design cross-platform hybrid applications for iOS and Android?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we specialize in high-performance cross-platform Flutter and React Native architectures that allow a single codebase to run elegantly on both Android and iOS devices, reducing your cost by 40%.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: How long does it take to deploy a mobile app on the Google Play Store?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> A standard business application takes between 10 to 15 business days for final compilation, staging review, and play console listing approval.
              </p>
            </details>

            <details style={{ padding: "15px 0", borderBottom: "1px solid #e2e8f0", cursor: "pointer" }}>
              <summary style={{ fontWeight: "bold", color: "#0f172a", fontSize: "16px" }}>Q: Do you provide post-delivery update support for apps in Bihar?</summary>
              <p style={{ margin: "10px 0 0 15px", color: "#4a5568" }}>
                <strong>A:</strong> Yes, we provide 30 days of comprehensive post-launch support at zero cost, which covers server optimizations, performance tracking, and direct developer helpline consultations.
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
            In modern mobile marketing, having a professional app is the ultimate differentiator. Don't let your competitors capture local leads. Partnering with a professional <strong>Mobile App Development Company in Patna</strong> like SmartWebLens ensures you secure a fast, secure, and scalable mobile platform built to convert local searches into revenue.
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
