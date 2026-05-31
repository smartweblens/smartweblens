import "./blog.css";

export const metadata = {
  title: "SmartWebLens Blog | Insights, Web & App Development Trends",
  description: "Insights, trends, and expert tips on web development, app creation, digital strategy, and growing your business online — delivered fast, just like our projects.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/blog",
  },
};

export default function BlogLayout({ children }) {
  return (
    <div className="blog-root-layout bg-slate-50 min-h-screen text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {children}
    </div>
  );
}
