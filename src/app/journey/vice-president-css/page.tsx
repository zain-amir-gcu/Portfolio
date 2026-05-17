"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaLinkedin, 
  FaChartLine, FaFilm, FaUsers, FaComments,
  FaAward, FaBullseye, FaLayerGroup
} from "react-icons/fa";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function VicePresidentCSS() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillset = [
    { name: "Campaign Strategy & Analytics", icon: <FaChartLine />, color: "text-[#F97316] hover:border-[#F97316]/40" },
    { name: "Cross-Functional Management", icon: <FaUsers />, color: "text-amber-500 hover:border-amber-500/40" },
    { name: "Multimedia Production", icon: <FaFilm />, color: "text-orange-600 hover:border-orange-600/40" },
    { name: "Operational Logistics", icon: <FaLayerGroup />, color: "text-[#FF5A00] hover:border-[#FF5A00]/40" },
    { name: "Public Relations", icon: <FaComments />, color: "text-[#E34F26] hover:border-[#E34F26]/40" }
  ];

  const metrics = [
    { value: "400%", label: "Reach Increase", sub: "During Annual Dinner Campaign" },
    { value: "90-100", label: "Hours Invested", sub: "Multimedia & Creative Production" },
    { value: "100+", label: "Active Threads", sub: "Daily Coordination & Sync" }
  ];

  return (
    <main className="relative bg-[#08080a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#F97316] selection:text-black pb-32">
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
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-[#F97316]/10 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] bg-amber-600/10 rounded-full filter blur-[150px]"
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
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(249, 115, 22, 0.03), transparent 80%)`,
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
            className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#F97316] transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Journey
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline-block">
            Computer Science Society
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_10px_#F97316]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#F97316]">Vice President</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_20px_rgba(249,115,22,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F97316] font-mono font-medium">Executive Leadership</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            Vice President<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#F97316]">
              Computer Science Society.
            </span>
          </h1>
        </motion.div>

        {/* 2. DYNAMIC HERO ASSET SHOWCASE */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-md mx-auto rounded-[2rem] border border-white/10 bg-white/[0.01] p-4 md:p-6 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#F97316]/30 transition-all duration-700 mb-20"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F97316] to-transparent animate-[beam_3s_infinite_linear]" />
          
          <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d0d11] flex items-center justify-center p-8">
            <motion.img 
              src="/css.png" 
              alt="Computer Science Society Official Showcase Asset"
              className="max-h-[150px] w-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        {/* STATISTICAL CALLOUT BADGES */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {metrics.map((metric, i) => (
            <div key={i} className="p-6 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-[#F97316]/30 hover:bg-[#F97316]/[0.02] transition-all duration-500 flex flex-col justify-center items-center text-center group">
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 group-hover:from-[#F97316] group-hover:to-amber-400 transition-all duration-500 mb-2">
                {metric.value}
              </h3>
              <p className="text-sm md:text-base font-medium text-neutral-200 uppercase tracking-widest mb-1">
                {metric.label}
              </p>
              <p className="text-xs font-light text-neutral-500 tracking-wide">
                {metric.sub}
              </p>
            </div>
          ))}
        </motion.div>

        {/* 3. COLUMNS ASYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
          
          {/* LEFT & CENTER: MAIN TEXT CONTENT DETAILS */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* OVERVIEW & HONOUR */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F97316] font-mono text-sm">[01]</span> Leadership Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  From managing rapid-response communication pipelines as Information Secretary to spearheading overall operational strategy as the <strong className="text-white font-medium">Vice President</strong>, my journey within the Government College University Computer Science Society has been defined by measurable growth, digital transformation, and executive coordination. 
                </p>
                <p>
                  Over the 2024–2025 term, I scaled our community footprint, directed multimedia content pipelines, and executed multi-tier campus events seamlessly.
                </p>
              </div>

              {/* ROLL OF HONOUR CALLOUT */}
              <div className="mt-8 p-6 rounded-xl border border-amber-500/20 bg-amber-500/[0.02] backdrop-blur-md flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 flex-shrink-0">
                  <FaAward size={24} />
                </div>
                <div>
                  <h4 className="text-amber-400 font-bold text-lg mb-1 tracking-tight">Prestigious Nomination</h4>
                  <p className="text-sm text-neutral-300 font-light leading-relaxed">
                    In recognition of continuous contributions, leadership, and operational excellence, I was formally nominated for the <strong className="text-amber-200 font-medium">Roll of Honour</strong> by the Computer Science Society for the academic year 2024–2025.
                  </p>
                </div>
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* KEY LEADERSHIP PILLARS */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F97316] font-mono text-sm">[02]</span> Key Pillars & Measurable Impact
              </h2>
              
              <div className="space-y-6">
                
                {/* Pillar 1 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316]/10 transition-colors">
                      <FaChartLine size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Social Media Growth</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Exponential Reach:</strong> Stepped up to assume full operational management of digital platforms, driving an aggressive organic growth strategy that increased social media reach by 400% within a single month during the Annual Dinner campaign.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Community Building:</strong> Successfully expanded the society&apos;s online network by capturing 100+ new targeted followers and onboarded 20–30 new student members via direct peer networking.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 2 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/10 transition-colors">
                      <FaFilm size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Media & Creative Direction</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Content Pipeline:</strong> Personally shot, directed, and edited 10 to 11 high-impact reels out of the total 15 official posts released during the term.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Time Investment:</strong> Dedicated 90–100 hours of specialized multimedia editing and production work to solidify a polished, modern visual aesthetic.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 3 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-600 group-hover:bg-orange-600/10 transition-colors">
                      <FaUsers size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Large-Scale Events</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">End-to-End Execution:</strong> Coordinated, structured, and managed the field operations for premier institutional events, including the Pure Logic Tour, WhatsApp Group Tour, Jamming Session, and Booth Activities.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Logistics Management:</strong> Oversaw onsite crowd logistics, speaker schedules, and live participant performances to ensure friction-free executions.</span>
                    </li>
                  </ul>
                </div>

                {/* Pillar 4 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#FF5A00] group-hover:bg-[#FF5A00]/10 transition-colors">
                      <FaComments size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Communication Architecture</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Frictionless Flow:</strong> Structured and managed dedicated, event-specific communication pipelines to maximize transparency for all society members.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Engagement Optimization:</strong> Transformed legacy, passive channels (averaging only 5–6 notices per event) into thriving hubs hosting over 100+ active daily coordination threads.</span>
                    </li>
                  </ul>
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F97316]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#F97316]/10 transition-colors duration-500" />
              
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Professional Hub</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">Milestone Record</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-bold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(249,115,22,0.25)] hover:shadow-[0_0_35px_rgba(249,115,22,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 font-mono"
                >
                  View on LinkedIn
                  <FaLinkedin size={16} />
                </a>
              </div>

              <hr className="border-white/5" />

              {/* METADATA QUICK STATS */}
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Society</span>
                  <span className="text-neutral-300 text-right">GCU CSS</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">Vice President</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Term</span>
                  <span className="text-neutral-300 text-right">2024 - 2025</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Honour</span>
                  <span className="text-amber-400 font-bold text-right">Nominated</span>
                </div>
              </div>
            </motion.div>

            {/* EXECUTIVE SKILLSET BADGES */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0f]/40 backdrop-blur-md space-y-6"
            >
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Executive Skillset</h4>
              
              <div className="flex flex-wrap gap-2.5">
                {skillset.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/5 bg-white/[0.02] text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-default ${skill.color} hover:bg-white/[0.04]`}
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
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
