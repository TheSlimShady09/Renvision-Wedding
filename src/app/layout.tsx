import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CinematicIntro from "@/components/CinematicIntro";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Renivision Weddings",
    default: "Westchester & New York Wedding Videographer | Renivision Weddings",
  },
  description:
    "Cinematic and editorial wedding films for intentional humans. Serving Westchester, Hudson Valley, NYC, and worldwide.",
  metadataBase: new URL("https://renivisionweddings.com"), // Placeholder domain
  openGraph: {
    title: "Renivision Weddings",
    description: "Honest storytelling for intentional humans.",
    url: "https://renivisionweddings.com",
    siteName: "Renivision Weddings",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Renivision Weddings",
    "image": "",
    "@id": "",
    "url": "https://renivisionweddings.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tarrytown",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "areaServed": [
      "Westchester County",
      "Hudson Valley",
      "New York City"
    ],
    "sameAs": [
      "https://instagram.com/renivision_weddings",
      "https://youtube.com/@ReniVisionWeddings",
      "https://facebook.com/RenivisionWeddings"
    ]
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <CinematicIntro />
        <Navbar />
        <main className="flex-1">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
