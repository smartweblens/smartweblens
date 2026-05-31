import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-head",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  title: "Smart Web Lens | Best Website Development Company in Patna",
  description: "Smart Web Lens is the leading website development company in Patna, Bihar. We engineer premium responsive websites, mobile apps, and custom software in 5 days.",
  alternates: {
    canonical: "https://www.smartweblens.xyz/",
  },
  openGraph: {
    title: "Website Development Company in Patna | Smart Web Lens",
    description: "Get elite corporate websites, mobile apps, and custom software developed in Patna, Bihar. 5-day express deployment and 24/7 support by Smart Web Lens.",
    url: "https://www.smartweblens.xyz/",
    siteName: "Smart Web Lens",
    images: [
      {
        url: "https://www.smartweblens.xyz/swl2.PNG",
        width: 1200,
        height: 630,
        alt: "Smart Web Lens Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Development Company in Patna | Smart Web Lens",
    description: "Top web design and software engineering agency in Patna, Bihar by Smart Web Lens. Custom dynamic websites and Play Store ready Android apps.",
    images: ["https://www.smartweblens.xyz/swl2.PNG"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

