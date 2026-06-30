import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import BlogInteractions from "@/components/BlogInteractions";

type ArticleSection = {
  type: "paragraph" | "quote" | "subheading" | "image";
  content: string;
  subContent?: string; // e.g. quote author or image caption
};

type ArticleData = {
  title: string;
  category: string;
  date: string;
  author: string;
  readingTime: string;
  heroImg: string;
  metaDescription: string;
  sections: ArticleSection[];
};

const journalData: Record<string, ArticleData> = {
  "find-the-perfect-wedding-videographer": {
    title: "Find the Perfect Wedding Videographer: Tips for Choosing a Professional Who Pays Attention to Detail",
    category: "Planning Advice",
    date: "Dec 31, 2022",
    author: "Renis Wed",
    readingTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    metaDescription: "Attention to detail is an important quality to look for in a wedding videographer. Learn how capturing important moments and editorial precision shape your film.",
    sections: [
      {
        type: "paragraph",
        content: "Your wedding day is a tapestry of fleeting moments—a subtle tear running down a parent's cheek, an quiet exchange of glances before the ceremony, or a bursts of laughter during the speeches. While photography captures the stillness of these moments, videography preserves the breath, movement, and voice. However, not all videographers are created equal. Finding the perfect filmmaker requires looking beyond a basic portfolio and understanding their attention to detail."
      },
      {
        type: "subheading",
        content: "Why Attention to Detail Matters"
      },
      {
        type: "paragraph",
        content: "A detailed-oriented videographer doesn't just point a camera and hit record. They are constantly scanning the environment to capture secondary motions and micro-expressions. They coordinate with the lighting team to ensure your skin tones look natural, monitor audio feeds to isolate your vows from ambient wind noise, and compositionally frame every shot to tell a story. When these small factors are managed meticulously, the final film transitions from a mere home video to an editorial masterpiece."
      },
      {
        type: "quote",
        content: "Cinema is not about what is in the frame, it is about how the pieces fit together to invoke a feeling that lives forever.",
        subContent: "Renis, Lead Filmmaker"
      },
      {
        type: "subheading",
        content: "Key Questions to Ask Your Prospective Videographer"
      },
      {
        type: "paragraph",
        content: "When interviewing videographers, look for depth in their answers. Ask them how they handle low-light receptions, how many cameras they use during the ceremony to guarantee coverage, and what their approach is to audio recording. A true professional will eagerly discuss their backup audio systems, high-dynamic-range lenses, and how they coordinate with your photographer to avoid getting in each other's frames."
      },
      {
        type: "paragraph",
        content: "Lastly, pay attention to their editing workflow. The pacing of the music, the color grading, and the structure of the narrative are where a film truly comes together. Choose a videographer whose style resonates with your aesthetic, and whose attention to detail gives you the confidence to fully let go and enjoy your wedding day."
      }
    ]
  },
  "the-importance-of-a-personal-connection": {
    title: "The Importance of a Personal Connection in Wedding Videography",
    category: "Storytelling",
    date: "Dec 31, 2022",
    author: "Renis Wed",
    readingTime: "4 min read",
    heroImg: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=1200",
    metaDescription: "The personal connection you have with your filmmaker is a vital factor. Explore how communication, compatibility, and trust elevate your story.",
    sections: [
      {
        type: "paragraph",
        content: "Unlike other vendors who work behind the scenes, your videographer is with you during your most vulnerable, intimate moments. From the morning preparations in your robe to the emotional private vows right before walking down the aisle, your filmmaker is there. This is why a personal connection is not just a nice bonus—it is an absolute necessity for producing authentic films."
      },
      {
        type: "subheading",
        content: "Vulnerability Breeds Authenticity"
      },
      {
        type: "paragraph",
        content: "If you feel uncomfortable or performative around your videographer, that tension will inevitably translate onto the screen. When you have a genuine connection with your filmmaker, you forget the presence of the camera. You laugh naturally, cry without holding back, and let your guard down. It is in these unscripted, comfortable spaces that the most honest and beautiful footage is captured."
      },
      {
        type: "quote",
        content: "The best films are made when the couple stops acting for the camera and starts living for each other.",
        subContent: "Renivision Philosophy"
      },
      {
        type: "subheading",
        content: "Building Trust Before the Big Day"
      },
      {
        type: "paragraph",
        content: "We believe in establishing a relationship long before the wedding day. Through consultations, virtual coffees, and casual chats, we align on your preferences, your comfort levels, and your vision. Understanding your story, how you met, and what matters most to you helps us tailor our filming style on the day to highlight your unique dynamic."
      },
      {
        type: "paragraph",
        content: "When your wedding day finally arrives, we want to step into the room not as strangers with equipment, but as trusted creative partners who are there to honor and preserve your legacy."
      }
    ]
  },
  "why-creative-input-is-important": {
    title: "Why Creative Input is Important in Wedding Videography",
    category: "Artistic Direction",
    date: "Dec 31, 2022",
    author: "Renis Wed",
    readingTime: "4 min read",
    heroImg: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    metaDescription: "Discover how pre-wedding consultations, unique shot ideas, and artistic collaboration help capture unforgettable moments that match your personality.",
    sections: [
      {
        type: "paragraph",
        content: "A luxury wedding film is a collaborative piece of art. While you are hiring a professional for their creative eye, technical skills, and unique editorial pacing, your personal creative input is what gives the film its soul. Collaborative planning ensures the final product is not a generic template, but a reflection of your personality."
      },
      {
        type: "subheading",
        content: "Defining Your Visual Narrative"
      },
      {
        type: "paragraph",
        content: "Do you prefer a moody, cinematic film that focuses on deep colors and slow pacing? Or are you drawn to a high-energy, vintage Super 8 documentary style filled with quick cuts, natural light, and candid laughter? By sharing your references, favorite movies, and color tones, you provide the artistic anchor from which we build your wedding film's visual identity."
      },
      {
        type: "quote",
        content: "We do not just document weddings; we interpret them. Your input is the raw material of our art.",
        subContent: "Creative Team"
      },
      {
        type: "subheading",
        content: "The Pre-Wedding Collaboration"
      },
      {
        type: "paragraph",
        content: "Our pre-wedding consultations are designed to dive deep into these details. We discuss the schedule, the lighting of your venue, specific moments of high emotional value (such as letters read in private), and any unconventional ideas you want to explore. This cooperative foundation allows us to capture the day with absolute clarity and artistic focus."
      }
    ]
  },
  "the-importance-of-style-and-aesthetic": {
    title: "The Importance of Style and Aesthetic in Wedding Videography",
    category: "Aesthetics",
    date: "Dec 31, 2022",
    author: "Renis Wed",
    readingTime: "5 min read",
    heroImg: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=1200",
    metaDescription: "A wedding film is a lasting legacy. Learn about different genres, editing styles, and how lighting and camera angles impact the final look.",
    sections: [
      {
        type: "paragraph",
        content: "Style is not merely a filter applied in editing; it is the lens through which your memories are interpreted. In wedding videography, style dictates how the story is paced, how colors are balanced, and how sound is integrated. A cohesive, premium aesthetic elevates your film from a simple recording into a timeless heirloom."
      },
      {
        type: "subheading",
        content: "Cinematic vs. Documentary: Finding Your Balance"
      },
      {
        type: "paragraph",
        content: "Cinematic videography utilizes techniques derived from narrative filmmaking—dramatic lighting, shallow depth of field, stabilizers, and carefully chosen angles to build a grand, emotional scale. Documentary videography, on the other hand, values raw, unmanipulated moments, capturing events as they unfold naturally without directing the action. The most powerful films balance both: the grandeur of cinema paired with the authenticity of a documentary."
      },
      {
        type: "quote",
        content: "Aesthetic is the silent language of emotion. It tells you how to feel before you even understand why.",
        subContent: "Editorial Guild"
      },
      {
        type: "subheading",
        content: "Pacing, Color, and Purity"
      },
      {
        type: "paragraph",
        content: "Every decision in our editing room is guided by a desire for clean, timeless aesthetics. We avoid fleeting editing trends that will look dated in five years. Instead, we focus on natural color representation, elegant typography, and a sound design that blends the music seamlessly with your vows. The result is an editorial, fine-art film that feels as relevant decades from now as it does today."
      }
    ]
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = journalData[resolvedParams.slug];
  if (!data) return { title: "Article Not Found" };

  return {
    title: `${data.title} | Renivision Weddings`,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      images: [{ url: data.heroImg }]
    }
  };
}

