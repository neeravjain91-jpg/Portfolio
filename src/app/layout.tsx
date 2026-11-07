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
  title: "Neerav Jain | Applied ML Engineer & Systems Researcher",
  description:
    "Engineering portfolio of Neerav Jain. Physics-informed neural modeling, spatiotemporal Earth observation systems, Siamese biometric computer vision, and high-reliability production AI platforms with 5+ verified live deployments.",
  keywords: [
    "Neerav Jain",
    "Machine Learning Engineer",
    "Deep Learning",
    "Digital Twin",
    "AeroPulse-X",
    "Ocean Subsurface ML",
    "Wildfire Intelligence",
    "Computer Vision",
    "PyTorch",
    "FastAPI",
    "Next.js",
  ],
  authors: [{ name: "Neerav Jain", url: "https://github.com/neeravjain91-jpg" }],
  openGraph: {
    title: "Neerav Jain | Applied ML Engineer & Systems Researcher",
    description:
      "Production-ready portfolio showcasing verified live AI systems, SIH26054 UAV digital twin, subsurface ocean ML, wildfire forecasting, and biometric verification.",
    url: "https://github.com/neeravjain91-jpg",
    siteName: "Neerav Jain Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#080b11] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
