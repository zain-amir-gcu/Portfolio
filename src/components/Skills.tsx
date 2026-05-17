"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiMongodb, SiMysql,
  SiFigma, SiGit, SiPython, SiCplusplus,
  SiHtml5, SiCss, SiFirebase, SiVercel,
} from "react-icons/si";

/* ─────────────────────── data ─────────────────────── */



const orbits: {
  radius: number;
  duration: number;   // seconds for one full revolution
  direction: 1 | -1;
  items: { name: string; icon: JSX.Element; color: string }[];
}[] = [
  {
    radius: 130,
    duration: 5,
    direction: 1,
    items: [
      { name: "React",      icon: <SiReact />,      color: "#61DAFB" },
      { name: "Next.js",    icon: <SiNextdotjs />,  color: "#FFFFFF" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    ],
  },
  {
    radius: 230,
    duration: 9,
    direction: -1,
    items: [
      { name: "Node.js",    icon: <SiNodedotjs />,    color: "#339933" },
      { name: "Python",     icon: <SiPython />,       color: "#3776AB" },
      { name: "JavaScript", icon: <SiJavascript />,   color: "#F7DF1E" },
      { name: "C++",        icon: <SiCplusplus />,    color: "#00599C" },
      { name: "MongoDB",    icon: <SiMongodb />,      color: "#47A248" },
    ],
  },
  {
    radius: 340,
    duration: 14,
    direction: 1,
    items: [
      { name: "Tailwind",  icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "MySQL",     icon: <SiMysql />,       color: "#4479A1" },
      { name: "Figma",     icon: <SiFigma />,       color: "#F24E1E" },
      { name: "Git",       icon: <SiGit />,         color: "#F05032" },
      { name: "Firebase",  icon: <SiFirebase />,    color: "#FFCA28" },
      { name: "Vercel",    icon: <SiVercel />,      color: "#FFFFFF" },
      { name: "HTML5",     icon: <SiHtml5 />,       color: "#E34F26" },
      { name: "CSS",       icon: <SiCss />,         color: "#1572B6" },
    ],
  },
];

/* ─────────────────────── helpers ─────────────────────── */

function useAngle(duration: number, direction: 1 | -1) {
  const angle = useRef(Math.random() * 360);
  const [deg, setDeg] = useState(angle.current);
  useAnimationFrame((_, delta) => {
    angle.current += (direction * delta) / (duration * 10);
    setDeg(angle.current);
  });
  return deg;
}

/* ─────────────────────── OrbitRing ─────────────────────── */

function OrbitRing({
  radius,
  duration,
  direction,
  items,
}: (typeof orbits)[0]) {
  const baseDeg = useAngle(duration, direction);

  return (
    <>
      {/* ring track */}
      <div
        className="absolute rounded-full border border-white/[0.06] pointer-events-none"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {items.map((item, i) => {
        const angleDeg = baseDeg + (360 / items.length) * i;
        const rad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <div
            key={item.name}
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              willChange: "transform",
            }}
          >
            <OrbitNode item={item} />
          </div>
        );
      })}
    </>
  );
}

/* ─────────────────────── OrbitNode ─────────────────────── */

function OrbitNode({ item }: { item: { name: string; icon: JSX.Element; color: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${item.color}55, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          width: 64,
          height: 64,
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />

      {/* icon pill */}
      <div
        className="relative z-10 flex items-center justify-center rounded-xl transition-all duration-300"
        style={{
          width: 52,
          height: 52,
          background: hovered
            ? `linear-gradient(135deg, ${item.color}22, ${item.color}08)`
            : "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? item.color + "66" : "rgba(255,255,255,0.08)"}`,
          boxShadow: hovered ? `0 0 20px ${item.color}44` : "none",
          fontSize: 24,
          color: item.color,
          transform: hovered ? "scale(1.25)" : "scale(1)",
        }}
      >
        {item.icon}
      </div>

      {/* label */}
      <span
        className="mt-1 text-[9px] uppercase tracking-[0.3em] font-mono whitespace-nowrap transition-opacity duration-300"
        style={{ color: item.color, opacity: hovered ? 1 : 0 }}
      >
        {item.name}
      </span>
    </div>
  );
}

/* ─────────────────────── GlowingCore ─────────────────────── */

function GlowingCore() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-none">
      {/* outer pulse rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-[#00f2ff]/20"
          animate={{ scale: [1, 1.5 + i * 0.3, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.7 }}
          style={{ width: 70 + i * 20, height: 70 + i * 20 }}
        />
      ))}

      {/* core */}
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 70,
          height: 70,
          background: "radial-gradient(circle at 35% 35%, #00f2ff22, #0a0a0f)",
          border: "1px solid #00f2ff44",
          boxShadow: "0 0 40px #00f2ff33, inset 0 0 20px #00f2ff11",
        }}
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f2ff] font-bold select-none">
          Dev
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────── FloatingParticles ─────────────────────── */

