import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FBFBFA] text-[var(--color-renivision-text)] pt-24 pb-8 border-t border-neutral-200/40 relative overflow-hidden">
      
      {/* Top Content Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-12 md:mb-16">
        
        {/* Brand Column */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <Link href="/" className="font-serif text-3xl md:text-4xl tracking-widest uppercase mb-6 block hover:text-[var(--color-renivision-accent)] transition-colors text-[var(--color-renivision-text)]">
              Renivision
            </Link>
            <p className="text-sm md:text-base text-neutral-600 font-sans max-w-sm leading-relaxed">
              Honest storytelling for intentional humans. Cinematic wedding films crafted to be felt for generations.
            </p>
          </div>
        </div>

        {/* Links Column */}
        <div className="md:col-span-2 md:col-start-7 font-sans">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6 text-neutral-900 font-light">Explore</h3>
          <ul className="space-y-4 text-sm text-neutral-600 font-medium">
            <li><Link href="#home" className="hover:text-[var(--color-renivision-accent)] transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-[var(--color-renivision-accent)] transition-colors">Philosophy</Link></li>
            <li><Link href="#films" className="hover:text-[var(--color-renivision-accent)] transition-colors">Films</Link></li>
            <li><Link href="#journal" className="hover:text-[var(--color-renivision-accent)] transition-colors">Journal</Link></li>
          </ul>
        </div>

        {/* Location & Contact */}
        <div className="md:col-span-3 font-sans">
          <h3 className="font-serif text-lg tracking-widest uppercase mb-6 text-neutral-900 font-light">Contact</h3>
          <ul className="space-y-4 text-sm text-neutral-600 font-medium">
            <li>hello@renivisionweddings.com</li>
            <li>Westchester County, NY</li>
            <li>Available Worldwide</li>
            <li className="pt-2">
              <Link href="#contact" className="inline-block border-b border-[var(--color-renivision-accent)] text-[var(--color-renivision-accent)] pb-1 hover:text-[var(--color-renivision-text)] hover:border-[var(--color-renivision-text)] transition-colors">
                Inquire Now
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Massive Typography & Bottom Bar */}
      <div className="px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        {/* The massive clipping text slideshow */}
        <div className="w-full overflow-hidden leading-none select-none pb-8 pt-2">
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="font-serif text-[10vw] md:text-[7vw] font-light tracking-widest uppercase text-[var(--color-renivision-text)] px-[4vw] shrink-0">
                Renivision
              </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={`b${i}`} className="font-serif text-[10vw] md:text-[7vw] font-light tracking-widest uppercase text-[var(--color-renivision-text)] px-[4vw] shrink-0" aria-hidden="true">
                Renivision
              </span>
            ))}
          </div>
        </div>
        
        {/* Bottom Metadata */}
        <div className="w-full max-w-7xl border-t border-neutral-200/40 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] sm:text-xs text-neutral-500 font-sans tracking-widest uppercase gap-4 text-center">
          <p>&copy; {new Date().getFullYear()} Renivision Weddings. All rights reserved.</p>
          <div className="flex space-x-6 text-neutral-500">
            <a href="https://instagram.com/renivision_weddings" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0 -1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
            <a href="https://youtube.com/@ReniVisionWeddings" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
