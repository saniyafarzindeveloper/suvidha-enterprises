import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import CTA from "@/components/layout/CTA";
import Testimonial from "@/components/layout/Testimonial";
import FloatingActions from "@/components/layout/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suvidha Enterprises — Interior Designers in Ghatkopar, Mumbai",
  description:
    "Suvidha Enterprises is a Mumbai-based interior design studio in Ghatkopar offering residential &amp; commercial interiors, modular furniture, imported wallpapers &amp; space planning. Every detail, perfected.",
  metadataBase: new URL("https://www.suvidhaenterprises.in"),
  alternates: { canonical: "/" },
  keywords: [
    "interior designers Ghatkopar",
    "interior designers Mumbai",
    "interior decorators Ghatkopar",
    "modular furniture Mumbai",
    "commercial interior design Mumbai",
  ],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <FloatingActions />
        {children}

        <Testimonial />
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
