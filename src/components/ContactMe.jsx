

"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { Send, Activity, ShieldCheck, Terminal } from "lucide-react";
import Planet from "../canvas/Planet";

export default function ContactMe() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    try {
      setSending(true);
      await Promise.all([
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_CONTACT,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_REPLY,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
      ]);

      toast.success("Connection Established. Message received.");
      form.current.reset();
    } catch (err) {
      console.error(err);
      toast.error("Handshake failed. Please retry.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[#020205] text-white py-24 lg:py-40 overflow-hidden">
      
      {/* Background Neural Glow - Matching the Purplish Theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-125" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left: Visual/Planet Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 order-2 lg:order-1 relative group"
        >
          <div className="relative z-10 w-full max-w-[400px] mx-auto pointer-events-none">
            <Planet className="w-full aspect-square" />
            {/* Themed Glow behind Planet */}
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[80px] -z-10 group-hover:bg-indigo-500/30 transition-colors duration-700" />
          </div>
          
          {/* Status Indicator Bento-style */}
          {/* <div className="hidden lg:flex absolute bottom-0 left-0 p-6 rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-purple-300">System_Online</span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium">Awaiting incoming transmissions...</p>
          </div> */}
        </motion.div>

        {/* Right: Form Side */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] uppercase tracking-[0.3em] font-black mb-8 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" /> Secure Handshake
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase italic mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Collaborate?</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl">
              Initiate a connection to discuss <span className="text-white italic">Neural Architectures</span>, MLOps, or deployment strategies. Or just want to say Hi :) .
            </p>
          </motion.div>

          {/* Form Container with Bento styling */}
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="w-full space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-2"> Name </label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/[0.08] outline-none transition-all shadow-inner" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-2"> Email </label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email Address" 
                  required 
                  className="w-full px-6 py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/[0.08] outline-none transition-all shadow-inner" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest ml-2"> Content </label>
              <textarea
                name="message"
                placeholder="Describe the objective..."
                rows={5}
                required
                className="w-full px-6 py-4 rounded-[2rem] bg-white/[0.05] border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-purple-500/50 focus:bg-white/[0.08] outline-none transition-all resize-none shadow-inner"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={sending}
              className="group relative w-full md:w-auto flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-all disabled:opacity-50 overflow-hidden shadow-2xl shadow-purple-900/20"
            >
              {/* Subtle hover shine effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
              
              {sending ? (
                <>
                  <Activity className="w-4 h-4 animate-spin" /> Transmitting...
                </>
              ) : (
                <>
                  SEND
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}