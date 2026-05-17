"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import Skills from "./Skills";
import Contact from "./Contact";
import ContactTransition from "./ContactTransition";
import { FaReact, FaNodeJs, FaAngular, FaExternalLinkAlt } from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";

const textReveal = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const projects = [
  {
    title: "Societies Portal",
    description: "MERN + MySQL role-based management system.",
    tags: [<FaReact key="react" />, <FaNodeJs key="node" />, <SiMysql key="mysql" />],
    role: "Lead Developer",
    stats: "15+ Roles",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "LMS Analytics",
    description: "Institutional fee & workflow automation system.",
    tags: [<FaAngular key="angular" />, <FaNodeJs key="node" />, <SiMysql key="mysql" />],
    role: "Intern",
    stats: "MEAN Stack",
    color: "from-red-500 to-pink-500"
  },
  {
    title: "Roots Revival",
    description: "Sustainability & community plantation initiative.",
    tags: ["Leadership", "Community"],
    role: "Founder",
    stats: "300+ Trees",
    color: "from-emerald-400 to-teal-500"
  },
  {
    title: "GCU SFC Website",
    description: "Modernized university student council digital presence.",
    tags: [<FaReact key="react" />, <SiTypescript key="ts" />],
    role: "UX Designer",
    stats: "UI/UX",
    color: "from-purple-500 to-indigo-500"
  }
];

