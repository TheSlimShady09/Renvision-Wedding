"use client";

import { useRef } from "react";
import Image from "next/image";

interface Film {
  id: number;
  title: string;
  location: string;
  type: string;
  img: string;
}

export default function FilmReel({ films }: { films: Film[] }) {
  const reelRef  = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX   = useRef(0);
  const startSL  = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current  = e.pageX;
    startSL.current = reelRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !reelRef.current) return;
    e.preventDefault();
    reelRef.current.scrollLeft = startSL.current - (e.pageX - startX.current) * 1.4;
  };

  const stopDrag = () => { dragging.current = false; };

  return (
    <div
      ref={reelRef}
      className="film-reel"
      data-cursor="drag"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDrag}
      onMouseLeave={stopDrag}
    >
      {/* padding spacer so first card aligns with page content */}
      <div className="film-reel-spacer" aria-hidden="true" />

      {films.map((film, i) => (
        <article key={film.id} className="film-card group">
          {/* index number — cinematic touch */}
          <p className="film-card-index">0{i + 1}</p>

          <div className="film-card-img" data-cursor="play">
            <Image
              src={film.img}
              alt={film.title}
              fill
              sizes="(max-width: 768px) 72vw, 45vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              draggable={false}
            />
            <div className="film-card-hover-overlay">
              <span className="film-play-label">Play Film</span>
            </div>
          </div>

          <div className="film-card-meta">
            <h3 className="font-serif text-2xl md:text-3xl">{film.title}</h3>
            <div className="film-card-sub">
              <span>{film.location}</span>
              <span>{film.type}</span>
            </div>
          </div>
        </article>
      ))}

      <div className="film-reel-spacer" aria-hidden="true" />
    </div>
  );
}
