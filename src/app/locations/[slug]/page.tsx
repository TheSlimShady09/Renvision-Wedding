import { Metadata } from "next";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

const locationData: Record<string, { title: string, h1: string, description: string }> = {
  "westchester": {
    title: "Westchester Wedding Videographer | Renivision Weddings",
    h1: "Westchester Wedding Videographer",
    description: "Luxury wedding videography in Westchester County, NY. Cinematic, editorial, and documentary wedding films for intentional couples.",
  },
  "tarrytown": {
    title: "Tarrytown Wedding Videographer | Renivision Weddings",
    h1: "Tarrytown Wedding Videographer",
    description: "Cinematic wedding films in Tarrytown, NY. We specialize in luxury wedding videography for Hudson Valley estates and venues.",
  },
  "hudson-valley": {
    title: "Hudson Valley Wedding Videographer | Cinematic Films",
    h1: "Hudson Valley Wedding Videographer",
    description: "Honest storytelling for your Hudson Valley wedding. We create fine art wedding films that feel like a fashion magazine come to life.",
  },
  "manhattan": {
    title: "Manhattan Wedding Videographer | Luxury NYC Films",
    h1: "Manhattan Wedding Videographer",
    description: "Documentary wedding videography NYC. We capture the energy and elegance of Manhattan weddings with a cinematic, editorial eye.",
  },
  "brooklyn": {
    title: "Brooklyn Wedding Videographer | Editorial Wedding Films NYC",
    h1: "Brooklyn Wedding Videographer",
    description: "Modern, cinematic wedding videographer in Brooklyn, NY. Capturing real moments and honest storytelling.",
  },
  "long-island": {
    title: "Long Island Wedding Videographer | Renivision Weddings",
    h1: "Long Island Wedding Videographer",
    description: "Fine art wedding films for Long Island celebrations. Editorial, unobtrusive, and deeply personal wedding videography.",
  },
  "nyc": {
    title: "NYC Wedding Videographer | New York Cinematic Films",
    h1: "New York Wedding Videographer",
    description: "Top-tier NYC wedding videographer specializing in documentary wedding films, elopements, and luxury celebrations.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = locationData[resolvedParams.slug];
  if (!data) return { title: "Location Not Found" };
  
  return {
    title: data.title,
    description: data.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({
    slug,
  }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = locationData[resolvedParams.slug];

  if (!data) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <h1 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">{data.h1}</h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
          {data.description}
        </p>
        <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed">
          At Renivision Weddings, our approach is focused on you. We want to ensure that your memories are preserved beautifully and authentically. If you are planning a wedding here and looking for a cinematic wedding filmmaker, we would love to connect.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-12 py-4 bg-[var(--color-renivision-text)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-renivision-accent)] transition-colors duration-300"
        >
          Inquire Now
        </Link>
      </AnimatedSection>
    </div>
  );
}
