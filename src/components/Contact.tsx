"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

const BackgroundOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#00f2ff] rounded-full mix-blend-screen filter blur-[150px] opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-20"
      />
    </div>
  );
};

const ContactCard = ({ item, index, className = "" }: { item: any; index: number; className?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col justify-between p-8 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#00f2ff]/30 hover:bg-white/[0.04] ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 242, 255, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex justify-between items-start">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-500 text-2xl text-white/50 group-hover:text-[#00f2ff] group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] group-hover:scale-110">
          {item.icon}
        </div>
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#00f2ff]/10 group-hover:border-[#00f2ff]/30 transition-all duration-500">
          <FaArrowRight className="text-white/30 transform -rotate-45 group-hover:rotate-0 group-hover:text-[#00f2ff] transition-all duration-500" />
        </div>
      </div>

      <div className="relative z-10 mt-16">
        <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-neutral-500 mb-2 group-hover:text-[#00f2ff] transition-colors duration-500">
          {item.name}
        </h4>
        <p className="text-xl md:text-2xl font-light text-neutral-300 group-hover:text-white transition-colors duration-500 truncate">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
};

export default function Contact() {
  const contactLinks = [
    { 
      name: "Email", 
      value: "zainamir.gcu@gmail.com", 
      href: "mailto:zainamir.gcu@gmail.com",
      icon: <FaEnvelope />
    },
    { 
      name: "LinkedIn", 
      value: "zainamirr", 
      href: "https://www.linkedin.com/in/zainamirr/",
      icon: <FaLinkedin />
    },
    { 
      name: "GitHub", 
      value: "zainamirr", 
      href: "https://github.com/zainamirr",
      icon: <FaGithub />
    }
  ];

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-[#08080a] relative overflow-hidden min-h-screen flex items-center">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 70%, transparent 100%)'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>
      
      <BackgroundOrbs />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 shadow-[0_0_20px_rgba(0,242,255,0.1)]">
                <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
                <span className="text-xs uppercase tracking-widest text-[#00f2ff] font-medium">
                  Available for Work
                </span>
              </div>
              
              <h2 className="text-[10px] uppercase tracking-[0.6em] text-neutral-500 font-mono mb-6">
                05. Contact
              </h2>
              
              <h3 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-white">
                Let's Build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] to-blue-600">
                  Together.
                </span>
              </h3>
              
              <p className="text-lg md:text-xl text-neutral-400 font-light max-w-md leading-relaxed mb-12">
                Whether you have a vision to realize, a project to collaborate on, or just want to discuss the future of tech and design—my inbox is always open.
              </p>

              {/* Decorative elements */}
              <div className="flex items-center gap-6 text-white/20">
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00f2ff]/50" />
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Content - Cards Grid */}
          <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6">
            <ContactCard 
              item={contactLinks[0]} 
              index={0} 
              className="w-full" 
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <ContactCard 
                item={contactLinks[1]} 
                index={1} 
              />
              <ContactCard 
                item={contactLinks[2]} 
                index={2} 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
