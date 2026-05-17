"use client";

import { ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaArrowRight } from "react-icons/fa";

/* ─── Animated background orbs ─── */
const BackgroundOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.32, 0.18], x: [0, 80, 0], y: [0, -40, 0] }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00f2ff] rounded-full mix-blend-screen filter blur-[160px]"
    />
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.12, 0.22, 0.12], x: [0, -80, 0], y: [0, 80, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7000ff] rounded-full mix-blend-screen filter blur-[160px]"
    />
  </div>
);

/* ─── Contact card ─── */
interface ContactItem {
  name: string;
  value: string;
  href: string;
  icon: ReactNode;
  accent: string;
}

const ContactCard = ({ item, index, className = "" }: { item: ContactItem; index: number; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -3 }}
      className={`group relative flex flex-col justify-between p-7 md:p-8
        bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden
        transition-colors duration-400
        hover:border-[#00f2ff]/30 hover:bg-white/[0.055]
        shadow-[0_2px_20px_rgba(0,0,0,0.4)]
        ${className}`}
    >
      {/* Mouse-tracking spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(0,242,255,0.08),
              transparent 80%
            )
          `,
        }}
      />

      {/* Top beam on hover */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${item.accent}88, transparent)` }}
      />

      <div className="relative z-10 flex justify-between items-start">
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xl text-white/40 group-hover:text-[#00f2ff] group-hover:border-[#00f2ff]/30 group-hover:bg-[#00f2ff]/[0.08] transition-all duration-400"
        >
          {item.icon}
        </motion.div>

        <div className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center border border-white/[0.07] group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-400">
          <FaArrowRight className="text-white/25 text-xs transform -rotate-45 group-hover:rotate-0 group-hover:text-[#00f2ff] transition-all duration-400" />
        </div>
      </div>

      <div className="relative z-10 mt-12">
        <h4 className="text-[9px] uppercase tracking-[0.45em] text-neutral-600 mb-2 font-mono group-hover:text-[#00f2ff]/70 transition-colors duration-400">
          {item.name}
        </h4>
        <p className="text-lg md:text-xl font-light tracking-tight text-neutral-300 group-hover:text-white transition-colors duration-400 truncate">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
};

/* ─── Main Export ─── */
export default function Contact() {
  const contactLinks: ContactItem[] = [
    {
      name: "Email",
      value: "zainamir.gcu@gmail.com",
      href: "mailto:zainamir.gcu@gmail.com",
      icon: <FaEnvelope />,
      accent: "#00f2ff",
    },
    {
      name: "LinkedIn",
      value: "zainamirr",
      href: "https://www.linkedin.com/in/zainamirr/",
      icon: <FaLinkedin />,
      accent: "#0077b5",
    },
    {
      name: "GitHub",
      value: "zainamirr",
      href: "https://github.com/zainamirr",
      icon: <FaGithub />,
      accent: "#7000ff",
    },
    {
      name: "Instagram",
      value: "zain__aamir",
      href: "https://www.instagram.com/zain__aamir?igsh=MTA0Z3l4a3d0anFz",
      icon: <FaInstagram />,
      accent: "#E1306C",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 md:py-44 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #09090c 0%, #08080a 100%)" }}
    >
      {/* Atmospheric grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"
          style={{
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 60%, transparent 100%)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      <BackgroundOrbs />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-14 lg:gap-24">

          {/* ── Left: Headline copy ── */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {/* Status pill */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 shadow-[0_0_20px_rgba(0,242,255,0.08)]">
                <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#00f2ff] font-mono font-light">
                  Available for Work
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-600 font-mono mb-5">
                05. Contact
              </p>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.92] mb-7 text-white">
                Let&apos;s Build{" "}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#60c8ff] to-[#7000ff]">
                  Together.
                </span>
              </h2>

              <p className="text-base md:text-lg text-neutral-500 font-light max-w-md leading-loose mb-10" style={{ fontWeight: 300 }}>
                Whether you have a vision to realize, a project to collaborate on, or just want to
                discuss the future of tech and design — my inbox is always open.
              </p>

              {/* Decorative dot row */}
              <div className="flex items-center gap-5 text-white/15">
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]/45" />
                </div>
                <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* ── Right: Contact cards ── */}
          <div className="lg:w-1/2 flex flex-col gap-4">
            <ContactCard item={contactLinks[0]} index={0} className="w-full" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <ContactCard item={contactLinks[1]} index={1} />
              <ContactCard item={contactLinks[2]} index={2} />
              <ContactCard item={contactLinks[3]} index={3} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
