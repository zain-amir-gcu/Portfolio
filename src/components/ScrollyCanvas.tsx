"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Overlay from "./Overlay";

const FRAME_COUNT = 120;
const INITIAL_BATCH_SIZE = 30; // Frames to load before hiding the overlay

// Persistent global cache outside React state to completely eliminate re-renders during loading
const globalLoadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
let globalImagesLoaded = false;
let globalLoadedCount = 0;
let globalIsFetching = false;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Only use state for the single loading screen toggle. Image data is intentionally excluded from state.
  const [isLoaded, setIsLoaded] = useState(globalLoadedCount >= INITIAL_BATCH_SIZE);
  
  // Refs for high-performance animation tracking
  const currentFrameRef = useRef(0);
  const renderRequestIdRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const renderFrame = useCallback((index: number) => {
    currentFrameRef.current = index;

    // Throttle redraws to display refresh rate
    if (renderRequestIdRef.current) {
      cancelAnimationFrame(renderRequestIdRef.current);
    }

    renderRequestIdRef.current = requestAnimationFrame(() => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      // 1. O(1) direct memory access to image
      let img = globalLoadedImages[index];
      
      // 2. Fallback to closest loaded frame if user scrubs faster than network
      if (!img) {
        let closestIdx = -1;
        let minDiff = Infinity;
        for (let i = 0; i < FRAME_COUNT; i++) {
          if (globalLoadedImages[i]) {
            const diff = Math.abs(i - index);
            if (diff < minDiff) {
              minDiff = diff;
              closestIdx = i;
            }
          }
        }
        if (closestIdx !== -1) {
          img = globalLoadedImages[closestIdx];
        }
      }

      if (!img) return;
      
      // 3. Retina display optimization
      const dpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
      const rect = canvas.getBoundingClientRect();
      const targetWidth = Math.floor(rect.width * dpr);
      const targetHeight = Math.floor(rect.height * dpr);

      // 4. Zero-flicker resizing (only set width/height if physically changed)
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }
      
      // 5. Object-fit: cover math
      const scale = Math.max(targetWidth / img.width, targetHeight / img.height);
      const x = (targetWidth - img.width * scale) / 2;
      const y = (targetHeight - img.height * scale) / 2;
      
      ctx.clearRect(0, 0, targetWidth, targetHeight);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    });
  }, []);

  // Progressive preloading & initialization lifecycle
  useEffect(() => {
    // Case 1: Everything is already fully loaded from a previous visit
    if (globalImagesLoaded) {
      setIsLoaded(true);
      renderFrame(currentFrameRef.current);
      return;
    }

    // Case 2: Enough frames loaded to drop the curtain, but still downloading in background
    if (globalLoadedCount >= INITIAL_BATCH_SIZE) {
      setIsLoaded(true);
      renderFrame(currentFrameRef.current);
    }

    // Case 3: We navigated away and came back while the background fetch is still running
    if (globalIsFetching) {
      if (globalLoadedCount < INITIAL_BATCH_SIZE) {
        const interval = setInterval(() => {
          if (globalLoadedCount >= INITIAL_BATCH_SIZE) {
            setIsLoaded(true);
            renderFrame(currentFrameRef.current);
            clearInterval(interval);
          }
        }, 100);
        return () => clearInterval(interval);
      }
      return;
    }

    // Case 4: First time mounting. Start the progressive fetch.
    globalIsFetching = true;

    // Load frame 0 immediately to guarantee a background paint the exact moment the loader lifts
    const firstImg = new Image();
    firstImg.src = `/ezgif-split/frame_000_delay-0.066s.webp`;
    firstImg.onload = () => {
      globalLoadedImages[0] = firstImg;
      globalLoadedCount++;
      renderFrame(0);
      
      // Progressively load the remaining 119 frames in the background
      for (let i = 1; i < FRAME_COUNT; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(3, "0");
        img.src = `/ezgif-split/frame_${frameIndex}_delay-0.066s.webp`;
        img.onload = () => {
          globalLoadedImages[i] = img;
          globalLoadedCount++;
          
          // Unblock UI as soon as we hit the critical threshold
          if (globalLoadedCount === INITIAL_BATCH_SIZE) {
            setIsLoaded(true);
            renderFrame(currentFrameRef.current);
          }

          // Force occasional background redraws in case the user is scrolling during load
          if (globalLoadedCount % 10 === 0) {
            renderFrame(currentFrameRef.current);
          }

          if (globalLoadedCount === FRAME_COUNT) {
            globalImagesLoaded = true;
          }
        };
      }
    };
  }, [renderFrame]);

  // Sync scroll position to frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    renderFrame(frameIndex);
  });

  // Handle window resizing cleanly (re-renders correct frame, not frame 0)
  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) {
        renderFrame(currentFrameRef.current); 
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, renderFrame]);

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
