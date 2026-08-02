"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#020205] border-t border-white/10 py-20 overflow-hidden">
      {/* Background Neural Glow - Increased Opacity for Visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full opacity-70" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-150 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center gap-10">
          
        

          {/* Social Links - Glassmorphism intensified */}
          <div className="flex gap-5">
            <SocialLink href="https://github.com/RohithSriSharan" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com/in/rohith-sri-sharan-jangam" icon={<Linkedin size={20} />} />
            <SocialLink href="mailto:contact@rohithj.dev" icon={<Mail size={20} />} />
          </div>

          {/* Copyright & Credit - High Contrast */}
          <div className="text-center space-y-4">
  <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
  
  <p className="text-sm md:text-base font-mono tracking-[0.3em] text-white/60 uppercase italic font-medium">
    Designed and Built by
    <span className="relative inline-block ml-3">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-black transition-all duration-500 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        Rohith Sri Sharan
      </span>
    </span>
  </p>

 
</div>
        </div>
      </div>
    </footer>
  );
};

/* Internal Helper for Social Icons */
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -4, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="p-4 rounded-2xl border border-white/10 bg-white/5 text-white/40 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-2xl shadow-xl"
  >
    {icon}
  </motion.a>
);

export default Footer;