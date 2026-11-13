import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neerav-jain-portfolio.vercel.app"),
  title: {
    default: "Neerav Jain | Applied ML Engineer & Systems Researcher",
    template: "%s | Neerav Jain",
  },
  description:
    "Engineering portfolio of Neerav Jain (B.Tech CSE AI & ML, ABES Engineering College). Physics-informed neural modeling, spatiotemporal Earth observation systems, Siamese biometric computer vision, and high-reliability production AI platforms with 5+ verified live deployments.",
  keywords: [
    "Neerav Jain",
    "Applied Machine Learning Engineer",
    "Deep Learning Researcher",
    "Physics-Informed Neural Networks",
    "Digital Twin",
    "AeroPulse-X",
    "Ocean Subsurface ML",
    "Wildfire Intelligence",
    "Biometric Verification",
    "PyTorch",
    "FastAPI",
    "Next.js 14",
  ],
  authors: [{ name: "Neerav Jain", url: "https://github.com/neeravjain91-jpg" }],
  creator: "Neerav Jain",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Neerav Jain | Applied ML Engineer & Systems Researcher",
    description:
      "Production-ready portfolio showcasing verified live AI systems, SIH26054 UAV digital twin, subsurface ocean ML, wildfire forecasting, and biometric verification.",
    url: "https://neerav-jain-portfolio.vercel.app",
    siteName: "Neerav Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neerav Jain | Applied ML Engineer & Systems Researcher",
    description:
      "Engineering portfolio of Neerav Jain. Physics-informed neural models, spatiotemporal satellite forecasting, and verified cloud deployments.",
    creator: "@neeravjain91",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://neerav-jain-portfolio.vercel.app/#person",
      name: "Neerav Jain",
      jobTitle: "Applied Machine Learning Engineer & Systems Researcher",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "ABES Engineering College",
          department: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
        },
        {
          "@type": "EducationalOrganization",
          name: "Government Polytechnic",
          department: "Electronics Engineering",
        },
      ],
      url: "https://neerav-jain-portfolio.vercel.app",
      sameAs: [
        "https://github.com/neeravjain91-jpg",
        "https://www.linkedin.com/in/neerav-jain-b355832a4/",
      ],
      knowsAbout: [
        "Machine Learning",
        "Deep Learning",
        "Physics-Informed Neural Networks",
        "Computer Vision",
        "Spatiotemporal Data Assimilation",
        "Digital Twins",
        "PyTorch",
        "FastAPI",
        "Next.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://neerav-jain-portfolio.vercel.app/#website",
      url: "https://neerav-jain-portfolio.vercel.app",
      name: "Neerav Jain Developer Portfolio",
      description:
        "Official developer portfolio and research case studies for Neerav Jain.",
      author: {
        "@id": "https://neerav-jain-portfolio.vercel.app/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-[#080b11] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
