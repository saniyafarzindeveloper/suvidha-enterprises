import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://www.suvidhaenterprises.in"),

  title: {
    default: "Suvidha Enterprises | Interior Designers in Ghatkopar, Mumbai",
    template: "%s | Suvidha Enterprises",
  },

  description:
    "Suvidha Enterprises is a Mumbai-based interior design studio specializing in residential interiors, commercial interiors, turnkey projects, modular furniture, imported wallpapers, false ceilings, flooring, blinds, and complete space planning.",

  keywords: [
    "Interior Designers Mumbai",
    "Interior Designers Ghatkopar",
    "Interior Decorators Mumbai",
    "Commercial Interior Designers Mumbai",
    "Residential Interior Designers Mumbai",
    "Turnkey Interior Contractors",
    "Modular Kitchen Mumbai",
    "Modular Furniture",
    "Imported Wallpapers Mumbai",
    "False Ceiling",
    "Blinds",
    "Vinyl Flooring",
    "Interior Design Studio",
    "Suvidha Enterprises",
  ],

  authors: [
    {
      name: "Suvidha Enterprises",
    },
  ],

  creator: "Suvidha Enterprises",

  publisher: "Suvidha Enterprises",

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.suvidhaenterprises.in",
    siteName: "Suvidha Enterprises",

    title: "Suvidha Enterprises | Interior Designers in Mumbai",

    description:
      "Premium residential & commercial interior designers in Ghatkopar, Mumbai. Complete turnkey interiors, modular furniture, imported wallpapers, blinds & flooring.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Suvidha Enterprises",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Suvidha Enterprises",
    description:
      "Premium residential & commercial interior designers in Mumbai.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  category: "Interior Design",
};

export const viewport: Viewport = {
  themeColor: "#1A1814",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "InteriorDesigner",

  name: "Suvidha Enterprises",

  image: "https://www.suvidhaenterprises.in/suvidha-logo.png",

  logo: "https://www.suvidhaenterprises.in/suvidha-logo.png",

  "@id": "https://www.suvidhaenterprises.in",

  url: "https://www.suvidhaenterprises.in",

  telephone: "+91-8419911555",

  email: "suvidhaenterprises@ymail.com",

  priceRange: "$$",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Shop No. 5, Lakhani Estate, Near New Life Hospital, L.B.S Marg",

    addressLocality: "Ghatkopar West",

    addressRegion: "Maharashtra",

    postalCode: "400086",

    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",

    latitude: 19.0904,

    longitude: 72.9046,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",

      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],

      opens: "10:00",

      closes: "19:00",
    },
  ],

  areaServed: [
    {
      "@type": "City",

      name: "Mumbai",
    },
    {
      "@type": "AdministrativeArea",

      name: "Maharashtra",
    },
  ],

  sameAs: [
    "https://www.instagram.com/suvidhainteriors._?igsh=em91OGF2OW15bTZ6",

    "https://www.google.com/maps?q=Ghatkopar%20LBS%20Marg%20Mumbai&output=embed",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

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