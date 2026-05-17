"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Overlay from "./Overlay";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameIndex = i.toString().padStart(3, "0");
      img.src = `/ezgif-split/frame_${frameIndex}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !images[index]) return;

    const img = images[index];
    
    // Set internal canvas resolution to match display size for crispness
    const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Maintain aspect ratio cover
    const scale = Math.max(canvasWidth / img.width, canvasHeight / img.height);
    const x = (canvasWidth - img.width * scale) / 2;
    const y = (canvasHeight - img.height * scale) / 2;
    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    renderFrame(frameIndex);
  });

  // Initial render when loaded
  useEffect(() => {
    if (isLoaded) {
      renderFrame(0);
    }
  }, [isLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        renderFrame(0); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  return (
    <div ref={containerRef} className="relative h-[300vh] md:h-[500vh] w-full bg-[#0a0a0a]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full"
          style={{ width: "100%", height: "100%" }}
        />
        <Overlay />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a] z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin" />
              <p className="text-sm tracking-[0.2em] text-white/50 uppercase font-light">Loading Experience</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
