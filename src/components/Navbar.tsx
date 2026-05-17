"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] px-4 md:px-8 py-3 md:py-4 flex items-center gap-4 md:gap-10 bg-[#08080a]/40 backdrop-blur-2xl border border-white/5 rounded-full shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-white/10 w-[95%] md:w-auto overflow-x-auto no-scrollbar"
    >
      <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-neutral-500 hover:text-[#00f2ff] transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            {link.name}
          </a>
        ))}
      </div>

      <div className="hidden md:block w-px h-4 bg-white/10" />

      <div className="flex items-center gap-4 md:gap-6 ml-auto md:ml-0">
        <a
          href="https://github.com/zainamirr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-[#00f2ff] transition-all duration-300 hover:scale-110"
        >
          <FaGithub size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/zainamirr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-[#00f2ff] transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={16} />
        </a>
      </div>
    </motion.nav>
  );
}
