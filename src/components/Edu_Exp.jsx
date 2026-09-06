


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  ChevronDown, 
  Terminal, 
  Activity, 
  Cpu, 
  Zap,
  ShoppingCart,
  Building2,
  Code2,
  Laptop,
 
  Wrench,
} from "lucide-react";

const experience = [
  {
    title: "Freelance Full-Stack Developer",
    company: "Art Evo",
    duration: "FEB 2026 — JUN 2026",
    type: "Freelance",
    description:
      "Designed and delivered a production e-commerce platform as the sole developer, covering customer workflows, seller operations, payments, and deployment.",
    points: [
      "Built customer workflows for product discovery, cart, wishlist, checkout, and order tracking.",
      "Implemented Clerk authentication with user-linked profiles, mobile numbers, and address management.",
      "Developed a seller dashboard for product CRUD, order management, and synchronized status updates.",
      "Integrated Razorpay payments with webhook-based synchronization of payment and order states.",
      "Replaced WhatsApp-based updates with live tracking, increasing direct website orders by ~70%.",
      "Implemented CI/CD with GitHub Actions for automated Vercel deployments."
    ],
    icon: <ShoppingCart />,
    color: "bg-indigo-600",
    accent: "text-indigo-400"
  },
  
  {
    title: "Full-Stack Developer",
    company: "Image Express, Ireland",
    duration: "JUL 2023 — OCT 2024",
    type: "Full-Time",
    description:
      "Developed and maintained an e-commerce platform for digital photo printing and custom gifts as part of a four-person engineering team.",
    points: [
      "Built and integrated 10+ FastAPI endpoints backed by MongoDB.",
      "Developed product, cart, order, and customer workflows using React and Next.js.",
      "Delivered reusable UI components, API integrations, and input validation.",
      "Supported end-to-end workflows covering product discovery, checkout, and order tracking.",
      "Reduced redundant network requests by ~26% through shared fetching, deduplication, and client-side caching."
    ],
    icon: <Code2 />,
    color: "bg-blue-600",
    accent: "text-blue-400"
  },
  {
    title: "Software Development Intern",
    company: "Lince Soft Pvt. Ltd.",
    duration: "SEP 2019 — DEC 2020",
    type: "Internship",
    description:
      "Contributed to frontend and backend development while building foundational software engineering experience.",
    points: [
      "Assisted senior developers with feature implementation and application maintenance.",
      "Contributed to frontend and backend development tasks.",
      "Resolved bugs and delivered small-scale application features.",
      "Participated in code reviews and established development workflows.",
      "Built a software engineering foundation while transitioning from mechanical engineering."
    ],
    icon: <Laptop />,
    color: "bg-emerald-600",
    accent: "text-emerald-400"
  }
];

const education = [
  {
    title:
      "MSc Computing and Technology with Advanced Practice",
    institution: "Northumbria University, London",
    duration: "2021 — 2023",
    type: "Postgraduate",
    description:
      "Advanced postgraduate study in computing and information science, strengthening software development, system design, and applied technology skills.",
    points: [
      "Developed advanced knowledge of computing and software engineering principles.",
      "Studied the design and development of modern technology systems.",
      "Strengthened practical programming, research, and problem-solving skills.",
      "Built the technical foundation for full-stack development and ML/AI engineering."
    ],
    icon: <GraduationCap />,
    color: "bg-purple-600",
    accent: "text-purple-400"
  },
  {
    title: "B.Tech Mechanical Engineering",
    institution: "CVR College of Engineering, India",
    duration: "2015 — 2019",
    type: "Undergraduate",
    description:
      "Built a strong engineering foundation in analytical reasoning, quantitative problem-solving, and structured system design.",
    points: [
      "Developed a foundation in mathematics, engineering analysis, and problem-solving.",
      "Applied structured design and analytical methods to engineering problems.",
      "Began transitioning into programming and software development during the degree."
    ],
    icon: <Wrench />,
    color: "bg-orange-600",
    accent: "text-orange-400"
  }
];

export default function Edu_Exp() {
  return (
    <section id="experience" className="relative w-full bg-[#020205] text-gray-100 py-24 lg:py-40 overflow-hidden">
      {/* Synchronized AI Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-125 contrast-150" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-xl">
            <Activity className="w-4 h-4 animate-pulse" /> Operational Timeline
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase italic">
            Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Evolution</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/50 via-indigo-500/20 to-transparent hidden md:block" />

          <div className="space-y-24">
            {[...experience, ...education].map((item, index) => (
              <TimelineCard 
                key={index} 
                item={item} 
                isEven={index % 2 === 0} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item, isEven }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex items-center justify-between md:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      <div className={`hidden md:block w-full ${isEven ? 'text-right' : 'text-left'}`}>
        <span className={`text-xl font-mono font-black tracking-tighter uppercase ${item.accent} opacity-80`}>
          {item.duration}
        </span>
      </div>

      <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 top-12 w-2.5 h-2.5 rounded-full bg-white z-20 shadow-[0_0_15px_rgba(168,85,247,0.8)] hidden md:block border-2 border-[#020205]" />

      <div className="w-full relative">
        <motion.div
          layout
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group cursor-pointer rounded-[2.5rem] 
            border border-white/10 
            bg-white/[0.03] hover:bg-white/[0.06]
            backdrop-blur-md hover:backdrop-blur-xl
            p-8 md:p-12 transition-all duration-500 
            hover:border-purple-500/40 shadow-xl
            ${isOpen ? 'bg-white/[0.1] border-purple-500/50' : ''}
          `}
        >
          <div className="flex items-center justify-between mb-10">
            <div className={`p-4 rounded-2xl ${item.color} shadow-lg border border-white/20 relative`}>
                <div className="absolute inset-0 bg-white/20 blur-lg rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity" />
                {React.cloneElement(item.icon, { size: 24, className: "text-white relative z-10" })}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono font-black text-purple-300 tracking-[0.2em] uppercase bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20">
                {item.type}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-gray-400 group-hover:text-white transition-colors">
                <ChevronDown size={20} />
              </motion.div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none uppercase italic">{item.title}</h3>
            <p className={`${item.accent} font-bold text-sm tracking-[0.2em] uppercase flex items-center gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {item.company || item.institution}
            </p>
          </div>

          <p className="mt-8 text-gray-200 text-base md:text-lg leading-relaxed font-medium opacity-70 group-hover:opacity-100 transition-opacity">
            {item.description}
          </p>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-10 mt-10 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-8">
                    <Terminal size={16} className="text-purple-400" />
                    <span className="text-[11px] font-mono font-black uppercase tracking-[0.3em] text-purple-400">System.Runtime_Report()</span>
                  </div>
                  <ul className="space-y-6">
                    {item.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-5 text-sm md:text-base text-gray-200 font-medium group/line"
                      >
                        <Zap size={14} className={`mt-1 shrink-0 ${item.accent} opacity-50 group-hover/line:opacity-100 transition-opacity`} />
                        <span className="leading-relaxed group-hover/line:text-white transition-colors">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}