const experiences = [
  {
    company: "IT Directorate, GCU",
    role: "Web Dev Intern",
    period: "2025 - Present",
    details: ["MERN + MySQL Portal", "LMS Automation", "UI/UX Redesign"]
  },
  {
    company: "Devsinc",
    role: "Ambassador",
    period: "2025 - Present",
    details: ["Industry-Academia bridge", "Event Organizer", "Campus Outreach"]
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

export default function Projects() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative z-10 bg-transparent text-white selection:bg-[#00f2ff] selection:text-black">
      {/* About Section */}
      <div id="about" className="py-32 md:py-64 px-6 md:px-24">
        <div className="max-w-5xl">
          <motion.div {...textReveal} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
             <span className="text-[10px] uppercase tracking-[0.6em] text-[#00f2ff] font-mono font-medium">
               01. Origin
             </span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-12 md:mb-20"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-700 md:block">Architect.</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
            <motion.p {...textReveal} transition={{ ...textReveal.transition, delay: 0.2 }} className="text-2xl md:text-3xl font-light text-neutral-300 leading-relaxed">
              Building at the intersection of technical precision and visual storytelling.
            </motion.p>
            <div className="flex flex-col gap-6">
              <motion.p {...textReveal} transition={{ ...textReveal.transition, delay: 0.3 }} className="text-sm md:text-lg text-neutral-500 font-mono leading-relaxed p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm">
                BSCS @ GCU Lahore. <br/><br/>
                Focusing on building highly scalable role-based systems and delivering atmospheric, cinematic user interfaces.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Shared Wrapper for Journey and Archive with Atmospheric Background */}
      <div className="relative bg-[#08080a] border-y border-white/5">
        <BackgroundElements />
        
        {/* Experience - Cinematic Timeline */}
        <div id="experience" className="relative z-10 py-32 md:py-48 px-6 md:px-24">
          <motion.div {...textReveal} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-16 shadow-[0_0_20px_rgba(0,242,255,0.05)]">
             <span className="text-[10px] uppercase tracking-[0.6em] text-[#00f2ff] font-mono font-medium">
               02. Journey
             </span>
          </motion.div>
          
          <div className="max-w-4xl relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00f2ff]/50 via-[#00f2ff]/10 to-transparent shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
            
            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.company}-${i}`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-12 md:pl-32 group"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-[27px] top-2 w-3 h-3 rounded-full bg-[#00f2ff] shadow-[0_0_20px_rgba(0,242,255,1)] group-hover:scale-150 transition-transform duration-500 z-10" />
                  <div className="absolute left-[-13px] md:left-[19px] top-0 w-7 h-7 rounded-full border border-[#00f2ff]/30 bg-[#00f2ff]/10 animate-ping opacity-75 z-0" style={{ animationDuration: '3s' }} />

                  <SpotlightCard className="!p-6 md:!p-8 border-white/10 group-hover:border-[#00f2ff]/30 max-w-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-white mb-2">{exp.role}</h3>
                        <p className="text-[#00f2ff] font-mono text-xs tracking-widest uppercase">{exp.company}</p>
                      </div>
                      <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs uppercase tracking-widest text-neutral-400 font-mono backdrop-blur-md">
                        {exp.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.details.map((d, j) => (
                        <li key={j} className="text-neutral-400 flex items-start gap-3 text-sm md:text-base font-light group-hover:text-neutral-200 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]/50 flex-shrink-0 mt-1.5" /> 
                          {d}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

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
                duration: projects.length * 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {[...projects, ...projects, ...projects].map((p, i) => (
                <SpotlightCard 
                  key={`${p.title}-${i}`} 
                  className="w-[260px] md:w-[320px] h-[280px] md:h-[320px] transition-all duration-700 group overflow-hidden flex flex-col hover:-translate-y-4"
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
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div id="skills">
        <Skills />
      </div>

      <ContactTransition />

      <Contact />

      <footer className="relative py-32 md:py-48 px-6 md:px-24 bg-[#040406] border-t border-white/5 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center justify-center max-w-7xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-20"
          >
             <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#00f2ff]/30 transition-all cursor-default group shadow-[0_0_30px_rgba(0,242,255,0.05)] hover:shadow-[0_0_30px_rgba(0,242,255,0.15)]">
               <div className="relative flex items-center justify-center w-3 h-3">
                 <div className="w-full h-full rounded-full bg-[#00f2ff] animate-ping absolute opacity-75" />
                 <div className="w-2 h-2 rounded-full bg-[#00f2ff] relative" />
               </div>
               <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-neutral-400 font-mono group-hover:text-[#00f2ff] transition-colors">
                 Systems Online
               </span>
             </div>
          </motion.div>

          {/* Massive Animated ZAIN */}
          <motion.div
            className="relative w-full cursor-default group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h2 className="text-[28vw] md:text-[18vw] font-bold tracking-tighter select-none leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent group-hover:from-[#00f2ff]/30 group-hover:to-transparent transition-all duration-700 relative z-10">
              ZAIN.
            </h2>
            <h2 
              className="text-[28vw] md:text-[18vw] font-bold tracking-tighter select-none leading-[0.8] text-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 scale-[1.02] group-hover:scale-100" 
              style={{ WebkitTextStroke: '1px rgba(0, 242, 255, 0.4)' }}
            >
              ZAIN.
            </h2>
            
            {/* Floating ambient lights behind text */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <motion.div 
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#00f2ff]/10 rounded-full mix-blend-screen filter blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-full flex flex-col md:flex-row justify-between items-center gap-12 mt-24 md:mt-32 pt-12 border-t border-white/5 relative z-30"
          >
            <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-[0.4em] font-mono text-center md:text-left">
              Engineering <br className="md:hidden" /> Digital Atmospheres
            </p>
            
            {/* Animated Orbiting Indicator */}
            <div className="relative flex items-center justify-center w-20 h-20 group cursor-pointer">
              <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-white/20 rounded-full group-hover:border-[#00f2ff]/50 transition-colors duration-500"
              />
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-3 border border-white/10 rounded-full group-hover:border-[#00f2ff]/30 transition-colors duration-500"
              />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00f2ff] shadow-[0_0_15px_#00f2ff] group-hover:shadow-[0_0_30px_#00f2ff] transition-shadow duration-500" />
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
               <p className="text-neutral-600 text-[8px] md:text-[10px] uppercase tracking-[0.6em] font-mono group-hover:text-[#00f2ff] transition-colors">
                 © 2026 ARCHITECTED BY ZAIN AMIR
               </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