export async function generateStaticParams() {
  return Object.keys(journalData).map((slug) => ({
    slug,
  }));
}

export default async function JournalPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = journalData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-36 bg-[var(--color-renivision-bg)] text-[var(--color-renivision-text)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <AnimatedSection>
          <div className="mb-10">
            <Link 
              href="/#journal" 
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-70 hover:opacity-100 hover:text-[var(--color-renivision-accent)] transition-all font-sans"
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Journal
            </Link>
          </div>
        </AnimatedSection>

        {/* Article Header */}
        <AnimatedSection delay={0.1}>
          <div className="mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--color-renivision-accent)] font-sans mb-3 block font-semibold">
              {post.category}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight font-light">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-xs uppercase tracking-widest opacity-60 font-sans">
              <span>{post.date}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              <span>{post.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300"></span>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Hero Image - Wide Layout */}
      <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 my-12 md:my-16">
        <AnimatedSection delay={0.2}>
          <div className="aspect-[16/9] md:aspect-[21/9] relative overflow-hidden bg-neutral-100 sm:rounded-3xl">
            <Image 
              src={post.heroImg} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Article Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatedSection delay={0.3}>
          <div className="space-y-8 text-neutral-800 leading-relaxed text-lg font-sans">
            {post.sections.map((section, idx) => {
              if (section.type === "paragraph") {
                return (
                  <p key={idx} className="opacity-90">
                    {section.content}
                  </p>
                );
              }
              if (section.type === "subheading") {
                return (
                  <h2 key={idx} className="font-serif text-2xl sm:text-3xl text-[var(--color-renivision-text)] pt-6 font-medium leading-snug">
                    {section.content}
                  </h2>
                );
              }
              if (section.type === "quote") {
                return (
                  <blockquote key={idx} className="border-l-2 border-[var(--color-renivision-accent)] pl-6 md:pl-8 py-3 my-10 italic">
                    <p className="font-serif text-xl sm:text-2xl text-[var(--color-renivision-text)] mb-3 leading-relaxed">
                      "{section.content}"
                    </p>
                    {section.subContent && (
                      <cite className="text-xs uppercase tracking-widest opacity-60 font-sans not-italic font-medium">
                        — {section.subContent}
                      </cite>
                    )}
                  </blockquote>
                );
              }
              return null;
            })}
          </div>
        </AnimatedSection>

        {/* Dynamic Blog Interactions (Likes, Views, Comments) */}
        <AnimatedSection delay={0.35}>
          <BlogInteractions slug={resolvedParams.slug} />
        </AnimatedSection>

        {/* CTA Divider / Contact block */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 pt-12 border-t editorial-border text-center font-sans">
            <h3 className="font-serif text-3xl mb-4">Let's Document Your Legacy</h3>
            <p className="text-sm opacity-80 mb-8 max-w-md mx-auto">
              We take on a limited number of commissions each year to dedicate our full artistic care to each couples film.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-12 py-4 bg-[var(--color-renivision-text)] text-white uppercase tracking-widest text-sm hover:bg-[var(--color-renivision-accent)] transition-colors duration-300"
            >
              Inquire Now
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </article>
  );
}
