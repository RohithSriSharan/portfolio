
// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import {
//   Linkedin, Github, Terminal, Brain, Cpu, Code2, Server,
//   Database, Cloud, CalendarClock, FolderKanban, GitBranch,
//   Rocket, ArrowUpRight, Sparkles, Binary, Activity
// } from "lucide-react";

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
// };

// export default function About() {
//   return (
//     <section id="about" className="relative w-full bg-[#020205] text-gray-100 py-24 lg:py-40 overflow-hidden">
//       {/* AI Mesh Gradient Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full opacity-50" />
//         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-50" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-125 contrast-150" />
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
//       >
//         {/* Quote Section - NO CHANGES TO TEXT */}
//         <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-24">
//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[11px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-md">
//             <Activity className="w-4 h-4 animate-pulse" /> Core Philosophy
//           </div>
//           <p className="text-2xl md:text-4xl font-medium text-white leading-tight">
//             “The important thing is not to stop questioning.{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold italic">
//               Curiosity has its own reason for existing.
//             </span>”
//           </p>
//           <span className="block mt-8 text-xs tracking-[0.4em] uppercase text-gray-400 font-black">— Albert Einstein</span>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
//           {/* Bento Card: Personal Profile */}
//           <motion.div variants={itemVariants} className="lg:col-span-4 group">
//             <div className="relative p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.12] to-transparent border border-white/20 h-full flex flex-col transition-all duration-500 hover:border-indigo-500/50 shadow-2xl overflow-hidden">
//               <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full group-hover:bg-indigo-600/30 transition-colors duration-500" />
              
//               <div className="relative z-10">
//                 <div className="flex items-center gap-5 mb-12">
//                   <div className="relative">
//                     <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
//                     <div className="relative p-5 bg-indigo-600 rounded-2xl shadow-inner border border-indigo-400/30">
//                       <Binary className="w-8 h-8 text-white" />
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-black text-white tracking-tighter italic uppercase">ROHITH. J</h3>
//                     <p className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold">Systems & Logic</p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4 mb-12">
//                   <StatBox icon={<CalendarClock />} value="2+" label="Years" />
//                   <StatBox icon={<FolderKanban />} value="20+" label="Deploy" />
//                   <StatBox icon={<Activity />} value="98%" label="SLA" />
//                 </div>

//                 <p className="text-gray-200 text-base leading-relaxed mb-12 font-medium">
//                   Specializing in the development of <span className="text-white font-bold underline underline-offset-4 decoration-indigo-500/50">high-availability ML systems</span> where research meets production-grade reliability and architectural integrity.
//                 </p>
//               </div>

//               <div className="mt-auto space-y-4 relative z-10">
//                 <Link
//                   href="https://github.com/RohithSriSharan"
//                   target="_blank"
//                   className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
//                 >
//                   Source Control <GitBranch className="w-5 h-5" />
//                 </Link>
//                 <Link
//                   href="/resume.pdf"
//                   target="_blank"
//                   className="flex items-center justify-center gap-3 w-full py-5 rounded-xl border border-white/20 bg-white/10 text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-white/20 active:scale-95"
//                 >
//                   Technical CV <ArrowUpRight className="w-5 h-5" />
//                 </Link>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right Content: Bio & Stack */}
//           <div className="lg:col-span-8 space-y-8">
//             <motion.div variants={itemVariants} className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.05] border border-white/20 backdrop-blur-sm shadow-2xl">
//               <div className="flex items-center gap-4 mb-12">
//                 <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
//                 <h3 className="text-[11px] font-mono uppercase tracking-[0.5em] text-indigo-300 font-bold">Technical Stack</h3>
//                 <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//                 <StackGroup title="Deep Learning" items={["PyTorch", "Transformers","NLP", "Computer Vision"]} />
//                 <StackGroup title="MLOps Infrastructure" items={["MLflow", "Docker", "DVC", "AWS Sagemaker","GCP", "Kubernetes"]} />
//               </div>
              
