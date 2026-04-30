import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter", // Fixed naming for consistency
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOCUS ASTU | A Home Away From Home",
  description: "Official landing page for FOCUS ASTU Christian Fellowship - Adama Science and Technology University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased selection:bg-brand-gold selection:text-brand-navy font-outfit`}
      >
        {/* The Header appears at the top of every page */}
        <Header />

        {/* 
            Wrapping children in <main> ensures content is 
            structured correctly for accessibility and SEO 
        */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* The Footer appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}