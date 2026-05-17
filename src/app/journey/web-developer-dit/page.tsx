"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaExternalLinkAlt, FaLinkedin, 
  FaCode, FaDatabase, FaServer, FaCogs, 
  FaDesktop, FaLayerGroup, FaArrowRight
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiTailwindcss, SiFigma } from "react-icons/si";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function WebDeveloperDIT() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const competencies = [
    { name: "Full-Stack Dev", icon: <FaCode />, color: "text-[#00f2ff] hover:border-[#00f2ff]/40" },
    { name: "MERN Stack", icon: <SiMongodb />, color: "text-[#47A248] hover:border-[#47A248]/40" },
    { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1] hover:border-[#4479A1]/40" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#38BDF8] hover:border-[#38BDF8]/40" },
    { name: "Figma", icon: <SiFigma />, color: "text-[#F24E1E] hover:border-[#F24E1E]/40" },
    { name: "System Architecture", icon: <FaServer />, color: "text-[#A855F7] hover:border-[#A855F7]/40" }
  ];

  const milestones = [
    {
      title: "GCU Societies Board Portal",
      role: "Lead Concept & Architect",
      desc: "Built a unified digital framework with role-based dashboards connecting students, cabinet members, and administration into a single, structured workspace replacing legacy tracking.",
      stack: "MERN Stack, MySQL",
      link: "/projects/gcu-societies-portal"
    },
    {
      title: "GCU SFC Portal Redesign",
      role: "UI/UX Designer & Frontend",
      desc: "Reimagined the entry interface with crisp typography, sleek glassmorphic UI elements, and optimized input states that minimized login friction during high-traffic windows.",
      stack: "Figma, Tailwind CSS, Custom Web Assets",
      link: "/projects/gcu-sfc-redesign"
    },
    {
      title: "LMS Fee Module & Automation",
      role: "Full-Stack Engineer & DBA",
      desc: "Architected a custom financial reporting engine and implemented an intelligent auto-locking compliance gate middleware that dynamically handles student access restrictions.",
      stack: "MEAN Stack (Angular, Node.js, Express, MongoDB)",
      link: "/projects/lms-fee-module"
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
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-[#00f2ff]/10 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.15, 0.1],
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
            href="/#experience" 
            className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#00f2ff] transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Journey
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline-block">
            Directorate of IT
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse shadow-[0_0_10px_#00f2ff]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#00f2ff]">Web Developer</span>
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#00f2ff] font-mono font-medium">Professional Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            Web Developer<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#00f2ff]">
              Directorate of IT.
            </span>
          </h1>
        </motion.div>

        {/* 2. DYNAMIC HERO ASSET SHOWCASE */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-md mx-auto rounded-[2rem] border border-white/10 bg-white/[0.01] p-4 md:p-6 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#00f2ff]/30 transition-all duration-700 mb-20"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f2ff] to-transparent animate-[beam_3s_infinite_linear]" />
          
          <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d0d11] flex items-center justify-center p-8">
            <motion.img 
              src="/dit.png" 
              alt="Directorate of Information Technology Workplace Asset"
              className="max-h-[150px] w-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        {/* 3. COLUMNS ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          
          {/* LEFT & CENTER: MAIN TEXT CONTENT DETAILS */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* EXPERIENCE OVERVIEW */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#00f2ff] font-mono text-sm">[01]</span> Experience Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  During my tenure as a Web Developer at the <strong className="text-white font-medium">Directorate of Information Technology, GC University Lahore</strong>, I engineered, optimized, and delivered high-impact enterprise digital solutions. Acting as a core bridge between technical execution and institutional strategy, I worked across full-stack development lifecycles to transform legacy manual workflows into automated, secure, and modern web applications.
                </p>
                <p>
                  From database architecture tuning to creative asset optimization and user interface polish, my contributions directly enhanced the digital infrastructure serving thousands of students, cabinet members, and administrative staff.
                </p>
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* MAJOR ENGINEERING MILESTONES (DEEP LINKS) */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#00f2ff] font-mono text-sm">[02]</span> Major Engineering Milestones
              </h2>
              
              <div className="space-y-6">
                {milestones.map((milestone, i) => (
                  <Link href={milestone.link} key={i} className="block group">
                    <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md hover:border-[#00f2ff]/30 hover:bg-white/[0.03] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                      <div className="absolute right-6 top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-[#00f2ff]">
                        <FaArrowRight size={20} />
                      </div>
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00f2ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-4">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#00f2ff] transition-colors pr-10">
                          {i + 1}. {milestone.title}
                        </h3>
                      </div>
                      
                      <div className="space-y-3 pr-8">
                        <p className="text-sm md:text-base text-neutral-300">
                          <span className="text-white font-medium">Role:</span> {milestone.role}
                        </p>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                          <span className="text-white font-medium">Impact:</span> {milestone.desc}
                        </p>
                        <p className="text-xs font-mono text-[#00f2ff]/80 uppercase tracking-widest mt-4">
                          Stack: {milestone.stack}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* CORE COMPETENCIES DEMONSTRATED */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#00f2ff] font-mono text-sm">[03]</span> Competencies Demonstrated
              </h2>

              <div className="space-y-6">
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[#00f2ff] bg-neutral-900 flex-shrink-0">
                    <FaCode size={16} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">Full-Stack Engineering</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      Proficient execution across multiple architectural paradigms (MERN, MEAN, and Relational/Non-Relational Databases).
                    </p>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[#00f2ff] bg-neutral-900 flex-shrink-0">
                    <FaLayerGroup size={16} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">Cross-Functional Leadership</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      Interviewed multi-tiered administrative stakeholders to extract system requirements and map out complex operational paths.
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[#00f2ff] bg-neutral-900 flex-shrink-0">
                    <FaCogs size={16} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white tracking-tight">Performance & Asset Optimization</h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed">
                      Processed, compressed, and dynamically rendered lightweight design elements and database constraints to guarantee zero down-time.
                    </p>
                  </div>
                </div>
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00f2ff]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#00f2ff]/10 transition-colors duration-500" />
              
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Professional Hub</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">External Links</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/zainamirr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(0,242,255,0.25)] hover:shadow-[0_0_35px_rgba(0,242,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Professional Updates
                  <FaLinkedin size={14} />
                </a>
              </div>

              <hr className="border-white/5" />

              {/* METADATA QUICK STATS */}
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Company</span>
                  <span className="text-neutral-300 text-right">DIT, GCU</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">Web Developer</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Timeline</span>
                  <span className="text-neutral-300 text-right">2025 - Present</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Location</span>
                  <span className="text-neutral-300 text-right">Lahore</span>
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
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Core Stack Utilized</h4>
              
              <div className="flex flex-wrap gap-2.5">
                {competencies.map((tech, idx) => (
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