// Layer 1: outer ring (beyond orbit 3)
const OUTER_PARTICLES = Array.from({ length: 55 }, (_, i) => ({
  id: `o${i}`,
  angle: (i / 55) * 360 + Math.random() * 6,
  r: 390 + Math.random() * 130,
  size: 1 + Math.random() * 2.5,
  color: i % 3 === 0 ? "#7000ff" : "#00f2ff",
  opacity: 0.12 + Math.random() * 0.38,
  dur: 5 + Math.random() * 9,
  delay: Math.random() * 6,
}));

// Layer 2: between orbit 2 (230) and orbit 3 (340)
const MID_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: `m${i}`,
  angle: (i / 30) * 360 + Math.random() * 12,
  r: 250 + Math.random() * 80,
  size: 0.8 + Math.random() * 1.8,
  color: i % 4 === 0 ? "#7000ff" : "#00f2ff",
  opacity: 0.08 + Math.random() * 0.2,
  dur: 4 + Math.random() * 7,
  delay: Math.random() * 4,
}));

// Layer 3: between orbit 1 (130) and orbit 2 (230)
const INNER_PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `i${i}`,
  angle: (i / 20) * 360 + Math.random() * 18,
  r: 145 + Math.random() * 70,
  size: 0.7 + Math.random() * 1.4,
  color: "#00f2ff",
  opacity: 0.06 + Math.random() * 0.14,
  dur: 3 + Math.random() * 5,
  delay: Math.random() * 3,
}));

const ALL_PARTICLES = [...OUTER_PARTICLES, ...MID_PARTICLES, ...INNER_PARTICLES];

function FloatingParticles() {
  return (
    <>
      {ALL_PARTICLES.map((p) => {
        const rad = (p.angle * Math.PI) / 180;
        const x = Math.cos(rad) * p.r;
        const y = Math.sin(rad) * p.r;
        return (
          <motion.div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: p.size,
              height: p.size,
              background: p.color,
              top: "50%",
              left: "50%",
              x: x - p.size / 2,
              y: y - p.size / 2,
              opacity: p.opacity,
              boxShadow: `0 0 ${p.size * 2}px ${p.color}88`,
            }}
            animate={{ opacity: [p.opacity, p.opacity * 0.15, p.opacity] }}
            transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        );
      })}
    </>
  );
}

/* ─────────────────────── FloatingCrosses ─────────────────────── */

const CROSSES = [
  { angle: 8,   r: 410 }, { angle: 42,  r: 475 }, { angle: 88,  r: 420 },
  { angle: 115, r: 460 }, { angle: 155, r: 415 }, { angle: 182, r: 480 },
  { angle: 220, r: 425 }, { angle: 258, r: 465 }, { angle: 295, r: 418 },
  { angle: 330, r: 470 }, { angle: 50,  r: 275 }, { angle: 140, r: 265 },
  { angle: 230, r: 280 }, { angle: 315, r: 270 }, { angle: 175, r: 165 },
  { angle: 355, r: 160 },
];

function FloatingCrosses() {
  return (
    <>
      {CROSSES.map((c, i) => {
        const rad = (c.angle * Math.PI) / 180;
        const x = Math.cos(rad) * c.r;
        const y = Math.sin(rad) * c.r;
        return (
          <motion.div
            key={i}
            className="absolute pointer-events-none select-none"
            style={{ top: "50%", left: "50%" }}
            animate={{
              x: [x - 1.5, x + 1.5, x - 1.5],
              y: [y - 3,   y + 3,   y - 3],
              opacity: [0.18, 0.45, 0.18],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.25,
            }}
          >
            <span
              style={{
                display: "block",
                transform: "translate(-50%, -50%)",
                fontSize: 10,
                lineHeight: 1,
                color: i % 3 === 0 ? "#7000ff" : "#00f2ff",
                textShadow: `0 0 6px ${i % 3 === 0 ? "#7000ff" : "#00f2ff"}66`,
                fontFamily: "monospace",
              }}
            >
              +
            </span>
          </motion.div>
        );
      })}
    </>
  );
}

/* ─────────────────────── FloatingKeywords ─────────────────────── */

const KEYWORDS = [
  // outer ring labels
  { label: "Full Stack",      angle: 10,  r: 445 },
  { label: "Clean Code",      angle: 40,  r: 460 },
  { label: "UI / UX",         angle: 70,  r: 448 },
  { label: "REST APIs",       angle: 100, r: 458 },
  { label: "GraphQL",         angle: 130, r: 443 },
  { label: "Databases",       angle: 162, r: 462 },
  { label: "Open Source",     angle: 193, r: 446 },
  { label: "Performance",     angle: 224, r: 455 },
  { label: "Responsive",      angle: 254, r: 443 },
  { label: "Accessibility",   angle: 284, r: 460 },
  { label: "Dev Ops",         angle: 315, r: 448 },
  { label: "Animations",      angle: 345, r: 455 },
  // mid-ring labels (between orbit 2 & 3)
  { label: "Hooks",           angle: 25,  r: 290 },
  { label: "SSR / SSG",       angle: 110, r: 285 },
  { label: "Auth",            angle: 200, r: 292 },
  { label: "Testing",         angle: 290, r: 287 },
];

