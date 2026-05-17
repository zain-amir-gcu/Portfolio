"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { 
  FaArrowLeft, FaExternalLinkAlt, FaLinkedin, 
  FaBook, FaMicrophone, FaUsers, 
  FaHistory, FaFilm 
} from "react-icons/fa";

// Fade in up animation preset
const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function LahoreChronicles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const competencies = [
    { name: "History", icon: <FaHistory />, color: "text-[#F59E0B] hover:border-[#F59E0B]/40" },
    { name: "Cinematography", icon: <FaFilm />, color: "text-[#EC4899] hover:border-[#EC4899]/40" },
    { name: "Content Curation", icon: <FaBook />, color: "text-[#3B82F6] hover:border-[#3B82F6]/40" },
    { name: "Voiceover", icon: <FaMicrophone />, color: "text-[#10B981] hover:border-[#10B981]/40" },
    { name: "Team Leadership", icon: <FaUsers />, color: "text-[#8B5CF6] hover:border-[#8B5CF6]/40" }
  ];

  const team = [
    { name: "Zain Amir", role: "Project Head, Writer, Voiceover & Documentation", icon: "📜🎙📖", color: "border-amber-500/30" },
    { name: "Ali Abdullah", role: "DOP, Video Editing, Cinematography", icon: "🎬", color: "border-neutral-800" },
    { name: "Abdul Jalil", role: "On-Screen Appearance", icon: "👨‍🎤", color: "border-neutral-800" },
    { name: "Anas Rehman", role: "Concept Development", icon: "📖", color: "border-neutral-800" },
    { name: "Shahid Mehmood & Zain Amjad", role: "Content & Coordination", icon: "📊", color: "border-neutral-800" },
    { name: "Abdul Wahab, Ahmed Ali Arshad & Syed Dilawar Ali Shah", role: "Logistics & Operations", icon: "⚙️", color: "border-neutral-800" }
  ];

  const contributions = [
    {
      title: "Project Head & Executive Director",
      desc: "Took complete ownership of organizational development, creative direction, team coordination, and milestone deliveries from inception."
    },
    {
      title: "Scriptwriter & Narrative Creator",
      desc: "Researched and authored the documentary's 1000-year timeline, scripting every era from the Ghaznavids and Mughals to independence."
    },
    {
      title: "Voiceover & Audio Documentation",
      desc: "Recorded the primary voiceover narration, directing pacing, tone, and sound alignment to ensure deep intellectual and historical impact."
    }
  ];

  return (
    <main className="relative bg-[#08080a] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#F59E0B] selection:text-black pb-32">
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
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] bg-amber-500/10 rounded-full filter blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] max-w-[700px] bg-yellow-600/5 rounded-full filter blur-[150px]"
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
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(245, 158, 11, 0.03), transparent 80%)`,
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
            className="flex items-center gap-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-400 hover:text-[#F59E0B] transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
            Back to Archive
          </Link>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-mono text-neutral-500 hidden sm:inline-block">
            Lahore Chronicles
          </span>
          <div className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse shadow-[0_0_10px_#F59E0B]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-mono text-[#F59E0B]">Featured Documentary</span>
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shadow-[0_0_20px_rgba(245,158,11,0.02)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#F59E0B] font-mono font-medium">History & Production</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
            Lahore Chronicles<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-[#F59E0B]">
              The Soul of the City.
            </span>
          </h1>
        </motion.div>

        {/* 2. DYNAMIC HERO ASSET SHOWCASE */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.01] p-2 md:p-4 backdrop-blur-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:border-[#F59E0B]/30 transition-all duration-700 mb-20"
        >
          {/* Border-beam loading indicator animation */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent animate-[beam_3s_infinite_linear]" />
          
          <div className="relative rounded-[1.7rem] overflow-hidden bg-[#0d0d11]">
            <motion.img 
              src="/chronicles.png" 
              alt="Lahore Chronicles Documentary Presentation Showcase"
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
            
            {/* INTRO QUOTE */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="p-6 md:p-8 rounded-2xl border border-amber-500/20 bg-amber-500/[0.02] backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/5 rounded-full blur-xl pointer-events-none" />
              <p className="text-xl md:text-2xl font-serif italic text-amber-200 tracking-wide leading-relaxed text-center">
                &ldquo;History is not a burden on the memory but an illumination of the soul.&rdquo;
              </p>
              <p className="text-right text-xs md:text-sm font-mono text-amber-500/80 uppercase tracking-widest mt-4">
                &mdash; Lord Acton ✨📜
              </p>
            </motion.div>

            {/* PROJECT OVERVIEW */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F59E0B] font-mono text-sm">[01]</span> Project Overview
              </h2>
              <div className="space-y-6 text-neutral-400 font-light leading-relaxed text-base md:text-lg">
                <p>
                  I&apos;m beyond excited to share <strong className="text-white font-medium">Lahore Chronicles: The Role of Lahore in the Creation of Pakistan</strong>—a documentary that my team and I passionately worked on during our Ideology of Pakistan course. This project was more than just an academic assignment; it was a journey into the soul of our city, Lahore—the heartbeat of the Pakistan Movement. 🏛️✨
                </p>
                <p>
                  Lahore has always been the jewel in the crown of empires—from the Ghaznavids to the Mughals and beyond. 🏰✨ In this documentary, we aimed to cover a thousand years of its history, highlighting its role in every era and ensuring students understand its deep historical and ideological significance. 📜
                </p>
                <p>
                  As the <strong className="text-white font-medium">Project Head</strong>, I had the incredible opportunity to lead this initiative—overseeing research, writing, voiceovers, and documentation. 📜🎙️📖 But this wouldn&apos;t have been possible without the dedication and hard work of every team member! A special shoutout to Ali Abdullah for bringing our vision to life with exceptional video editing, cinematography &amp; DOP. 🔥
                </p>
              </div>
            </motion.section>

            <hr className="border-white/5" />

            {/* TEAM ATTRIBUTIONS */}
            <motion.section 
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter text-white flex items-center gap-3">
                <span className="text-[#F59E0B] font-mono text-sm">[02]</span> Teammates &amp; Production Crew
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {team.map((feat, i) => (
                  <div 
                    key={i} 
                    className={`p-6 rounded-xl border bg-white/[0.01] backdrop-blur-md hover:border-amber-500/20 hover:bg-white/[0.02] transition-all duration-500 group flex items-start gap-4 ${feat.color}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-amber-500/10 group-hover:border-amber-500/20 transition-all duration-500">
                      {feat.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                        {feat.name}
                      </h3>
                      <p className="text-xs text-neutral-400 font-light leading-relaxed">
                        {feat.role}
                      </p>
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
                  <span className="text-[#F59E0B] font-mono text-sm">[03]</span> Strategic Contribution
                </h2>
                <p className="text-neutral-400 font-light leading-relaxed text-sm md:text-base">
                  Directing the documentary creative timeline and aligning narrative scripting with cinematography pipelines, I took complete ownership of:
                </p>
              </div>

              <div className="space-y-6">
                {contributions.map((contr, i) => (
                  <div 
                    key={i} 
                    className="p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0a0f] hover:border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500 group flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-xs font-mono text-neutral-500 bg-neutral-900 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-all flex-shrink-0">
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
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-amber-500/10 transition-colors duration-500" />
              
              <div className="space-y-2">
                <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-neutral-500">Launchpad</span>
                <h3 className="text-2xl font-bold tracking-tighter text-white">Project Actions</h3>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/posts/zainamirr_lahorechronicles-pakistanhistory-lahore-activity-7300712115512741888-NDIg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold text-sm uppercase tracking-widest text-center shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_35px_rgba(245,158,11,0.45)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono"
                >
                  Watch Documentary
                  <FaExternalLinkAlt size={12} />
                </a>

                <a 
                  href="https://www.linkedin.com/posts/zainamirr_lahorechronicles-pakistanhistory-lahore-activity-7300712115512741888-NDIg?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFK30RgB8PilQLuk6JCej-IJp_2JlTPEk3M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-xl border border-white/10 hover:border-amber-500/50 hover:bg-amber-600/10 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] text-neutral-200 hover:text-white font-semibold text-sm uppercase tracking-widest text-center hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-mono bg-white/[0.01] backdrop-blur-md"
                >
                  LinkedIn Article
                  <FaLinkedin size={14} className="text-[#0077b5]" />
                </a>
              </div>

              <hr className="border-white/5" />

              {/* METADATA QUICK STATS */}
              <div className="space-y-4 font-mono">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Format</span>
                  <span className="text-neutral-300 text-right">Documentary Film</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Role</span>
                  <span className="text-neutral-300 text-right">Project Head & Writer</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Course</span>
                  <span className="text-neutral-300 text-right">Ideology of Pakistan</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-500 uppercase tracking-widest">Timeline</span>
                  <span className="text-neutral-300 text-right">1000 Years Coverage</span>
                </div>
              </div>
            </motion.div>

            {/* CORE COMPETENCIES */}
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
