"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useRef } from "react";
import SpotlightCard from "./SpotlightCard";
import Skills from "./Skills";
import Contact from "./Contact";
import ContactTransition from "./ContactTransition";
import Link from "next/link";
import { FaReact, FaNodeJs, FaAngular, FaExternalLinkAlt, FaCode, FaLayerGroup, FaPalette } from "react-icons/fa";
import { SiMysql, SiFigma, SiTailwindcss, SiMongodb } from "react-icons/si";

const textReveal = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
};

interface ProjectItem {
  title: string;
  slug?: string;
  description: string;
  tags: (string | JSX.Element)[];
  role: string;
  stats: string;
  color: string;
}

const projects: ProjectItem[] = [
  {
    title: "GCU Societies Board Portal",
    slug: "gcu-societies-portal",
    description: "MERN + MySQL role-based management system.",
    tags: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMysql key="mysql" />],
    role: "Lead Developer",
    stats: "15+ Roles",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "LMS Fee Module & Automation",
    slug: "lms-fee-module",
    description: "Institutional fee & workflow automation system.",
    tags: [<FaAngular key="angular" />, <FaNodeJs key="node" />, <SiMongodb key="mongodb" />],
    role: "Full-Stack Dev",
    stats: "12-Month Life",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Roots Revival Lahore",
    slug: "roots-revival",
    description: "Sustainability & community plantation initiative.",
    tags: ["Leadership", "Community", "Policy Framework"],
    role: "Founder",
    stats: "200+ Trees",
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "GCU SFC Portal Redesign",
    slug: "gcu-sfc-redesign",
    description: "Modernized university student council digital presence.",
    tags: [<SiFigma key="figma" />, <SiTailwindcss key="tailwind" />],
    role: "UX Designer",
    stats: "UI/UX",
    color: "from-purple-500 to-indigo-500"
  },
  {
    title: "Lahore Chronicles",
    slug: "lahore-chronicles",
    description: "Documentary detailing Lahore's role in the Pakistan Movement.",
    tags: ["Research", "Production", "Voiceover"],
    role: "Project Head",
    stats: "Documentary",
    color: "from-amber-400 to-orange-500"
  }
];

const experiences = [
  {
    company: "IT Directorate, GCU",
    role: "Web Dev Intern",
    period: "2025 - Present",
    details: ["MERN + MySQL Portal", "LMS Automation", "UI/UX Redesign"],
    slug: "web-developer-dit"
  },
  {
    company: "Computer Science Society",
    role: "Vice President",
    period: "2024 - Present",
    details: ["400% Social Media Growth", "15+ Multimedia Campaigns", "Event Operations Management"],
    slug: "vice-president-css"
  },
  {
    company: "Devsinc",
    role: "Ambassador",
    period: "2025 - 2026",
    details: ["Industry-Academia bridge", "Event Organizer", "Campus Outreach"],
    slug: "campus-ambassador-devsinc"
  }
];

const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"
      style={{
        maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, #000 40%, transparent 100%)'
      }}
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.15, 0.3, 0.15],
        x: [0, 50, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#00f2ff] rounded-full mix-blend-screen filter blur-[150px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.1, 0.2, 0.1],
        x: [0, -50, 0],
        y: [0, 50, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px]"
    />
  </div>
);

/* ─────────────────────── HorizontalJourney ─────────────────────── */

interface Experience {
  company: string;
  role: string;
  period: string;
  details: string[];
  slug: string;
}

