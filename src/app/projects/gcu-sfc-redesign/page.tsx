"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaExternalLinkAlt, FaLinkedin, 
  FaCamera, FaCode, FaPaintBrush, FaCompass 
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiCss } from "react-icons/si";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function GCUSFCRedesign() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E] hover:border-[#F24E1E]/40" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4] hover:border-[#06B6D4]/40" },
    { name: "Custom CSS", icon: <SiCss />, color: "text-[#1572B6] hover:border-[#1572B6]/40" },
    { name: "Photography", icon: <FaCamera />, color: "text-[#e2e8f0] hover:border-[#e2e8f0]/40" },
    { name: "Lottie / coding.json", icon: <FaCode />, color: "text-[#a855f7] hover:border-[#a855f7]/40" }
  ];

  const features = [
    {
      title: "Atmospheric Visual Polish",
      desc: "Integrated authentic, high-quality local photography to give a standardized login portal an emotional, institutional connection.",
      icon: <FaCamera className="text-[#00f2ff]" />
    },
    {
      title: "Modernized Authentication Interface",
      desc: "Reimagined the legacy student portal entry point with sleek, glassmorphic UI elements, sharp typography, and optimized spacing.",
      icon: <FaPaintBrush className="text-[#00f2ff]" />
    },
    {
      title: "Enhanced User Experience (UX)",
      desc: "Streamlined input states, error validation feedback, and responsiveness to reduce user friction during high-traffic login windows.",
      icon: <FaCompass className="text-[#00f2ff]" />
    }
  ];

  const contributions = [
    {
      title: "UI/UX Designer & Frontend Concept Artist",
      desc: "Took complete ownership of the visual identity of the project, from capturing the primary rainy-day photograph to building the design system language."
    },
    {
      title: "Asset Optimization",
      desc: "Processed raw photography to ensure proper contrast, readability, and lightweight file delivery without sacrificing crisp visual fidelity on high-resolution screens."
    },
    {
      title: "Stakeholder Presentation",
      desc: "Pitched the creative direction to leadership at the Directorate of IT, ensuring the balance between experimental design and functional accessibility met university standards."
    }
  ];

  return (
    <main className="relative bg-[#08080a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#00f2ff] selection:text-black pb-32">
      {/* Noise Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] contrast-[140%] brightness-[140%]" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />

      {/* Atmospheric Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated ambient mesh gradients */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-[#00f2ff]/10 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] bg-blue-600/10 rounded-full filter blur-[150px]"
        />
        
        {/* Subtle grid lines background overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 40%, transparent 100%)'
          }}
        />
      </div>

      {/* Interactive Flashlight Glow following mouse on desktop */}
      <div
        className="hidden lg:block pointer-events-none fixed inset-0 z-30 opacity-60 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 242, 255, 0.03), transparent 80%)`,
        }}
      />

      {/* Minimalist Floating Sticky Navbar */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="sticky top-6 z-[100] max-w-7xl mx-auto px-6"
      >
        <div className="flex items-center justify-between px-6 py-4 rounded-full border border-white/5 bg-[#08080a]/60 backdrop-blur-2xl shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#00f2ff] transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Archive
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline-block">
            GCU SFC Portal Redesign
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse shadow-[0_0_10px_#00f2ff]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#00f2ff]">Selected Concept</span>
          </div>
        </div>
      </motion.nav>

      {/* Page Core Layout Container */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 relative z-10">
        
        {/* 1. HERO TITLE HEADER */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_20px_rgba(0,242,255,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#00f2ff] font-mono font-medium">UI/UX Showcase</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            GCU SFC Portal<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#00f2ff]">
              Redesign.
            </span>
          </h1>
        </motion.div>

        {/* 2. DYNAMIC HERO ASSET SHOWCASE */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.01] p-2 md:p-4 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#00f2ff]/30 transition-all duration-700 mb-20"
        >
          {/* Border-beam loading indicator animation */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent animate-[beam_3s_infinite_linear]" />
          
          <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d0d11]">
            <motion.img 
              src="/sfc.png" 
              alt="GCU SFC Portal Redesign Showcase Mockup"
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-700"
              style={{ transformOrigin: "center" }}
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* 3. COLUMNS ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          
          {/* LEFT & CENTER: MAIN TEXT CONTENT DETAILS */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* PROJECT OVERVIEW */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#00f2ff] font-mono text-sm">[01]</span> Project Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Great design often comes from unexpected places. On February 20th, 2025, during a quiet, rainy morning at GC University Lahore, I took a random photograph right before heading into class.
                </p>
                <p>
                  Months later, during my internship at the <strong className="text-white font-medium">Directorate of Information Technology, GCU Lahore</strong>, I was tasked with completely redesigning the GCU SFC login page. Searching for a visual direction that felt authentic, modern, and deeply tied to the campus identity, I integrated that very same rainy-day photograph into the user interface. 
                </p>
                <p>
                  By blending photography, UI/UX principles, and custom coding, the conceptualized layout fit perfectly and was officially selected as the winning design for the university platform.
                </p>
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* KEY FEATURES */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#00f2ff] font-mono text-sm">[02]</span> Key Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {features.map((feat, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md hover:border-[#00f2ff]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00f2ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/20 transition-all duration-500 flex-shrink-0">
                        {feat.icon}
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-[#00f2ff] transition-colors">
                          {feat.title}
                        </h3>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* MY ROLE & STRATEGIC CONTRIBUTION */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                  <span className="text-[#00f2ff] font-mono text-sm">[03]</span> Strategic Contribution
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                  Delivering visual assets and functional user flows for a high-traffic university platform, I executed the following critical lifecycle stages:
                </p>
              </div>

              <div className="space-y-6">
                {contributions.map((contr, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500 group flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500 bg-neutral-900 group-hover:text-[#00f2ff] group-hover:border-[#00f2ff]/30 transition-all flex-shrink-0">
                      0{i+1}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:text-neutral-200 transition-colors">
                        {contr.title}
                      </h3>
                      <p className="text-sm text-neutral-400 font-light leading-relaxed">
                        {contr.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* RIGHT COLUMN: ACTION PANEL, STATS, TECH STACK BADGES */}
          <div className="space-y-8 lg:sticky lg:top-28 self-start">
            
            {/* CALL TO ACTION CARD */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.01] backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] space-y-8 overflow-hidden relative group"
            >
              {/* Card ambient glow indicator */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f2ff]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#00f2ff]/10 transition-colors duration-500" />
              
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Launchpad</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">Project Actions</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://sfc.gcu.edu.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(0,242,255,0.25)] hover:shadow-[0_0_35px_rgba(0,242,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Launch Live Portal
                  <FaExternalLinkAlt size={12} />
                </a>

                <a 
                  href="https://www.linkedin.com/posts/zainamirr_%F0%9D%90%8F%F0%9D%90%A1%F0%9D%90%A8%F0%9D%90%AD%F0%9D%90%A8%F0%9D%90%A0%F0%9D%90%AB%F0%9D%90%9A%F0%9D%90%A9%F0%9D%90%A1%F0%9D%90%B2-%F0%9D%90%94%F0%9D%90%88%F0%9D%90%94%F0%9D%90%97-%F0%9D%90%82%F0%9D%90%A8-activity-7397941337393831936-0_jO?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-widest text-center hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono bg-white/[0.01] backdrop-blur-md"
                >
                  LinkedIn Article
                  <FaLinkedin size={14} className="text-[#0077b5]" />
                </a>
              </div>

              <hr className="border-white/5" />

              {/* METADATA QUICK STATS */}
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Client</span>
                  <span className="text-neutral-300 text-right">Directorate of IT, GCU</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">UI/UX Designer</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Period</span>
                  <span className="text-neutral-300 text-right">2025</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Scope</span>
                  <span className="text-neutral-300 text-right">Web Portal Redesign</span>
                </div>
              </div>
            </motion.div>

            {/* TECH STACK BADGES */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0f]/40 backdrop-blur-md space-y-6"
            >
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Tech Stack</h4>
              
              <div className="flex flex-wrap gap-2.5">
                {techStack.map((tech, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-default ${tech.color} hover:bg-white/[0.04]`}
                  >
                    <span className="text-sm">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </main>
  );
}
