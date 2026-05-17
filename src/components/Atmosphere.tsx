"use client";

import { motion } from "framer-motion";
import AmbientStars from "./AmbientStars";

export default function Atmosphere() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Dense star field – rendered on canvas for GPU compositing */}
      <AmbientStars />

      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(8,8,10,1)_0%,rgba(0,0,0,1)_100%)]" />

      {/* Moving Plasma Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#00f2ff]/5 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -150, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#7000ff]/5 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.02)_0%,transparent_50%)]"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