function HorizontalJourney({ experiences }: { experiences: Experience[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const isDragging = useRef(false);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  function getConstraints() {
    const track = trackRef.current;
    if (!track) return { left: 0, right: 0 };
    const parent = track.parentElement;
    if (!parent) return { left: 0, right: 0 };
    const left = -(track.scrollWidth - parent.clientWidth + 48);
    return { left: Math.min(left, 0), right: 0 };
  }

  const CARD_COLORS = ["#00f2ff", "#7000ff", "#00f2ff"];

  // Monitor mobile scroll position to update active dot indicator
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const newIdx = Math.round(scrollLeft / (290 + 24)); // card width (290) + gap (24)
    setActiveMobileIdx(Math.min(Math.max(newIdx, 0), experiences.length - 1));
  };

  return (
    <div id="experience" className="relative z-10 pt-20 pb-24 md:pb-28 overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-24 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6 shadow-[0_0_20px_rgba(0,242,255,0.05)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#00f2ff] font-mono font-medium">
            02. Journey
          </span>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
        >
          Where I&apos;ve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-[#7000ff]">
            Been
          </span>
        </motion.h3>

        {/* Dynamic explore text */}
        <p className="mt-3 text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-neutral-600 font-mono">
          <span className="hidden md:inline">Drag to explore →</span>
          <span className="inline md:hidden">Swipe to explore →</span>
        </p>
      </div>

      {/* Fade masks (hidden on mobile to allow native swiping view edge-to-edge) */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#08080a] to-transparent z-20 pointer-events-none" />
      <div className="hidden md:block absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#08080a] to-transparent z-20 pointer-events-none" />

      {/* ────────────────────────────────────────────────────────
           1. DESKTOP / TABLET LAYOUT: Framer Motion Drag-to-Scroll
           ──────────────────────────────────────────────────────── */}
      <div className="hidden md:block">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={getConstraints()}
          dragElastic={0.08}
          dragMomentum={true}
          style={{ x, cursor: isDragging.current ? "grabbing" : "grab", width: "max-content" }}
          onDragStart={() => { isDragging.current = true; }}
          onDragEnd={() => {
            isDragging.current = false;
            // Snap to boundary if overscrolled
            const c = getConstraints();
            const cur = x.get();
            if (cur > c.right) animate(x, c.right, { type: "spring", stiffness: 300, damping: 30 });
            if (cur < c.left) animate(x, c.left, { type: "spring", stiffness: 300, damping: 30 });
          }}
          className="flex gap-8 px-24 select-none items-stretch"
        >
          {/* Horizontal connecting line */}
          <div className="absolute left-0 right-0 top-[calc(50%-1px)] h-px bg-gradient-to-r from-transparent via-[#00f2ff]/20 to-transparent pointer-events-none z-0" />

          {experiences.map((exp, i) => {
            const accent = CARD_COLORS[i % CARD_COLORS.length];

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="relative group w-[360px] flex-shrink-0"
                style={{ height: "340px" }}
              >
                {/* Numbered step indicator */}
                <div className="absolute -top-4 left-6 z-20 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border"
                    style={{
                      background: `${accent}18`,
                      borderColor: `${accent}50`,
                      color: accent,
                      boxShadow: `0 0 16px ${accent}33`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px w-12 opacity-30" style={{ background: accent }} />
                </div>

                <SpotlightCard
                  className={`h-full flex flex-col !p-7 border-white/[0.08] hover:border-[#00f2ff]/30 transition-all duration-500 ${exp.slug ? "cursor-pointer" : ""}`}
                >
                  {/* Top beam on hover */}
                  <div
                    className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${accent}88, transparent)` }}
                  />

                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-5">
                      <span
                        className="inline-block text-[9px] uppercase tracking-[0.35em] font-mono mb-3 px-2.5 py-1 rounded-full border"
                        style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
                      >
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-white leading-tight flex items-center gap-2">
                        {exp.role}
                        {exp.slug && (
                          <FaExternalLinkAlt
                            className="text-xs opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                            style={{ color: accent }}
                          />
                        )}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.3em] font-mono mt-1" style={{ color: accent }}>
                        {exp.company}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px mb-5" style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }} />

                    {/* Detail bullets */}
                    <ul className="flex flex-col gap-3 flex-grow">
                      {exp.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-3 text-[13px] text-neutral-500 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-400">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[5px]"
                            style={{ background: `${accent}70` }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom CTA hint */}
                    {exp.slug && (
                      <div
                        className="mt-5 pt-4 border-t text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover:opacity-60 transition-opacity duration-400"
                        style={{ borderColor: `${accent}20`, color: accent }}
                      >
                        View Case Study →
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </motion.div>
            );

            return exp.slug ? (
              <Link
                key={`${exp.company}-${i}`}
                href={`/journey/${exp.slug}`}
                className="block flex-shrink-0"
                draggable={false}
                onClick={(e) => { if (isDragging.current) e.preventDefault(); }}
              >
                {CardContent}
              </Link>
            ) : (
              <div key={`${exp.company}-${i}`} className="flex-shrink-0">
                {CardContent}
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* ────────────────────────────────────────────────────────
           2. MOBILE LAYOUT: Native Touch Snap Swiper
           ──────────────────────────────────────────────────────── */}
      <div className="block md:hidden">
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 pb-6 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {experiences.map((exp, i) => {
            const accent = CARD_COLORS[i % CARD_COLORS.length];

            const MobileCardContent = (
              <div
                className="snap-center w-[290px] flex-shrink-0 relative group"
                style={{ height: "350px", paddingTop: "16px" }}
              >
                {/* Numbered step indicator */}
                <div className="absolute top-0 left-6 z-20 flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-mono border"
                    style={{
                      background: `${accent}18`,
                      borderColor: `${accent}50`,
                      color: accent,
                      boxShadow: `0 0 16px ${accent}33`,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px w-8 opacity-30" style={{ background: accent }} />
                </div>

                <SpotlightCard
                  className="h-[calc(100%-16px)] flex flex-col !p-6 border-white/[0.08] active:border-[#00f2ff]/30 transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="mb-4">
                      <span
                        className="inline-block text-[8px] uppercase tracking-[0.35em] font-mono mb-2 px-2 py-0.5 rounded-full border"
                        style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}
                      >
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold tracking-tighter text-white leading-tight flex items-center gap-2">
                        {exp.role}
                        {exp.slug && (
                          <FaExternalLinkAlt className="text-[10px]" style={{ color: accent }} />
                        )}
                      </h3>
                      <p className="text-[10px] uppercase tracking-[0.3em] font-mono mt-0.5" style={{ color: accent }}>
                        {exp.company}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px mb-4" style={{ background: `linear-gradient(90deg, ${accent}30, transparent)` }} />

                    {/* Detail bullets */}
                    <ul className="flex flex-col gap-2.5 flex-grow">
                      {exp.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-neutral-400 font-light leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[4px]"
                            style={{ background: `${accent}70` }}
                          />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Bottom CTA hint */}
                    {exp.slug && (
                      <div
                        className="mt-4 pt-3 border-t text-[9px] uppercase tracking-widest font-mono opacity-80"
                        style={{ borderColor: `${accent}15`, color: accent }}
                      >
                        Tap to View Case Study →
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              </div>
            );

            return exp.slug ? (
              <Link
                key={`${exp.company}-mobile-${i}`}
                href={`/journey/${exp.slug}`}
                className="block flex-shrink-0"
              >
                {MobileCardContent}
              </Link>
            ) : (
              <div key={`${exp.company}-mobile-${i}`} className="flex-shrink-0">
                {MobileCardContent}
              </div>
            );
          })}
        </div>

        {/* Mobile progress indicators */}
        <div className="flex justify-center items-center gap-2.5 mt-2">
          {experiences.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = mobileScrollRef.current;
                if (el) el.scrollLeft = i * (290 + 24);
              }}
              className="w-8 h-4 flex items-center justify-center group"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeMobileIdx === i ? "w-5 bg-[#00f2ff]" : "w-1.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative z-10 bg-transparent text-white selection:bg-[#00f2ff] selection:text-black">
      {/* ═══════════════════════════════════════════════════════
           ABOUT SECTION — PREMIUM REDESIGN
      ═══════════════════════════════════════════════════════ */}
      <div id="about" className="relative py-32 md:py-56 px-6 md:px-24 overflow-hidden border-t border-white/[0.02]">
        
        {/* Advanced Ambient Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(0,242,255,0.03)_0%,transparent_70%)] blur-[100px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(112,0,255,0.03)_0%,transparent_70%)] blur-[120px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.05] mb-16 shadow-[0_4px_24px_-8px_rgba(0,242,255,0.1)] backdrop-blur-md"
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute w-full h-full rounded-full bg-[#00f2ff] animate-ping opacity-60" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-[#00f2ff]" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.7em] text-[#00f2ff] font-mono font-medium">
              01. The Architect
            </span>
          </motion.div>

          {/* Hero headline & Sub */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-24 mb-24 items-end">
            <div className="xl:col-span-7">
              <motion.h2
                initial={{ y: 60, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] tracking-tighter"
              >
                Engineering <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-gradient-to-r from-[#00f2ff]/20 to-[#7000ff]/20 blur-2xl opacity-50" />
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00f2ff] to-[#7000ff]">
                    Atmospheres.
                  </span>
                </span>
              </motion.h2>
            </div>
            <div className="xl:col-span-5 pb-4">
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-lg md:text-xl font-light text-neutral-400 leading-relaxed border-l border-[#00f2ff]/30 pl-6"
              >
                Building at the intersection of <span className="text-white font-medium">technical precision</span> and <span className="text-white font-medium">visual storytelling</span> — crafting digital experiences where every pixel has absolute purpose.
              </motion.p>
            </div>
          </div>

          {/* Two-column body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Left Narrative Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              {/* Primary bio card */}
              <div className="relative p-8 md:p-12 rounded-[2rem] bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.05] backdrop-blur-xl group overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/[0.1] transition-all duration-700">
                
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00f2ff]/10 to-transparent blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  <p className="text-[16px] md:text-[18px] text-neutral-300 leading-[1.9] font-light">
                    I&apos;m <span className="text-white font-semibold tracking-wide">Zain Amir</span>, a Computer Science visionary at <span className="text-[#00f2ff] font-medium">GCU Lahore</span>, committed to setting the standard for digital excellence.
                  </p>
                  <div className="w-12 h-px bg-gradient-to-r from-[#00f2ff] to-transparent my-6 opacity-50" />
                  <p className="text-[16px] md:text-[18px] text-neutral-400 leading-[1.9] font-light">
                    I build at the intersection of full-stack engineering and interface design—crafting <em className="text-white not-italic font-medium">scalable systems</em> and refined user experiences where every detail serves a purpose. My goal is to turn ambitious ideas into world-class products that users love, engineers respect, and others measure themselves against.
                  </p>
                </div>
              </div>

              {/* Discipline pills */}
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  { icon: <FaCode />, label: "Full-Stack Engineering", color: "#00f2ff" },
                  { icon: <FaPalette />, label: "UI / UX Design", color: "#b026ff" },
                  { icon: <FaLayerGroup />, label: "Systems Architecture", color: "#00f2ff" },
                ].map(({ icon, label, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.06)", borderColor: `${color}66` }}
                    className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/[0.05] text-neutral-300 text-[12px] font-mono uppercase tracking-[0.15em] cursor-default transition-all duration-300"
                  >
                    <span style={{ color }} className="text-base drop-shadow-[0_0_8px_currentColor]">{icon}</span>
                    {label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Stats Block */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {/* Stat tiles grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {[
                  { value: "3+", label: "Production Systems", accent: "from-[#00f2ff]" },
                  { value: "300+", label: "Trees Planted (Roots Revival)", accent: "from-[#10b981]" },
                  { value: "15+", label: "Tech Projects", accent: "from-[#7000ff]" },
                ].map(({ value, label, accent }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/[0.04] overflow-hidden group transition-all duration-400 hover:bg-white/[0.04]"
                  >
                    {/* Hover Gradient Line */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <span className="text-4xl font-bold tracking-tighter text-white group-hover:scale-110 transition-transform duration-500 origin-left drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                      {value}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-mono text-right max-w-[140px] leading-relaxed group-hover:text-neutral-300 transition-colors duration-400">
                      {label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy quote */}
              <div className="relative p-7 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.05] mt-auto">
                <div className="absolute top-4 left-4 text-4xl text-white/5 font-serif leading-none">&quot;</div>
                <p className="text-[14px] text-neutral-400 leading-[1.8] font-light italic relative z-10 pl-4 border-l-2 border-[#00f2ff]/20">
                  I believe in setting the standard for excellence—building software, leading teams, and delivering solutions that redefine what great work looks like.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
           SHARED WRAPPER — Journey + Archive
      ═══════════════════════════════════════════════════════ */}
      <div className="relative bg-[#08080a] border-y border-white/5">
        <BackgroundElements />

        {/* ── JOURNEY: Horizontal Draggable Timeline ── */}
        <HorizontalJourney experiences={experiences} />

        {/* Projects - Cinematic Marquee Cards */}
        <div id="projects" className="relative z-10 py-24 md:py-32 overflow-hidden">
          <div className="px-6 md:px-24 mb-16 md:mb-24">
            <motion.div {...textReveal} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
               <span className="text-[10px] uppercase tracking-[0.6em] text-[#00f2ff] font-mono font-medium">
                 03. Archive
               </span>
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Selected Work
            </motion.h3>
          </div>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#08080a] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#08080a] to-transparent z-20 pointer-events-none" />

            <motion.div 
              className="flex gap-8 md:gap-12 px-6 md:px-24 w-max whitespace-nowrap"
              animate={{ x: isPaused ? undefined : ["0%", "-33.333%"] }}
              transition={{ 
                duration: projects.length * 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...projects, ...projects, ...projects].map((p, i) => {
                const CardContent = (
                  <SpotlightCard 
                    className="w-[260px] md:w-[320px] h-[280px] md:h-[320px] transition-all duration-700 group overflow-hidden flex flex-col hover:-translate-y-4 cursor-pointer"
                  >
                    {/* Decorative background gradient on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${p.color} transition-opacity duration-700 blur-2xl`} />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[10px] md:text-xs font-mono text-white uppercase tracking-widest px-3 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-md group-hover:border-[#00f2ff]/50 group-hover:text-[#00f2ff] transition-colors">
                          {p.stats}
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-500">
                          <FaExternalLinkAlt className="text-white/40 group-hover:text-[#00f2ff] transition-colors" />
                        </div>
                      </div>
                      
                      <h4 className="text-xl md:text-2xl font-bold mb-3 tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all whitespace-normal leading-tight">
                        {p.title}
                      </h4>
                      
                      <p className="text-xs md:text-sm text-neutral-400 leading-relaxed whitespace-normal mb-4 font-light max-w-sm flex-grow">
                        {p.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        {p.tags.map((tag, k) => (
                          <span 
                            key={k} 
                            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 text-neutral-300 text-xs md:text-sm font-light transition-all hover:text-[#00f2ff]"
                          >
                            {typeof tag === "string" ? tag : tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SpotlightCard>
                );

                if (p.slug) {
                  return (
                    <Link href={`/projects/${p.slug}`} key={`${p.title}-${i}`} className="block">
                      {CardContent}
                    </Link>
                  );
                }

                return (
                  <div key={`${p.title}-${i}`} className="block">
                    {CardContent}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <div id="skills">
        <Skills />
      </div>

      <ContactTransition />

      <Contact />

      <footer className="relative py-40 md:py-64 px-6 md:px-24 bg-[#020202] border-t border-white/[0.03] overflow-hidden flex flex-col items-center justify-center">
        {/* Hypnotic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_30%,transparent_100%)] pointer-events-none" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[30vw] bg-[#00f2ff]/[0.02] blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-7xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 md:mb-24 relative group"
          >
            {/* Pulsing rings around the status pill */}
            <div className="absolute inset-0 rounded-full border border-[#00f2ff]/20 animate-ping opacity-20 duration-1000" />
            
             <div className="relative inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#00f2ff]/[0.03] border border-[#00f2ff]/10 backdrop-blur-xl group-hover:bg-[#00f2ff]/[0.08] group-hover:border-[#00f2ff]/30 transition-all duration-500 cursor-crosshair shadow-[0_0_40px_rgba(0,242,255,0.05)] group-hover:shadow-[0_0_60px_rgba(0,242,255,0.15)]">
               <div className="relative flex items-center justify-center w-3 h-3">
                 <div className="w-full h-full rounded-full bg-[#00f2ff] animate-ping absolute opacity-80" />
                 <div className="w-2 h-2 rounded-full bg-[#00f2ff] relative shadow-[0_0_10px_#00f2ff]" />
               </div>
               <span className="text-xs md:text-sm uppercase tracking-[0.5em] text-[#00f2ff]/70 font-mono group-hover:text-[#00f2ff] transition-colors duration-500 font-semibold">
                 All Systems Operational
               </span>
             </div>
          </motion.div>

          {/* Massive Animated ZAIN */}
          <motion.div
            className="relative w-full cursor-crosshair group flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            {/* The Main Text */}
            <h2 className="text-[25vw] md:text-[20vw] font-black tracking-tighter select-none leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white/[0.08] to-transparent group-hover:from-white/[0.15] transition-all duration-1000 relative z-10">
              ZAIN.
            </h2>
            
            {/* Outlined Hover State */}
            <h2 
              className="absolute text-[25vw] md:text-[20vw] font-black tracking-tighter select-none leading-[0.75] text-transparent inset-x-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 scale-[1.03] group-hover:scale-100" 
              style={{ WebkitTextStroke: '2px rgba(0, 242, 255, 0.6)' }}
            >
              ZAIN.
            </h2>

            {/* Reflection / Shadow underneath */}
            <h2 className="absolute top-full left-0 right-0 text-[25vw] md:text-[20vw] font-black tracking-tighter select-none leading-[0.75] text-transparent bg-clip-text bg-gradient-to-t from-white/[0.02] to-transparent scale-y-[-0.5] origin-top blur-sm opacity-50 z-0 pointer-events-none">
              ZAIN.
            </h2>
            
            {/* Floating ambient lights behind text */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-to-r from-[#00f2ff]/10 to-[#7000ff]/10 rounded-full mix-blend-screen filter blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mt-32 md:mt-48 pt-12 border-t border-white/[0.03] relative z-30"
          >
            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="text-neutral-400 text-[11px] md:text-xs uppercase tracking-[0.5em] font-mono text-center md:text-left">
                Engineering <span className="text-[#00f2ff]">Digital Atmospheres</span>
              </p>
              <div className="flex gap-4 items-center opacity-50">
                <span className="w-1 h-1 rounded-full bg-white" />
                <span className="w-1 h-1 rounded-full bg-white" />
                <span className="w-1 h-1 rounded-full bg-white" />
              </div>
            </div>
            
            {/* Complex Orbiting Indicator */}
            <div className="relative flex items-center justify-center w-24 h-24 group cursor-pointer hover:scale-110 transition-transform duration-500">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-white/20 rounded-full group-hover:border-[#00f2ff]/60 group-hover:bg-[#00f2ff]/5 transition-all duration-500"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border-2 border-transparent border-t-white/30 border-b-white/30 rounded-full group-hover:border-t-[#7000ff]/60 group-hover:border-b-[#7000ff]/60 transition-colors duration-500"
              />
              <div className="w-3 h-3 rounded-full bg-white group-hover:bg-[#00f2ff] shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:shadow-[0_0_40px_#00f2ff] transition-all duration-500" />
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
               <p className="text-neutral-500 text-[9px] md:text-[11px] uppercase tracking-[0.6em] font-mono group-hover:text-white transition-colors duration-500">
                 © {new Date().getFullYear()} ARCHITECTED BY ZAIN AMIR
               </p>
               <p className="text-neutral-700 text-[8px] font-mono tracking-[0.3em] uppercase">
                 Based in Lahore, Pakistan
               </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
