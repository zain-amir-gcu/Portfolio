"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaExternalLinkAlt, FaReact, 
  FaNodeJs, FaLinkedin, FaUniversity, 
  FaUserShield, FaUsers, FaCalendarCheck 
} from "react-icons/fa";
import { SiMysql, SiExpress, SiTailwindcss } from "react-icons/si";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function GCUSocietiesPortal() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const techStack = [
    { name: "React.js", icon: <FaReact />, color: "text-[#61DAFB] hover:border-[#61DAFB]/40" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933] hover:border-[#339933]/40" },
    { name: "Express.js", icon: <SiExpress />, color: "text-white hover:border-white/40" },
    { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1] hover:border-[#4479A1]/40" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[#06B6D4] hover:border-[#06B6D4]/40" }
  ];

  const features = [
    {
      title: "Centralized Digital Framework",
      desc: "Replaced fragmented, manual workflows with a single source of truth for all university societies.",
      icon: <FaUniversity className="text-[#00f2ff]" />
    },
    {
      title: "Role-Based Dashboards",
      desc: "Specialized portals for Students, Cabinet Members, and Administration to request, manage, and approve actions seamlessly.",
      icon: <FaUserShield className="text-[#00f2ff]" />
    },
    {
      title: "Membership & Cabinet Management",
      desc: "Real-time tracking of active members, pending membership requests, and cabinet hierarchies.",
      icon: <FaUsers className="text-[#00f2ff]" />
    },
    {
      title: "Event & Post Approvals",
      desc: "A structured, transparent pipeline to request event approvals and publish announcements directly through the platform.",
      icon: <FaCalendarCheck className="text-[#00f2ff]" />
    }
  ];

  const contributions = [
    {
      title: "Vision & Product Architecture",
      desc: "Conceptualized the end-to-end framework and database structures, moving the university away from legacy manual processes."
    },
    {
      title: "Requirements Gathering",
      desc: "Interviewed administrative heads and cabinet members to map out complex, multi-tiered institutional approval workflows."
    },
    {
      title: "Cross-Functional Coordination",
      desc: "Bridged the gap between administrative executives and the engineering team to ensure rapid integration and absolute alignment."
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
            GCU Societies Board Portal
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse shadow-[0_0_10px_#00f2ff]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#00f2ff]">Active System</span>
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#00f2ff] font-mono font-medium">Selected Work</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            GCU Societies<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#00f2ff]">
              Board Portal.
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
              src="/societyboard.png" 
              alt="GCU Societies Board Portal Showcase Dashboard"
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
                  Government College University, Lahore, holds a prestigious 150-year legacy of student societies. 
                  However, managing these groups manually led to scattered records, repetitive coordination, and 
                  major administrative friction.
                </p>
                <p>
                  To honor this tradition while modernizing operations, I conceptualized and drove the creation of the 
                  <strong className="text-white font-medium"> GCU Societies Board Portal</strong>. 
                  Developed under the Directorate of IT, this unified digital ecosystem streamlines society operations, 
                  centralizes collaboration, and completely eliminates manual approval bottlenecks. It seamlessly 
                  connects students, cabinet members, and university administration into a single, structured workspace.
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feat, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md hover:border-[#00f2ff]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00f2ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/20 transition-all duration-500">
                      {feat.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#00f2ff] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                      {feat.desc}
                    </p>
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
                  Acting as the bridge between technology and institutional strategy under the Directorate of IT, 
                  I took absolute ownership of the project lifecycle:
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
                  href="https://societies.gcu.edu.pk:10580/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(0,242,255,0.25)] hover:shadow-[0_0_35px_rgba(0,242,255,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Launch Live Portal
                  <FaExternalLinkAlt size={12} />
                </a>

                <a 
                  href="https://www.linkedin.com/posts/zainamirr_gcu-societies-board-portal-activity-7434616062148628480-ec5V?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
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
                  <span className="text-neutral-300 text-right">Lead Architect & Dev</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Period</span>
                  <span className="text-neutral-300 text-right">2025 - Present</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Database</span>
                  <span className="text-neutral-300 text-right">MySQL</span>
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