//               <div className="mt-16 pt-12 border-t border-white/10">
//                 <p className="text-gray-100 leading-relaxed text-lg md:text-xl font-medium">
//                   I architect <span className="text-white font-bold italic">production-ready environments</span> for complex neural architectures. 
//                   By focusing on <span className="text-cyan-400 font-bold">computational efficiency</span> and 
//                   <span className="text-indigo-400 font-bold"> automated observability</span>, I transform experimental models into scalable, low-latency business solutions.
//                 </p>
//               </div>
//             </motion.div>

//             <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//               <Highlight
//                 icon={<Brain className="w-7 h-7 text-cyan-400" />}
//                 title="Advanced Neural networks"
//                 text="Crafting custom CNNs and Transformers optimized for high-throughput environments."
//               />
//               <Highlight
//                 icon={<GitBranch className="w-7 h-7 text-indigo-400" />}
//                 title="Model Orchestration"
//                 text="Building robust CI/CD pipelines with automated drift detection and deployments."
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// /* Sub-components */
// function StatBox({ icon, value, label }) {
//   return (
//     <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/[0.15]">
//       <div className="text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors">
//         {React.cloneElement(icon as React.ReactElement, { size: 18 })}
//       </div>
//       <span className="text-2xl font-black text-white leading-none tracking-tighter">{value}</span>
//       <span className="text-[8px] uppercase tracking-widest text-gray-300 font-black mt-3">{label}</span>
//     </div>
//   );
// }

// function StackGroup({ title, items }) {
//   return (
//     <div className="space-y-8">
//       <h5 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-indigo-300/80">{title}</h5>
//       <div className="flex flex-wrap gap-4">
//         {items.map((item) => (
//           <span 
//             key={item} 
//             className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.05] text-xs text-white font-bold hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-indigo-500/20 transition-all duration-300 cursor-default"
//           >
//             {item}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// function Highlight({ icon, title, text }) {
//   return (
//     <div className="group relative p-10 rounded-3xl bg-white/[0.06] border border-white/20 overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:translate-y-[-6px] shadow-xl">
//       <div className="absolute -bottom-4 -right-4 p-4 opacity-[0.05] group-hover:opacity-15 transition-opacity duration-500">
//         {React.cloneElement(icon as React.ReactElement, { size: 120 })}
//       </div>
//       <div className="mb-8 p-4 w-fit rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-inner">
//         {icon}
//       </div>
//       <h5 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h5>
//       <p className="text-sm text-gray-200 leading-relaxed font-medium">{text}</p>
//     </div>
//   );
// }











