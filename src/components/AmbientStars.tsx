"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  alpha: number;
  speed: number;
  phase: number;
  parallaxFactor: number;
}

const STAR_COUNT = 420;

function buildStars(w: number, h: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => {
    const r = Math.random();
    // Size distribution: mostly micro (0.3-0.8px), some small (0.8-1.4px), rare medium (1.4-2px)
    const size = r < 0.65 ? 0.3 + Math.random() * 0.5 : r < 0.92 ? 0.8 + Math.random() * 0.6 : 1.4 + Math.random() * 0.6;
    const baseAlpha = 0.08 + Math.random() * 0.55;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      r: size,
      baseAlpha,
      alpha: baseAlpha,
      speed: 0.0004 + Math.random() * 0.0012,
      phase: Math.random() * Math.PI * 2,
      parallaxFactor: 0.02 + Math.random() * 0.06,
    };
  });
}

export default function AmbientStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number | null>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas || !ctx) return;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      starsRef.current = buildStars(w, h);
    }

    function onScroll() {
      scrollYRef.current = window.scrollY;
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let t = 0;
    function draw() {
      if (!ctx || !canvas) return;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.clearRect(0, 0, w, h);
      t += 1;

      const scrollOffset = scrollYRef.current;

      for (const star of starsRef.current) {
        // Parallax drift
        const py = (scrollOffset * star.parallaxFactor) % h;
        const drawY = ((star.y - py) % h + h) % h;

        // Twinkle
        star.alpha = star.baseAlpha * (0.55 + 0.45 * Math.sin(t * star.speed * 60 + star.phase));

        // Occasional colour tint: mostly white, rare cyan, rarer violet
        const rand = star.phase; // stable per star
        let color: string;
        if (rand < 0.07) color = `rgba(0,242,255,${star.alpha.toFixed(3)})`;
        else if (rand < 0.13) color = `rgba(112,0,255,${star.alpha.toFixed(3)})`;
        else color = `rgba(255,255,255,${star.alpha.toFixed(3)})`;

        ctx.beginPath();
        ctx.arc(star.x, drawY, star.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
}
