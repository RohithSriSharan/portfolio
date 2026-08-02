

"use client";

import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Github, FileText, ChevronsDown, MousePointer2, Activity } from "lucide-react";
import AbstractCanvas from "../canvas/Abstract";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [showHint, setShowHint] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => setShowArrow(entries[0].isIntersecting),
      { threshold: 0.3 }
    );
    if (heroRef.current) observer.observe(heroRef.current);

    // Hide the "Interact" hint after 6 seconds
    const timer = setTimeout(() => setShowHint(false), 6000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] w-full bg-[#020205] text-white flex overflow-hidden"
    >
      {/* 3D Canvas Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Themed Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.15),transparent_70%)] z-10 pointer-events-none" />
        
        {/* Grain Overlay for Bento Consistency */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-125 pointer-events-none z-10" />

        <div className="w-full h-full opacity-50 contrast-125 scale-110 md:scale-100 cursor-grab active:cursor-grabbing">
          <AbstractCanvas />
        </div>

        {/* Interaction Hint: Pulsing Finger/Mouse */}
        <AnimatePresence>
          {showHint && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none flex flex-col items-center gap-4"
            >
              <motion.div
                animate={{ 
                  x: [0, 40, -40, 0],
                  opacity: [0.4, 1, 1, 0.4] 
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="text-purple-400/80"
              >
                <MousePointer2 size={40} fill="currentColor" className="rotate-12" />
              </motion.div>
              <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase whitespace-nowrap">
                Interact with Latent Space
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     {/* Content Container */}
      <motion.div
        className="
          flex-1 px-6 md:px-12 lg:px-20
          flex flex-col 
          /* Reduced pb-32 to pb-20 for a slight push down on mobile */
          justify-end pb-20 sm:justify-center sm:pb-0
          items-center sm:items-start 
          z-30 relative 
          pointer-events-none 
          text-center sm:text-left
        "
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
       

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] uppercase italic whitespace-nowrap sm:whitespace-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Rohith{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            Jangam
          </span>
        </motion.h1>

        {/* Reduced mt-8 to mt-4 for tighter spacing */}
        <motion.p
          className="mt-4 text-base md:text-lg text-indigo-100/70 max-w-md leading-relaxed font-medium tracking-wide drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Engineering <span className="text-white underline underline-offset-4 decoration-purple-500/50 italic">intelligence</span> through 
          scalable MLOps and production-grade deep learning systems.
        </motion.p>

        {/* Reduced mt-12 to mt-8 to bring icons closer to text */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 items-center justify-center sm:justify-start pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="group relative px-8 py-3.5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 overflow-hidden"
          >
            <FileText size={18} /> Resume
          </a>

          <div className="flex gap-3">
            <SocialIcon href="https://github.com/RohithSriSharan" icon={<Github />} />
            <SocialIcon href="https://linkedin.com/in/rohith-sri-sharan-jangam" icon={<Linkedin />} />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {showArrow && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-40 pointer-events-auto flex flex-col items-center group"
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-purple-400/80">
              Scroll Down
            </span>
            <div className="p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <ChevronsDown size={24} className="text-white group-hover:text-purple-400 transition-colors" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

/* Type-Safe SocialIcon Component */
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

const SocialIcon = ({ href, icon }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 rounded-2xl border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all backdrop-blur-xl shadow-xl group"
  >
    {React.isValidElement(icon) 
      ? React.cloneElement(icon as React.ReactElement<{ size?: number }>, { size: 20 }) 
      : icon}
  </a>
);

export default Hero;