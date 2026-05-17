"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactTransition() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLHeadingElement>(null);
  const middleRef = useRef<HTMLHeadingElement>(null);
  const bottomRef = useRef<HTMLHeadingElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Pin the entire section and animate during scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top", // starts right after Projects ends
        end: "+=1000", // enough scroll space
        scrub: true,
        pin: pinRef.current,
        anticipatePin: 1,
      });

      // Top text scroll: left to right
      gsap.fromTo(
        topRef.current,
        { xPercent: -100 },
        {
          xPercent: 100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );

      // Bottom text scroll: right to left
      gsap.fromTo(
        bottomRef.current,
        { xPercent: 100 },
        {
          xPercent: -100,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );

      // Center gradient effect (Starlight to Cosmic Energy)
      gsap.set(middleRef.current, {
        backgroundImage: "linear-gradient(to right, #ffffff, #ffffff)",
        backgroundSize: "100% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      });

      gsap.to(middleRef.current, {
        backgroundImage:
          "linear-gradient(to right, #ffffff 0%, #7000ff 50%, #00f2ff 100%)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      });

      // Subtle background glow expansion matching the scroll
      gsap.fromTo(
        glowRef.current,
        { scale: 0.8, opacity: 0.05 },
        {
          scale: 1.5,
          opacity: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      <div
        ref={pinRef}
        className="h-screen flex flex-col justify-center items-center space-y-10 md:space-y-16 overflow-hidden px-6 z-10"
      >
        {/* Atmospheric Glow */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2ff]/10 blur-[150px] rounded-full pointer-events-none"
        />

        {/* Top Text */}
        <h1
          ref={topRef}
          className="text-6xl md:text-9xl font-bold uppercase tracking-[0.1em] text-white/30 whitespace-nowrap will-change-transform pointer-events-none"
        >
          Software Engineer, React Native Developer, App Developer
        </h1>

        {/* Middle Text */}
        <div className="relative z-20 flex flex-col items-center">
          <h2
            ref={middleRef}
            className="text-4xl md:text-6xl font-bold text-center tracking-tighter"
          >
            Interested in collaboration?
          </h2>
          <p className="mt-6 text-neutral-500 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase opacity-60">
            Let&apos;s Architect the Future Together
          </p>
        </div>

        {/* Bottom Text */}
        <h1
          ref={bottomRef}
          className="text-6xl md:text-9xl font-bold uppercase tracking-[0.1em] text-white/30 whitespace-nowrap will-change-transform pointer-events-none"
        >
          MERN Stack Developer, Frontend, Backend Developer
        </h1>
      </div>
      
      {/* Subtle bottom border to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#08080a] to-transparent pointer-events-none z-20" />
    </section>
  );
}
