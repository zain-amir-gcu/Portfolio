"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaLinkedin, 
  FaUsers, FaUniversity, FaAward, 
  FaHandshake, FaBullhorn, FaBriefcase, 
  FaNetworkWired, FaCheckCircle
} from "react-icons/fa";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function CampusAmbassadorDevsinc() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const competencies = [
    { name: "Public Relations", icon: <FaHandshake />, color: "text-[#F97316] hover:border-[#F97316]/40" },
    { name: "Corporate Liaison", icon: <FaBriefcase />, color: "text-amber-500 hover:border-amber-500/40" },
    { name: "Event Logistics", icon: <FaNetworkWired />, color: "text-orange-600 hover:border-orange-600/40" },
    { name: "Strategic Communication", icon: <FaBullhorn />, color: "text-[#FF5A00] hover:border-[#FF5A00]/40" }
  ];

  const metrics = [
    { value: "1,500+", label: "Competitive Applicants", sub: "Nationwide Screening Pipeline" },
    { value: "80 Only", label: "Selected Ambassadors", sub: "Exclusive Cohort Selection" },
    { value: "No. 1", label: "Largest IT Firm", sub: "Representing Devsinc on Campus" }
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
            Devsinc Ambassador Program
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse shadow-[0_0_10px_#F97316]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#F97316]">Active Link</span>
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
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F97316] font-mono font-medium">Corporate Outreach</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            Campus Ambassador<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#F97316]">
              Devsinc @ GCU.
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
              src="/devsinc.png" 
              alt="Devsinc Corporate Ambassador Branding Showcase"
              className="max-h-[150px] w-auto object-contain opacity-95 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </motion.div>

        {/* HIGH-CONTRAST STATISTICAL PILLS */}
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
            
            {/* EXPERIENCE OVERVIEW */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F97316] font-mono text-sm">[01]</span> Experience Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Bridging the gap between corporate tech environments and academic ecosystems requires strategic communication, public relations, and a drive for student empowerment. Out of over 1,500 applicants nationwide, I was selected as one of only 80 ambassadors to represent Pakistan’s largest IT firm, <strong className="text-white font-medium">Devsinc</strong>, at Government College University (GCU), Lahore. 
                </p>
                <p>
                  In this role, I acted as the primary liaison between Team Devsinc and the student body, driving industry-academia collaboration, organizing specialized corporate events, and creating pathways for students to gain real-world industry insights.
                </p>
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* KEY MILESTONES & STRATEGIC CONTRIBUTIONS */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F97316] font-mono text-sm">[02]</span> Key Milestones & Contributions
              </h2>
              
              <div className="space-y-6">
                
                {/* Milestone 1 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316]/10 transition-colors">
                      <FaAward size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Elite Competitive Selection</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">High-Volume Funnel:</strong> Earned a spot in an exclusive cohort of 80 ambassadors selected globally from a pool of 1,500+ competitive applicants to represent Pakistan&apos;s premier software company.</span>
                    </li>
                  </ul>
                </div>

                {/* Milestone 2 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/10 transition-colors">
                      <FaUniversity size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Industry-Academia Bridge Building</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Direct Communication Channel:</strong> Established and maintained a streamlined pipeline between Devsinc human resources/leadership teams and GCU students to facilitate knowledge transfers, recruitment awareness, and tech collaboration.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Corporate Exposure Initiatives:</strong> Ideated, planned, and successfully executed an <strong className="text-white font-medium">Industrial Tour</strong> for GCU students to Devsinc headquarters, allowing peers to bridge abstract academic learning with live, real-world software development practices.</span>
                    </li>
                  </ul>
                </div>

                {/* Milestone 3 */}
                <div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 transition-all duration-500 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-orange-600 group-hover:bg-orange-600/10 transition-colors">
                      <FaBullhorn size={18} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Brand Advocacy & Event Management</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Targeted Marketing Campaigns:</strong> Directed on-campus marketing initiatives and strategic digital campaigns to maximize Devsinc&apos;s visibility within the university community.</span>
                    </li>
                    <li className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600/50 flex-shrink-0 mt-2" /> 
                      <span><strong className="text-neutral-200 font-medium">Student Event Curation:</strong> Organized and hosted multiple interactive student engagement sessions focused on professional growth, technology trends, and industry preparation.</span>
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
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Corporate Record</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">External Links</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/posts/zainamirr_campusambassador-devsinc-gcuhistory-activity-7402094209428209600-abcd?utm_source=social_share_send"
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
                  <span className="text-neutral-500 uppercase tracking-widest">Company</span>
                  <span className="text-neutral-300 text-right">Devsinc</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">Campus Ambassador</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">GCU Cohort</span>
                  <span className="text-neutral-300 text-right">80 Selected Globally</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Timeline</span>
                  <span className="text-neutral-300 text-right">2025 - 2026</span>
                </div>
              </div>
            </motion.div>

            {/* PROFESSIONAL COMPETENCIES BADGES */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="p-8 rounded-[2rem] border border-white/5 bg-[#0a0a0f]/40 backdrop-blur-md space-y-6"
            >
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Core Focus Areas</h4>
              
              <div className="flex flex-wrap gap-2.5">
                {competencies.map((skill, idx) => (
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
