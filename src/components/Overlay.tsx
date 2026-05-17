"use client";

import { useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Overlay() {
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  // Using global scroll progress for the sequence
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Scale scroll progress for the first 500vh section
    // Total height will be 500vh + the rest of the page.
    // Let's normalize it so the scrollytelling ends at p=1 for its own duration.
    // However, global scroll is easier if we just map values.
    
    // Section 1: 0% - 10%
    if (textRef1.current) {
      if (latest <= 0.12) {
        const p = Math.min(1, latest / 0.1);
        textRef1.current.style.opacity = (1 - p).toString();
        textRef1.current.style.transform = `translateY(-${p * 20}vh)`;
        textRef1.current.style.display = "flex";
      } else {
        textRef1.current.style.display = "none";
      }
    }

    // Section 2: 15% - 45%
    if (textRef2.current) {
      if (latest >= 0.12 && latest <= 0.48) {
        const p = (latest - 0.15) / 0.3; // 0 to 1 roughly
        const clampedP = Math.max(0, Math.min(1, p));
        
        let opacity = 0;
        if (clampedP < 0.2) opacity = clampedP / 0.2;
        else if (clampedP > 0.8) opacity = 1 - (clampedP - 0.8) / 0.2;
        else opacity = 1;
        
        const drift = 15 - clampedP * 35; // 15vh down to -20vh up
        textRef2.current.style.opacity = opacity.toString();
        textRef2.current.style.transform = `translateY(${drift}vh)`;
        textRef2.current.style.display = "flex";
      } else {
        textRef2.current.style.display = "none";
      }
    }

    // Section 3: 50% - 85%
    if (textRef3.current) {
      if (latest >= 0.48 && latest <= 0.9) {
        const p = (latest - 0.5) / 0.35; // 0 to 1 roughly
        const clampedP = Math.max(0, Math.min(1, p));

        let opacity = 0;
        if (clampedP < 0.2) opacity = clampedP / 0.2;
        else if (clampedP > 0.8) opacity = 1 - (clampedP - 0.8) / 0.2;
        else opacity = 1;

        const drift = 15 - clampedP * 35; // 15vh down to -20vh up
        textRef3.current.style.opacity = opacity.toString();
        textRef3.current.style.transform = `translateY(${drift}vh)`;
        textRef3.current.style.display = "flex";
      } else {
        textRef3.current.style.display = "none";
      }
    }
  });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div
        ref={textRef1}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
          Zain Amir.
          <span className="block text-2xl md:text-3xl font-light tracking-[0.5em] text-neutral-400 mt-4">
            SOFTWARE ENGINEER
          </span>
        </h1>
      </div>

      <div
        ref={textRef2}
        className="absolute inset-0 flex flex-col items-start justify-center px-12 md:px-24"
        style={{ display: "none" }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-2xl leading-tight">
          I build <span className="text-white">digital</span> <br />
          <span className="text-neutral-500 italic">experiences.</span>
        </h2>
      </div>

      <div
        ref={textRef3}
        className="absolute inset-0 flex flex-col items-end justify-center px-12 md:px-24 text-right"
        style={{ display: "none" }}
      >
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight max-w-2xl leading-tight">
          Bridging <span className="text-white">design</span> <br />
          <span className="text-neutral-500 italic">and engineering.</span>
        </h2>
      </div>
    </div>
  );
}
