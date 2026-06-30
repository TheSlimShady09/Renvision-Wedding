"use client";

import { motion } from "framer-motion";

interface VideoHeroProps {
  youtubeId?: string;
  videoSrc?: string;
  tagline: string;
  title: string;
}

export default function VideoHero({ youtubeId, videoSrc, tagline, title }: VideoHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--color-renivision-dark)]">
      {/* Background Video or Placeholder */}
      <div className="absolute inset-0 w-full h-full">
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&controls=0&playlist=${youtubeId}&showinfo=0&rel=0`}
            title="Background Video"
            className="w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-60"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          />
        ) : videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-60 grayscale"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-neutral-800 opacity-60 flex items-center justify-center">
            <span className="text-white opacity-50">Background Video Placeholder</span>
          </div>
        )}
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase opacity-90 max-w-2xl"
        >
          {tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-white mb-2 opacity-70">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
