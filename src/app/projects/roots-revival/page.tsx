"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaExternalLinkAlt, FaLinkedin, 
  FaTree, FaBookOpen, FaGlobe, FaVideo, 
  FaAward, FaNetworkWired, FaUsers 
} from "react-icons/fa";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function RootsRevival() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const competencies = [
    { name: "Web Platform", icon: <FaGlobe />, color: "text-[#61DAFB] hover:border-[#61DAFB]/40" },
    { name: "Media Production", icon: <FaVideo />, color: "text-[#FF0050] hover:border-[#FF0050]/40" },
    { name: "Policy Drafting", icon: <FaBookOpen />, color: "text-[#34D399] hover:border-[#34D399]/40" },
    { name: "Youth Mobilization", icon: <FaUsers />, color: "text-[#FBBF24] hover:border-[#FBBF24]/40" },
    { name: "Reforestation", icon: <FaTree />, color: "text-[#10B981] hover:border-[#10B981]/40" }
  ];

  const features = [
    {
      title: "Policy Framework Development",
      desc: "Conceptualized and submitted a multi-tiered environmental framework to the DG EPA Punjab, focusing on curriculum enrichment (Punjab Textbook Board), youth mobilization, and student incentives.",
      icon: <FaBookOpen className="text-[#34D399]" />
    },
    {
      title: "Urban Reforestation Executions",
      desc: "Successfully planted 200+ trees across critical urban locations in Lahore, transforming spaces at Allama Iqbal Town Park and Lohari Bagh.",
      icon: <FaTree className="text-[#34D399]" />
    },
    {
      title: "Academic Awareness Campaigns",
      desc: "Educated and inspired over 300+ students by designing and executing engaging awareness campaigns across multiple universities.",
      icon: <FaAward className="text-[#34D399]" />
    },
    {
      title: "Sustainable Leadership & Scaling",
      desc: "Built a cross-provincial network of campus ambassadors (including UET, COMSATS, and IM Sciences Peshawar) and established a structured leadership pipeline ensuring the project continues to flourish.",
      icon: <FaNetworkWired className="text-[#34D399]" />
    }
  ];

  const contributions = [
    {
      title: "Founder & Executive Director",
      desc: "Took complete ownership of organizational development, strategy, team curation, and operational workflows from inception."
    },
    {
      title: "Public & Government Relations",
      desc: "Acted as the primary representative to pitch environmental policy recommendations directly to high-level institutional stakeholders, including the Director General of the EPA Punjab."
    },
    {
      title: "Cross-Functional Team Leadership",
      desc: "Managed a multi-disciplinary team encompassing web development, media editing, campus coordination, and public relations to scale grassroots engagement across multiple regions."
    }
  ];

  return (
    <main className="relative bg-[#08080a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#34D399] selection:text-black pb-32">
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
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-emerald-600/10 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] bg-teal-600/10 rounded-full filter blur-[150px]"
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
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(16, 185, 129, 0.03), transparent 80%)`,
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
            className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#34D399] transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Archive
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline-block">
            Roots Revival Lahore
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_10px_#10B981]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#34D399]">Active Initiative</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_20px_rgba(52,211,153,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#34D399] font-mono font-medium">Environmental Initiative</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            Roots Revival<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#34D399]">
              Lahore.
            </span>
          </h1>
        </motion.div>

        {/* 2. DYNAMIC HERO ASSET SHOWCASE */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.01] p-2 md:p-4 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#34D399]/30 transition-all duration-700 mb-20"
        >
          {/* Border-beam loading indicator animation */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#34D399] to-transparent animate-[beam_3s_infinite_linear]" />
          
          <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d0d11]">
            <motion.img 
              src="/epa.png" 
              alt="Roots Revival Lahore Policy Presentation Showcase"
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
                <span className="text-[#34D399] font-mono text-sm">[01]</span> Project Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  Lahore consistently ranks among the most polluted cities in the world. The thick blanket of smog, increasing deforestation, and unchecked urbanization pose severe risks to public health and future generations. Realizing that structural change won&apos;t come unless we create it ourselves, I founded <strong className="text-white font-medium">Roots Revival Lahore</strong>—a student-led environmental initiative aimed at making the city greener, cleaner, and more sustainable.
                </p>
                <p>
                  What started as a localized student movement quickly expanded into an impactful framework for environmental advocacy. As part of this mission, I authored and formally presented a comprehensive policy proposal to the Director General of the Environment Protection Department and Climate Change Punjab (DG EPA), outlining a student-driven framework to integrate environmental education and mandatory tree plantation drives into the province&apos;s educational ecosystem.
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
                <span className="text-[#34D399] font-mono text-sm">[02]</span> Key Features & Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feat, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-md hover:border-[#34D399]/20 hover:bg-white/[0.02] transition-all duration-500 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#34D399] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#34D399]/10 group-hover:border-[#34D399]/20 transition-all duration-500">
                      {feat.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#34D399] transition-colors">
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
                  <span className="text-[#34D399] font-mono text-sm">[03]</span> Strategic Contribution
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                  Directing a student organization and bridging grassroots work with governmental environmental bodies, I executed the following leadership lifecycles:
                </p>
              </div>

              <div className="space-y-6">
                {contributions.map((contr, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500 group flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500 bg-neutral-900 group-hover:text-[#34D399] group-hover:border-[#34D399]/30 transition-all flex-shrink-0">
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#34D399]/5 rounded-full blur-xl pointer-events-none group-hover:bg-[#34D399]/10 transition-colors duration-500" />
              
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Launchpad</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">Project Actions</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/posts/zainamirr_rootsrevivallahore-climateaction-sustainablelahore-activity-7303392665998372865-HdEk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-semibold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Launch Live Portal
                  <FaExternalLinkAlt size={12} />
                </a>

                <a 
                  href="https://www.linkedin.com/posts/zainamirr_proposed-framework-to-dg-epa-punjab-activity-7303813194832068609-3ggz?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-600/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-widest text-center hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono bg-white/[0.01] backdrop-blur-md"
                >
                  LinkedIn Post
                  <FaLinkedin size={14} className="text-[#0077b5]" />
                </a>
              </div>

              <hr className="border-white/5" />

              {/* METADATA QUICK STATS */}
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Initiative</span>
                  <span className="text-neutral-300 text-right">Roots Revival Lahore</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">Founder & Director</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Period</span>
                  <span className="text-neutral-300 text-right">2024 - Present</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Stakeholder</span>
                  <span className="text-neutral-300 text-right">DG EPA Punjab</span>
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
              <h4 className="text-xs uppercase tracking-widest font-mono text-neutral-500">Core Focus Areas</h4>
              
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
