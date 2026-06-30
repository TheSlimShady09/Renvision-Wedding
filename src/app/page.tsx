import { Metadata } from "next";
import Image from "next/image";
import VideoHero from "@/components/VideoHero";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import FilmCarousel from "@/components/FilmCarousel";

export const metadata: Metadata = {
  title: "Westchester & New York Wedding Videographer | Renivision Weddings",
  description: "Cinematic and documentary wedding films in Westchester, Hudson Valley, and NYC. Luxury wedding videography for intentional humans.",
};

const films = [
  { 
    id: 1, 
    title: "Henah & Chris", 
    location: "NYC, New York", 
    type: "The Riverside Church & The Beekman", 
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    desc: "Henah and Chris's Wedding at the Beekman, Thompson Hotel downtown Manhattan, was just breathtaking. The two got married at The Riverside Church, one of the best-looking churches in the city. The rest of the evening was filled with love from family and friends."
  },
  { 
    id: 2, 
    title: "Martina & Valmir", 
    location: "Brooklyn, New York", 
    type: "Cinematic Wedding Film", 
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    desc: "A beautiful love story captured against the iconic industrial backdrop of Brooklyn. An emotional ceremony followed by an intimate and high-energy celebration."
  },
  { 
    id: 3, 
    title: "Sherleen & Tushar", 
    location: "Fords, New Jersey", 
    type: "Traditional Highlight Film", 
    img: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800",
    desc: "A vibrant multi-day celebration filled with rich cultural traditions, color, energy, and deeply emotional family exchanges."
  },
  { 
    id: 4, 
    title: "Christine & Ronald", 
    location: "New Rochelle, New York", 
    type: "Fine Art Wedding Film", 
    img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800",
    desc: "An elegant waterfront affair in New Rochelle, balancing editorial bridal portraits with authentic, candid documentary moments."
  },
  { 
    id: 5, 
    title: "Danielle & Tyler", 
    location: "Wading River, New York", 
    type: "East End Wedding Film", 
    img: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=800",
    desc: "A serene coastal celebration on Long Island's East End. Timeless romance met with natural elements and beautiful golden hour light."
  },
  { 
    id: 6, 
    title: "Samantha & Doug", 
    location: "NYC, New York", 
    type: "Manhattan Celebration", 
    img: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800",
    desc: "A classic downtown Manhattan wedding captured with a modern cinematic approach, focusing on intimate expressions and the city's energy."
  }
];

