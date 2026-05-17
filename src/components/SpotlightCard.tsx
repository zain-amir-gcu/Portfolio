"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative rounded-[2rem] border border-white/5 bg-white/[0.01] p-10 backdrop-blur-2xl transition-all duration-700 hover:border-white/10 hover:bg-white/[0.02] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 255, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
