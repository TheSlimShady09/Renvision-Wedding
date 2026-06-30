"use client";

import { useEffect, useRef, useState } from "react";

const LETTERS = "RENIVISION".split("");

export default function CinematicIntro() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem("intro-seen")) return;
    setVisible(true);

    const leaveTimer = setTimeout(() => setLeaving(true), 2200);
    const doneTimer  = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("intro-seen", "1");
    }, 3000);

    return () => {
      clearTimeout(leaveTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="cinematic-intro"
      style={{ opacity: leaving ? 0 : 1 }}
      aria-hidden="true"
    >
      {/* film-strip sprocket holes */}
      <div className="intro-sprockets intro-sprockets-left">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="intro-sprocket" />
        ))}
      </div>

      <div className="intro-center">
        <div className="intro-letters">
          {LETTERS.map((char, i) => (
            <span
              key={i}
              className="intro-letter"
              style={{ animationDelay: `${0.05 + i * 0.06}s` }}
            >
              {char}
            </span>
          ))}
        </div>
        <p className="intro-tagline">
          honest storytelling for intentional humans
        </p>
      </div>

      <div className="intro-sprockets intro-sprockets-right">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="intro-sprocket" />
        ))}
      </div>
    </div>
  );
}