const journalPosts = [
  {
    slug: "find-the-perfect-wedding-videographer",
    date: "Dec 31, 2022",
    title: "Find the Perfect Wedding Videographer: Tips for Choosing a Professional Who Pays Attention to Detail",
    excerpt: "Attention to detail is an important quality to look for in a wedding videographer. Learn how capturing important moments, fulfilling special requests, and editorial precision shape your film.",
    img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "the-importance-of-a-personal-connection",
    date: "Dec 31, 2022",
    title: "The Importance of a Personal Connection in Wedding Videography",
    excerpt: "For many engaged couples, the personal connection they have with their filmmaker is a vital factor. Explore how communication, compatibility, and trust elevate your story.",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "why-creative-input-is-important",
    date: "Dec 31, 2022",
    title: "Why Creative Input is Important in Wedding Videography",
    excerpt: "Discover how pre-wedding consultations, unique shot ideas, and artistic collaboration help capture unforgettable moments that match your personality.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "the-importance-of-style-and-aesthetic",
    date: "Dec 31, 2022",
    title: "The Importance of Style and Aesthetic in Wedding Videography",
    excerpt: "A wedding film is a lasting legacy. Learn about different genres, editing styles, and how lighting and camera angles impact the final look of your film.",
    img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Home() {
  return (
    <>
      <section id="home">
        <VideoHero 
          title="honest storytelling for intentional humans."
          tagline="Wedding videography crafted with diligent attention to detail. We produce a small batch of weddings a year. On purpose. The result, a display narrative designed to last and be passed down for generations."
          videoSrc="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-kissing-under-a-veil-44755-large.mp4"
        />
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <AnimatedSection>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">Our Philosophy</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight max-w-4xl mx-auto">
            We desire to design a visual, cinematic poem that displays the beauty of marriage.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 opacity-90 max-w-3xl mx-auto">
            We believe that honest human moments are as beautiful as the most incredible landscapes. It’s our aim to perfectly blend the two together to summon emotion that is joy-filled and timeless. Our mission is to craft a piece of art that causes you to reflect on the heart of your marriage for the rest of your lives.
          </p>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto editorial-border border-t">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
          <AnimatedSection>
            <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800"
                alt="Renis filming a luxury wedding"
                fill
                className="object-cover animate-pulse-slow"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">Meet Renis</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">
              Westchester & New York Wedding Videographer
            </h2>
            <h3 className="text-sm tracking-[0.2em] uppercase opacity-60 mb-8 font-sans">
              Documenting Legacies Since 2014
            </h3>
            <div className="space-y-6 text-lg opacity-90 leading-relaxed font-sans">
              <p>
                Hi, my name is Renis, a wedding videographer based in Westchester, New York. Over the past 10 years, I have had the honor of documenting weddings and elopements all across the world.
              </p>
              <p>
                I firmly believe less is more. I love my family, God, and the beautiful world he has designed. When not creating art, I can be found building Lego towers with my three boys. We enjoy spending quiet days with our family and friends in New York.
              </p>
            </div>
            
            {/* Testimonial 1 */}
            <div className="mt-12 pt-8 border-t editorial-border italic text-base opacity-80">
              <p className="mb-4">
                "Their talent speaks for itself and as a bride, I can't express how much of a relief it was to trust their vision, so I could stay in the moment. Choosing Renivision was the best investment we've made thus far!"
              </p>
              <span className="text-xs uppercase tracking-widest font-sans not-italic font-medium">— Christine & Ronald</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Films Section */}
      <section id="films" className="relative dark-section py-24 md:py-32 pl-4 sm:pl-6 lg:pl-8 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-60"
          src="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-kissing-under-a-veil-44755-large.mp4"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto pr-0">
          <AnimatedSection>
            <div className="mb-12 pr-4 sm:pr-6 lg:pr-8 max-w-7xl mx-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">Our Portfolio</span>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Featured Films</h2>
              <p className="font-sans text-lg opacity-80 max-w-2xl">
                Wedding films designed to last and be passed down for generations. Exploring genuine emotions and editorial elegance.
              </p>
            </div>
          </AnimatedSection>
          
          <FilmCarousel films={films} />
        </div>
      </section>

      {/* Journal / Blog Section */}
      <section id="journal" className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto editorial-border border-b border-t">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">The Journal</span>
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-wider text-opacity-80">Articles & Advice</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
          {journalPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1} className={index % 2 === 1 ? "md:mt-24" : ""}>
              <div className="group cursor-pointer">
                <TiltCard>
                  <div className={`bg-neutral-100 mb-8 overflow-hidden relative ${index % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </TiltCard>
                <div className="pl-4 border-l editorial-border font-sans">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-3">{post.date}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-[var(--color-renivision-accent)] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed max-w-md">{post.excerpt}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials / Experience Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center font-sans">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] mb-6 block">Client Experience</span>
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-neutral-800">
              "Renis has outdone himself and my expectations beyond belief. The experience was amazing. We were comfortable and everything was natural because he made the experience fun! The result was everything I would have hoped for and more..."
            </blockquote>
            <span className="text-sm uppercase tracking-widest font-medium text-neutral-500">— Martina & Valmir</span>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <AnimatedSection>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">Say Hello</span>
            <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight">Inquire</h2>
            <p className="text-lg opacity-80 mb-12 max-w-md font-sans">
              We take on a limited number of weddings each year to ensure every film receives our full creative dedication and diligent attention to detail.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <form className="space-y-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest mb-2 opacity-70">Name</label>
                  <input type="text" id="name" className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest mb-2 opacity-70">Email</label>
                  <input type="email" id="email" className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest mb-2 opacity-70">Wedding Date</label>
                  <input type="text" id="date" placeholder="MM/DD/YYYY" className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="venue" className="text-xs uppercase tracking-widest mb-2 opacity-70">Venue & Location</label>
                  <input type="text" id="venue" className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors" required />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-xs uppercase tracking-widest mb-2 opacity-70">Message</label>
                <textarea id="message" rows={4} className="bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors resize-none" required></textarea>
              </div>
              <button type="button" className="w-full md:w-auto px-12 py-4 bg-[var(--color-renivision-text)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-renivision-accent)] transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