function FloatingKeywords() {
  return (
    <>
      {KEYWORDS.map((kw, i) => {
        const rad = (kw.angle * Math.PI) / 180;
        const x = Math.cos(rad) * kw.r;
        const y = Math.sin(rad) * kw.r;
        // mid-ring labels are slightly different style
        const isMid = i >= 12;
        return (
          <motion.div
            key={kw.label}
            className="absolute pointer-events-none select-none"
            style={{ top: "50%", left: "50%" }}
            animate={{
              x: [x - 2, x + 2, x - 2],
              y: [y - 4, y + 4, y - 4],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <span
              className="uppercase font-mono whitespace-nowrap"
              style={{
                display: "block",
                transform: "translate(-50%, -50%)",
                fontSize: isMid ? 8 : 9,
                letterSpacing: isMid ? "0.28em" : "0.35em",
                color: isMid ? "#7000ff" : "#00f2ff",
                opacity: isMid ? 0.3 : 0.28,
                textShadow: `0 0 8px ${isMid ? "#7000ff44" : "#00f2ff44"}`,
              }}
            >
              {kw.label}
            </span>
          </motion.div>
        );
      })}
    </>
  );
}

/* ─────────────────────── MarqueeRow (commented out) ───────────────────────
const allSkills = [
  { name: "React",      icon: <SiReact />,      color: "#61DAFB" },
  { name: "Next.js",    icon: <SiNextdotjs />,  color: "#FFFFFF" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js",    icon: <SiNodedotjs />,  color: "#339933" },
  { name: "Python",     icon: <SiPython />,     color: "#3776AB" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "C++",        icon: <SiCplusplus />,  color: "#00599C" },
  { name: "MongoDB",    icon: <SiMongodb />,    color: "#47A248" },
  { name: "Tailwind",   icon: <SiTailwindcss />,color: "#06B6D4" },
  { name: "MySQL",      icon: <SiMysql />,      color: "#4479A1" },
  { name: "Figma",      icon: <SiFigma />,      color: "#F24E1E" },
  { name: "Git",        icon: <SiGit />,        color: "#F05032" },
  { name: "Firebase",   icon: <SiFirebase />,   color: "#FFCA28" },
  { name: "Vercel",     icon: <SiVercel />,     color: "#FFFFFF" },
  { name: "HTML5",      icon: <SiHtml5 />,      color: "#E34F26" },
  { name: "CSS",        icon: <SiCss />,         color: "#1572B6" },
];

function MarqueeRow({ reverse = false, speed = 30 }: { reverse?: boolean; speed?: number }) {
  const items = [...allSkills, ...allSkills, ...allSkills];
  return (
    <div className="relative overflow-hidden w-full" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.02] whitespace-nowrap"
            style={{ boxShadow: `0 0 10px ${s.color}11` }}
          >
            <span style={{ color: s.color, fontSize: 16 }}>{s.icon}</span>
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">{s.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
────────────────────────────────────────────────────────────────────────── */

/* ─────────────────────── Main Section ─────────────────────── */

export default function Skills() {
  const orbitSize = 340 * 2 + 140; // outermost radius × 2 + padding

  return (
    <section className="relative py-32 bg-[#08080a] overflow-hidden flex flex-col items-center">
      {/* ── ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00f2ff]/5 blur-[180px] rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#7000ff]/6 blur-[120px] rounded-full" />
      </div>

      {/* ── heading ── */}
      <div className="relative z-10 text-center px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.6em] text-[#00f2ff] font-mono mb-4">
            04. Capabilities
          </p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Tech{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #00f2ff, #56e4ebff)" }}
            >
              Galaxy
            </span>
          </h2>
          <p className="mt-5 text-neutral-500 font-mono text-xs tracking-widest max-w-sm mx-auto uppercase leading-loose">
            A constellation of technologies orbiting the core of modern development.
          </p>
        </motion.div>
      </div>

      {/* ── orbit arena ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex-shrink-0"
        style={{ width: orbitSize, height: orbitSize }}
      >
        {/* rotating dashed decorators */}
        {[300, 460, 620].map((d, i) => (
          <motion.div
            key={d}
            className="absolute rounded-full border border-dashed border-white/[0.04] pointer-events-none"
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
            style={{
              width: d,
              height: d,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
            }}
          />
        ))}

        {/* solid orbit rings + nodes */}
        {orbits.map((o) => (
          <OrbitRing key={o.radius} {...o} />
        ))}

        {/* glowing core */}
        <GlowingCore />

        {/* floating particles in outer space */}
        <FloatingParticles />

        {/* drifting keyword labels */}
        <FloatingKeywords />

        {/* + cross sparkles */}
        <FloatingCrosses />
      </motion.div>

      {/* ── marquee rows ── */}
      {/* <div className="relative z-10 w-full mt-24 flex flex-col gap-4">
        <MarqueeRow speed={25} />
        <MarqueeRow reverse speed={30} />
      </div> */}
    </section>
  );
}
