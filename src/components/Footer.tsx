import Link from "next/link";

export default function Footer() {
  return (
    <footer className="dark-section">
      {/* Scrolling name strip */}
      <div className="w-full overflow-hidden border-t border-b border-white/10 py-5">
        <div className="marquee-track">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="font-serif text-5xl md:text-7xl tracking-[0.3em] uppercase opacity-20 px-10 shrink-0 select-none">
              Renivision
            </span>
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={`b${i}`} className="font-serif text-5xl md:text-7xl tracking-[0.3em] uppercase opacity-20 px-10 shrink-0 select-none" aria-hidden="true">
              Renivision
            </span>
          ))}
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Brand */}
        <div>
          <Link href="/" className="font-serif text-3xl tracking-widest uppercase mb-4 block">
            Renivision
          </Link>
          <p className="text-sm opacity-75">
            honest storytelling for intentional humans.
          </p>
        </div>

        {/* Location / NAP */}
        <div>
          <h3 className="font-serif text-xl tracking-widest uppercase mb-4">Location</h3>
          <p className="text-sm opacity-75 mb-2">Renivision Weddings</p>
          <p className="text-sm opacity-75 mb-2">Westchester County / Tarrytown, NY</p>
          <p className="text-sm opacity-75">Available worldwide.</p>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-serif text-xl tracking-widest uppercase mb-6">Connect</h3>
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a href="https://instagram.com/renivision_weddings" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            
            <a href="mailto:hello@renivisionweddings.com" className="opacity-75 hover:opacity-100 hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="Email">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>

            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9l-5.05.9" />
                <path d="M9 10a.5.5 0 0 0 1 0v-1a.5.5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0 -1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>

            <a href="https://youtube.com/@ReniVisionWeddings" target="_blank" rel="noopener noreferrer" className="opacity-75 hover:opacity-100 hover:text-[var(--color-renivision-accent)] transition-colors" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <path d="m10 15 5-3-5-3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>&copy; {new Date().getFullYear()} Renivision Weddings. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="/locations/westchester" className="hover:text-white">Westchester</Link>
          <Link href="/locations/hudson-valley" className="hover:text-white">Hudson Valley</Link>
          <Link href="/locations/nyc" className="hover:text-white">New York City</Link>
        </div>
      </div>
      </div>
    </footer>
  );
}
