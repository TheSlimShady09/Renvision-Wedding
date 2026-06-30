import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
          eyebrow="Renivision Weddings"
          title="Love, written in light — and remembered forever."
          subtitle="Cinematic wedding films, crafted to be felt for generations — Westchester · Hudson Valley · New York City."
          videoSrc="https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-kissing-under-a-veil-44755-large.mp4"
        />
      </section>

      {/* Intro / Philosophy Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative">
        <AnimatedSection className="flex flex-col items-center">
          {/* Gold Hairline Thread Link from Hero */}
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-renivision-accent)]/40 to-transparent mb-8"></div>
          
          {/* Gold Monogram Brand Seal */}
          <div className="mb-6 flex items-center justify-center relative select-none">
            <div className="w-16 h-16 rounded-full border border-[var(--color-renivision-accent)]/30 flex items-center justify-center relative">
              <div className="absolute inset-[3px] rounded-full border border-[var(--color-renivision-accent)]/10"></div>
              <span className="font-serif text-lg tracking-[0.2em] text-[var(--color-renivision-accent)] translate-x-[1px] font-light">R</span>
            </div>
          </div>
          
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block font-semibold">Our Philosophy</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight max-w-4xl mx-auto text-[var(--foreground)]">
            We desire to design a visual, cinematic <span className="italic font-normal text-[var(--color-renivision-accent)]">poem</span> that displays the beauty of <span className="italic font-normal text-[var(--color-renivision-accent)]">marriage</span>.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-neutral-700 max-w-3xl mx-auto">
            We believe that honest human moments are as beautiful as the most incredible landscapes. It’s our aim to perfectly blend the two together to summon emotion that is joy-filled and timeless. Our mission is to craft a piece of art that causes you to reflect on the heart of your marriage for the rest of your lives.
          </p>
          
          {/* Bottom Hairline Thread */}
          <div className="w-[1px] h-12 bg-gradient-to-t from-[var(--color-renivision-accent)]/30 to-transparent mt-10"></div>
        </AnimatedSection>
      </section>

      {/* About / Our Story Section */}
      <section id="about" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto editorial-border border-t">
        {/* 1 — Text appears first */}
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-5 block font-semibold">Our Story</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-6 leading-tight text-[var(--foreground)]">
            Westchester & <span className="italic font-normal text-[var(--color-renivision-accent)]">New York</span> Wedding Videographer
          </h2>
          <h3 className="text-sm tracking-[0.2em] uppercase opacity-60 mb-10 font-sans">
            Documenting Legacies Since 2014
          </h3>
          <div className="space-y-6 text-lg leading-relaxed font-sans text-neutral-700">
            <p>
              Hi, my name is Renis, a wedding videographer based in Westchester, New York. Over the past 10 years, I have had the honor of documenting weddings and elopements all across the world.
            </p>
            <p>
              I firmly believe less is more. I love my family, God, and the beautiful world he has designed. When not creating art, I can be found building Lego towers with my three boys. We enjoy spending quiet days with our family and friends in New York.
            </p>
          </div>
        </AnimatedSection>

        {/* 2 — Photo appears next */}
        <AnimatedSection delay={0.25} className="mt-16 md:mt-20">
          <div className="aspect-[16/10] relative overflow-hidden bg-neutral-100 rounded-[2.5rem] shadow-xl group">
            <Image
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1400"
              alt="Renis filming a luxury wedding"
              fill
              className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.25em] text-white/70 font-sans z-10 select-none">
              RENIVISION ARCHIVES
            </div>
          </div>
        </AnimatedSection>

        {/* 3 — Client comment appears last */}
        <AnimatedSection delay={0.5} className="mt-16 md:mt-20 max-w-3xl mx-auto">
          <div className="p-10 md:p-14 bg-[#F5F4F0]/70 rounded-[2.5rem] border border-neutral-200/60 relative overflow-hidden text-center">
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-serif text-[8rem] text-[var(--color-renivision-accent)]/15 select-none pointer-events-none leading-none">“</span>
            <blockquote className="font-serif text-xl md:text-2xl italic text-neutral-800 leading-relaxed relative z-10 mb-8 pt-6">
              "Their talent speaks for itself and as a bride, I can't express how much of a relief it was to trust their vision, so I could stay in the moment. Choosing Renivision was the best investment we've made thus far!"
            </blockquote>
            <div className="flex items-center justify-center gap-3 font-sans relative z-10">
              <span className="w-6 h-[1px] bg-[var(--color-renivision-accent)]"></span>
              <span className="text-xs uppercase tracking-widest font-semibold text-neutral-500">Christine & Ronald</span>
              <span className="w-6 h-[1px] bg-[var(--color-renivision-accent)]"></span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Films Section */}
      <section id="films" className="relative dark-section py-20 md:py-28 pl-4 sm:pl-6 lg:pl-8 overflow-hidden">
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
            <div className="mb-12 pr-4 sm:pr-6 lg:pr-8 max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block font-semibold">Our Portfolio</span>
              <h2 className="font-serif text-4xl md:text-6xl mb-6">Featured Films</h2>
              <p className="font-sans text-lg opacity-80 max-w-2xl mx-auto">
                Wedding films designed to last and be passed down for generations. Exploring genuine emotions and editorial elegance.
              </p>
            </div>
          </AnimatedSection>
          
          <FilmCarousel films={films} />
        </div>
      </section>

      {/* Journal / Blog Section */}
      <section id="journal" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto editorial-border border-b border-t">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block">The Journal</span>
            <h2 className="font-serif text-5xl md:text-7xl uppercase tracking-wider text-opacity-80">Articles & Advice</h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-24 items-stretch">
          {journalPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1} className="h-full">
              <Link href={`/journal/${post.slug}`} className="group flex h-full flex-col cursor-pointer">
                <TiltCard>
                  <div className="bg-neutral-100 mb-8 overflow-hidden relative aspect-[4/3] rounded-[2rem]">
                    <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </TiltCard>
                <div className="flex flex-1 flex-col pl-6 md:pl-8 border-l editorial-border font-sans">
                  <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-3">{post.date}</p>
                  <h3 className="font-serif text-2xl md:text-3xl mb-4 min-h-[4.5rem] md:min-h-[6.5rem] line-clamp-2 group-hover:text-[var(--color-renivision-accent)] transition-colors leading-snug">{post.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Testimonials / Experience Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-neutral-50 border-y border-neutral-100">
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
      <section id="contact" className="relative dark-section py-20 md:py-28 overflow-hidden bg-[var(--color-renivision-dark)]">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 z-0"
          src="https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-embracing-in-nature-44752-large.mp4"
        />
        {/* Dark overlay to guarantee text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <AnimatedSection className="text-center md:text-left flex flex-col items-center md:items-start text-white">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-4 block font-semibold">Say Hello</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-white">
              Let's Co-create <br />Your <span className="italic font-normal text-[var(--color-renivision-accent)]">Legacy</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md font-sans leading-relaxed mx-auto md:mx-0">
              We take on a limited number of commissions each year to ensure every film receives our full creative dedication and diligent attention to detail.
            </p>
            <div className="space-y-4 text-sm font-sans text-white/60">
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-renivision-accent)]"></span>
                Westchester · Hudson Valley · NYC & Worldwide
              </p>
              <p className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-renivision-accent)]"></span>
                Response time: Within 24-48 hours
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            {/* Luxury Concierge Inquiry Card - Glassmorphism style */}
            <div className="bg-black/40 backdrop-blur-md p-8 sm:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden text-white">
              <span className="absolute -bottom-10 -right-10 font-serif text-[12rem] text-[var(--color-renivision-accent)]/5 select-none pointer-events-none leading-none">R</span>

              <h3 className="font-serif text-2xl md:text-3xl mb-8 text-white font-light leading-snug">
                Inquire <span className="italic font-normal text-[var(--color-renivision-accent)]">Availability</span>
              </h3>
              
              <form className="space-y-6 font-sans relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="fullName" className="text-xs uppercase tracking-widest mb-2 text-white/70">Full name *</label>
                    <input type="text" id="fullName" name="fullName" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="fianceName" className="text-xs uppercase tracking-widest mb-2 text-white/70">Fiance's full name *</label>
                    <input type="text" id="fianceName" name="fianceName" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest mb-2 text-white/70">Email *</label>
                    <input type="email" id="email" name="email" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="text-xs uppercase tracking-widest mb-2 text-white/70">Phone number *</label>
                    <input type="tel" id="phone" name="phone" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="referral" className="text-xs uppercase tracking-widest mb-2 text-white/70">How did you find us? *</label>
                    <select id="referral" name="referral" defaultValue="" required className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-white [&>option]:text-neutral-900 text-sm">
                      <option value="" disabled>Select an option</option>
                      <option value="instagram">Instagram</option>
                      <option value="google">Google search</option>
                      <option value="referral">Friend or family referral</option>
                      <option value="venue">Venue or vendor</option>
                      <option value="theknot">The Knot / WeddingWire</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="eventDate" className="text-xs uppercase tracking-widest mb-2 text-white/70">Event date *</label>
                    <input type="text" id="eventDate" name="eventDate" placeholder="MM/DD/YYYY" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white placeholder-white/30" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <label htmlFor="venue" className="text-xs uppercase tracking-widest mb-2 text-white/70">Wedding Venue Location *</label>
                    <input type="text" id="venue" name="venue" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="style" className="text-xs uppercase tracking-widest mb-2 text-white/70">Style of Wedding *</label>
                    <input type="text" id="style" name="style" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white" required />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="instagram" className="text-xs uppercase tracking-widest mb-2 text-white/70">Instagram handles *</label>
                  <input type="text" id="instagram" name="instagram" placeholder="@you & @your_fiance" className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors text-sm text-white placeholder-white/30" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="likeAboutWork" className="text-xs uppercase tracking-widest mb-2 text-white/70">What do you like about our work? *</label>
                  <textarea id="likeAboutWork" name="likeAboutWork" rows={3} className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors resize-none text-sm leading-relaxed text-white" required></textarea>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="story" className="text-xs uppercase tracking-widest mb-2 text-white/70">Tell us your story? *</label>
                  <textarea id="story" name="story" rows={4} className="bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[var(--color-renivision-accent)] transition-colors resize-none text-sm leading-relaxed text-white" required></textarea>
                </div>

                <p className="text-[10px] text-white/40 leading-relaxed pt-2">
                  This form is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-renivision-accent)] transition-colors">Privacy Policy</a>{" "}and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--color-renivision-accent)] transition-colors">Terms of Service</a>{" "}apply.
                </p>
                <p className="text-[10px] text-white/40 leading-relaxed">
                  Clicking SEND confirms you're okay with getting texts from ReniVision. Message and/or data rates may apply.
                </p>

                <button type="submit" className="w-full px-12 py-4 bg-white text-[var(--color-renivision-dark)] uppercase tracking-widest text-sm hover:bg-[var(--color-renivision-accent)] hover:text-white active:scale-95 transition-all duration-300 cursor-pointer font-semibold">
                  Send Inquiry
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
