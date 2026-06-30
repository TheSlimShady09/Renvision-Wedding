"use client";

import { motion } from "framer-motion";

interface VideoHeroProps {
  youtubeId?: string;
  videoSrc?: string;
  title: string;
  eyebrow?: string;
  subtitle?: string;
}

export default function VideoHero({
  youtubeId,
  videoSrc,
  title,
  eyebrow = "Renivision Weddings",
  subtitle = "Cinematic wedding films, crafted to be felt for generations — Westchester · Hudson Valley · New York City.",
}: VideoHeroProps) {
  const words = title.split(" ");

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
            className="object-cover w-full h-full opacity-70 grayscale"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-neutral-800 opacity-60 flex items-center justify-center">
            <span className="text-white opacity-50">Background Video Placeholder</span>
          </div>
        )}
      </div>

      {/* Cinematic gradient overlay for depth & legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center z-10">
        {/* Eyebrow with flanking hairlines */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[var(--color-renivision-accent)]" />
          <span className="font-sans text-[0.6rem] sm:text-xs uppercase tracking-[0.4em] text-[var(--color-renivision-accent)]">
            {eyebrow}
          </span>
          <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[var(--color-renivision-accent)]" />
        </motion.div>

        {/* Headline — staggered word reveal */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] max-w-5xl leading-[1.14] tracking-[-0.02em]">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.4 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 + words.length * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm sm:text-base md:text-lg font-light text-white/80 max-w-xl mt-9 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

      </div>
    </section>
  );
}
