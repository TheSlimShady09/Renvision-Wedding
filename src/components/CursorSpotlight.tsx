"use client";

import { useEffect, useRef } from "react";

const SIZES: Record<string, number> = {
  default: 22,
  play: 52,
  drag: 48,
  link: 30,
};

const LABELS: Record<string, string> = {
  play: "PLAY",
  drag: "DRAG",
};

export default function CursorSpotlight() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  const mouse     = useRef({ x: -300, y: -300 });
  const ringPos   = useRef({ x: -300, y: -300 });
  const ringHalf  = useRef(22);
  const labelAmt  = useRef(0);
  const dotAmt    = useRef(0);
  const shownAmt  = useRef(0);

  const cursorType = useRef("default");
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as Element).closest("[data-cursor]");
      const type = el?.getAttribute("data-cursor") ?? "default";
      if (type !== cursorType.current) {
        cursorType.current = type;
        if (labelRef.current) labelRef.current.textContent = LABELS[type] ?? "";
      }
    };

    const tick = () => {
      const { x, y } = mouse.current;

      // Fade in on first move
      shownAmt.current += (1 - shownAmt.current) * 0.06;

      // Lag ring toward mouse
      ringPos.current.x += (x - ringPos.current.x) * 0.1;
      ringPos.current.y += (y - ringPos.current.y) * 0.1;

      // Animate ring half-size toward target
      const targetHalf = SIZES[cursorType.current] ?? 22;
      ringHalf.current += (targetHalf - ringHalf.current) * 0.1;

      // Animate label / dot crossfade
      const isExpanded = cursorType.current !== "default";
      labelAmt.current += ((isExpanded ? 1 : 0) - labelAmt.current) * 0.1;
      dotAmt.current   += ((isExpanded ? 0 : 1) - dotAmt.current)   * 0.1;

      const rh = ringHalf.current;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
        dotRef.current.style.opacity = (dotAmt.current * shownAmt.current).toFixed(3);
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - rh}px, ${ringPos.current.y - rh}px)`;
        ringRef.current.style.width  = `${rh * 2}px`;
        ringRef.current.style.height = `${rh * 2}px`;
        ringRef.current.style.opacity = (0.6 * shownAmt.current).toFixed(3);
        const bg = labelAmt.current * 0.11;
        ringRef.current.style.backgroundColor = `rgba(196,164,130,${bg.toFixed(3)})`;
        ringRef.current.style.backdropFilter = labelAmt.current > 0.05
          ? `blur(${(labelAmt.current * 3).toFixed(1)}px)` : "";
      }

      if (labelRef.current) {
        labelRef.current.style.opacity = labelAmt.current.toFixed(3);
      }

      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span
          ref={labelRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "8px",
            letterSpacing: "0.2em",
            color: "var(--color-renivision-accent)",
            opacity: 0,
            pointerEvents: "none",
            userSelect: "none",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
          }}
        />
      </div>
    </>
  );
}
