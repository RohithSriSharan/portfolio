"use client";

import Link from "next/link";
import { useState } from "react";
import { Cpu } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // Close the mobile menu first
    setOpen(false);

    // If it's home, go to top
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Small delay to allow the mobile menu to start closing 
    // This prevents the 'jump' or 'fail' on mobile browsers
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const el = document.getElementById(targetId);
      
      if (el) {
        // Offset to account for fixed header height
        const offset = 80; 
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100); 
  };

  return (
    <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020205]/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 lg:py-6">
        <div className="flex items-center gap-2.5 group cursor-pointer">
          <span className="text-purple-400 transition-transform group-hover:rotate-90 duration-500">
            <Cpu size={22} />
          </span>
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="font-black text-xl text-white tracking-tighter uppercase italic"
          >
            Rohith.<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">J</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-2xl">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleScroll(e, href)}
              className="relative px-5 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-all group italic"
            >
              {label}
              <span className="absolute left-1/2 -bottom-0.5 h-[1.5px] bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-300 w-0 -translate-x-1/2 group-hover:w-1/2"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="px-6 py-2.5 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all italic"
          >
            Hire me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-purple-400 p-2">
          {open ? <span className="text-cyan-400 text-2xl">✕</span> : (
            <div className="space-y-1.5 flex flex-col items-end">
              <span className="block w-6 h-0.5 bg-purple-400"></span>
              <span className="block w-4 h-0.5 bg-cyan-400"></span>
            </div>
          )}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col px-6 pb-10 bg-[#020205]/95 backdrop-blur-3xl border-t border-white/5 overflow-hidden"
          >
            {links.map(({ label, href }, index) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-black italic tracking-tighter text-gray-400 hover:text-cyan-400 py-6 border-b border-white/5 flex justify-between items-center group uppercase"
              >
                <span>
                    <span className="text-[10px] font-mono text-purple-500 mr-6 italic tracking-widest">0{index + 1}</span>
                    {label}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 text-cyan-400 font-mono text-[10px] tracking-widest">
                  {`// EXEC_SCROLL`}
                </span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}