"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import {
  Brain, 
  CalendarClock, 
  FolderKanban, 
  GitBranch,
  ArrowUpRight, 
  Binary, 
  Activity
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#020205] text-gray-100 py-24 lg:py-40 overflow-hidden">
      {/* AI Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-125 contrast-150" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10"
      >
        {/* Quote Section */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-[11px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-md">
            <Activity className="w-4 h-4 animate-pulse" /> Core Philosophy
          </div>
          <p className="text-2xl md:text-4xl font-medium text-white leading-tight">
            “The important thing is not to stop questioning.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-semibold italic">
              Curiosity has its own reason for existing.
            </span>”
          </p>
          <span className="block mt-8 text-xs tracking-[0.4em] uppercase text-gray-400 font-black">— Albert Einstein</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bento Card: Personal Profile */}
          <motion.div variants={itemVariants} className="lg:col-span-4 group">
            <div className="relative p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.12] to-transparent border border-white/20 h-full flex flex-col transition-all duration-500 hover:border-indigo-500/50 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full group-hover:bg-indigo-600/30 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-5 mb-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative p-5 bg-indigo-600 rounded-2xl shadow-inner border border-indigo-400/30">
                      <Binary className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white tracking-tighter italic uppercase">ROHITH. J</h3>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-indigo-300 font-bold">Systems & Logic</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-12">
                  <StatBox icon={<CalendarClock />} value="2+" label="Years" />
                  <StatBox icon={<FolderKanban />} value="20+" label="Deploy" />
                  <StatBox icon={<Activity />} value="98%" label="SLA" />
                </div>

                <p className="text-gray-200 text-base leading-relaxed mb-12 font-medium">
                  Specializing in the development of <span className="text-white font-bold underline underline-offset-4 decoration-indigo-500/50">high-availability ML systems</span> where research meets production-grade reliability and architectural integrity.
                </p>
              </div>

              <div className="mt-auto space-y-4 relative z-10">
                <Link
                  href="https://github.com/RohithSriSharan"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-[1.03] active:scale-95 shadow-xl"
                >
                  Source Control <GitBranch className="w-5 h-5" />
                </Link>
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-xl border border-white/10 bg-white/10 text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-white/20 active:scale-95"
                >
                  Technical CV <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Content: Bio & Stack */}
          <div className="lg:col-span-8 space-y-8">
            <motion.div variants={itemVariants} className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.05] border border-white/20 backdrop-blur-sm shadow-2xl">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                <h3 className="text-[11px] font-mono uppercase tracking-[0.5em] text-indigo-300 font-bold">Technical Stack</h3>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <StackGroup title="Deep Learning" items={["PyTorch", "Transformers", "NLP", "Computer Vision"]} />
                <StackGroup title="MLOps Infrastructure" items={["MLflow", "Docker", "DVC", "AWS Sagemaker", "GCP", "Kubernetes"]} />
              </div>
              
              <div className="mt-16 pt-12 border-t border-white/10">
                <p className="text-gray-100 leading-relaxed text-lg md:text-xl font-medium">
                  I architect <span className="text-white font-bold italic">production-ready environments</span> for complex neural architectures. 
                  By focusing on <span className="text-cyan-400 font-bold">computational efficiency</span> and 
                  <span className="text-indigo-400 font-bold"> automated observability</span>, I transform experimental models into scalable, low-latency business solutions.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Highlight
                icon={<Brain className="w-7 h-7 text-cyan-400" />}
                title="Advanced Neural networks"
                text="Crafting custom CNNs and Transformers optimized for high-throughput environments."
              />
              <Highlight
                icon={<GitBranch className="w-7 h-7 text-indigo-400" />}
                title="Model Orchestration"
                text="Building robust CI/CD pipelines with automated drift detection and deployments."
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* Sub-components */

// Fixed: Added proper React.ReactElement typing with size props to satisfy ESLint any-rules
interface IconProps {
  size?: number;
  className?: string;
}

function StatBox({ icon, value, label }: { icon: React.ReactElement<IconProps>; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-white/10 border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/[0.15]">
      <div className="text-indigo-300 mb-3 group-hover:text-indigo-200 transition-colors">
        {React.cloneElement(icon, { size: 18 })}
      </div>
      <span className="text-2xl font-black text-white leading-none tracking-tighter">{value}</span>
      <span className="text-[8px] uppercase tracking-widest text-gray-300 font-black mt-3">{label}</span>
    </div>
  );
}

function StackGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-8">
      <h5 className="text-[10px] font-mono font-black uppercase tracking-[0.4em] text-indigo-300/80">{title}</h5>
      <div className="flex flex-wrap gap-4">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.05] text-xs text-white font-bold hover:text-cyan-300 hover:border-cyan-500/50 hover:bg-indigo-500/20 transition-all duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Highlight({ icon, title, text }: { icon: React.ReactElement<IconProps>; title: string; text: string }) {
  return (
    <div className="group relative p-10 rounded-3xl bg-white/[0.06] border border-white/20 overflow-hidden transition-all duration-500 hover:border-indigo-500/40 hover:translate-y-[-6px] shadow-xl">
      <div className="absolute -bottom-4 -right-4 p-4 opacity-[0.05] group-hover:opacity-15 transition-opacity duration-500">
        {React.cloneElement(icon, { size: 120 })}
      </div>
      <div className="mb-8 p-4 w-fit rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 shadow-inner">
        {icon}
      </div>
      <h5 className="text-xl font-bold text-white mb-4 tracking-tight">{title}</h5>
      <p className="text-sm text-gray-200 leading-relaxed font-medium">{text}</p>
    </div>
  );
}