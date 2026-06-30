"use client";

import { useRef } from "react";
import Image from "next/image";
import TiltCard from "./TiltCard";
import AnimatedSection from "./AnimatedSection";

type Film = {
  id: number;
  title: string;
  location: string;
  type: string;
  img: string;
  desc: string;
};

export default function FilmCarousel({ films }: { films: Film[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.clientWidth;
    const gap = 24; // gap-6 in Tailwind is 24px
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <div className="flex justify-end gap-3 mb-6 pr-4 sm:pr-6 lg:pr-8">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all cursor-pointer z-20"
          aria-label="Previous Film"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all cursor-pointer z-20"
          aria-label="Next Film"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex items-start gap-4 md:gap-6 pb-12 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollBehavior: "smooth" }}
        >
          {films.map((film, index) => (
            <div 
              key={film.id} 
              className="snap-start flex-shrink-0 w-[85vw] md:w-[400px] lg:w-[450px]"
            >
              <AnimatedSection delay={index * 0.1}>
                <div className="group cursor-pointer block relative rounded-[2rem] overflow-hidden aspect-[4/3] bg-neutral-900">
                  {/* Background Image */}
                  <Image
                    src={film.img}
                    alt={`${film.title} Wedding Film`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlays for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70 transition-opacity duration-300"></div>
                  
                  {/* Top Content */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                    <div>
                      <h3 className="font-sans text-2xl md:text-3xl text-white font-bold tracking-tight mb-1">{film.title}</h3>
                      <div className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                        <span>{film.location}</span>
                      </div>
                    </div>
                    
                    {/* Top Right "More" Button Mimic */}
                    <div className="w-10 h-10 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10">
                    <div className="text-white text-lg font-medium tracking-wide">
                      {film.type}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full backdrop-blur-lg bg-white/15 border border-white/20 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white/30 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
