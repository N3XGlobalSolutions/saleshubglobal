"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../layout/Navbar";
import { ArrowRight, Terminal, Activity, TrendingUp, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"lead" | "voice">("lead");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const blurRevealVariants = {
    hidden: { filter: "blur(8px)", opacity: 0, y: 15 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const logs = {
    lead: [
      { time: "13:58:02", type: "system", msg: "LeadEngine core initialized." },
      { time: "13:58:05", type: "process", msg: "Scanning LinkedIn SalesNav, Crunchbase & ZoomInfo databases..." },
      { time: "13:58:12", type: "success", msg: "Identified 84 high-intent profiles matching ICP: 'VP Sales, Enterprise SaaS'" },
      { time: "13:58:24", type: "success", msg: "Enriched contacts (98% verification rate). Extracted emails, direct lines." },
      { time: "13:58:36", type: "lead", msg: "Lead scored: 'VP Sales at Snowflake' - score: 98/100. Hot Prospect." },
      { time: "13:58:40", type: "system", msg: "Forwarding hot prospect to VoicePilot calling queue..." }
    ],
    voice: [
      { time: "13:58:41", type: "system", msg: "VoicePilot conversational engine initialized." },
      { time: "13:58:45", type: "process", msg: "Outbound agent 'Sarah-V2' dialing direct line..." },
      { time: "13:58:50", type: "success", msg: "Call connected. Customer speaking. Voice stream established." },
      { time: "13:58:56", type: "voice", msg: " Sarah: 'Hi Dave, this is Sarah from SalesHub. I saw your post on...' " },
      { time: "13:59:02", type: "voice", msg: " Dave: 'Hey Sarah. Actually that is relevant. How does your integration...' " },
      { time: "13:59:08", type: "success", msg: "Intent classified: 'Booking Request'. Booking meeting via Google Calendar..." }
    ]
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden flex flex-col items-center justify-center engineering-grid">
      {/* Background Soft Glow Lights */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-accent-purple/10 to-accent-blue/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-[35%] left-[25%] w-[300px] h-[300px] bg-accent-orange/5 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-glow-cyan/5 blur-[100px] rounded-full -z-10" />

      {/* Grid Fine Detail Overlay */}
      <div className="absolute inset-0 engineering-grid-fine pointer-events-none -z-10 opacity-70" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center relative z-10"
      >
        {/* Centered Brand Representation matching reference image exactly */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-8">
          <Logo size="md" />
          <div className="flex flex-col items-center mt-4">
            <span className="font-heading font-extrabold text-[22px] tracking-tight text-[#071126]">
              SALESHUB
            </span>
            <span className="font-sans font-bold text-[10px] tracking-[0.3em] text-soft-gray uppercase mt-1">
              GLOBAL
            </span>
            <div className="flex items-center gap-3 mt-3 w-full max-w-[280px]">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-soft-gray/25" />
              <span className="font-sans text-[7.5px] font-semibold text-soft-gray tracking-[0.25em] uppercase whitespace-nowrap">
                ELEVATING SALES THROUGH AI &amp; TECHNOLOGY
              </span>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-soft-gray/25" />
            </div>
          </div>
        </motion.div>

        {/* Large bold headline from reference */}
        <motion.h1
          variants={blurRevealVariants}
          className="font-heading font-extrabold text-[9.5vw] sm:text-[64px] md:text-[84px] leading-[0.98] tracking-[-0.04em] text-primary-text mb-8 uppercase"
        >
          Revolutionize
          <br />
          Your
          <br />
          <span className="gradient-text-blue-purple-orange drop-shadow-sm select-none">
            Sales Engine
          </span>
        </motion.h1>

        {/* Minimal Supporting Copy */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl font-sans text-base md:text-lg text-[#071126]/70 leading-relaxed mb-10 font-normal px-4"
        >
          Automate data enrichment, orchestrate hyper-targeted sequences, and execute conversational calls with autonomous AI agents. Scaled for enterprise pipelines.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto relative group inline-flex items-center justify-center px-8 py-4 rounded-xl font-sans font-bold text-[14px] text-white bg-[#071126] hover:bg-[#121b2d] overflow-hidden transition-all duration-300 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/35 to-accent-purple/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-1.5">
              Request Enterprise Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-sans font-bold text-[14px] text-primary-text hover:text-accent-blue border border-[#071126]/10 hover:border-accent-blue/35 bg-white/50 backdrop-blur-md shadow-premium hover:shadow-glow-blue/10 transition-all duration-300"
          >
            Explore Flagships
          </a>
        </motion.div>

        {/* Interactive Dashboard Display - Main Centerpiece */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-4xl mx-auto rounded-2xl glassmorphism shadow-premium border border-white/50 overflow-hidden text-left relative"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#071126]/5 bg-white/20">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <span className="w-3 h-3 rounded-full bg-green-400/80" />
              <span className="ml-2 font-mono text-[11px] font-semibold text-[#071126]/50 uppercase tracking-widest flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                Sales Engine Terminal
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#071126]/5 px-2.5 py-1 rounded-md">
              <Activity className="w-3 h-3 text-accent-purple animate-pulse" />
              <span className="font-mono text-[9.5px] font-bold text-[#071126]/60">
                ACTIVE PIPELINE SYNC
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-[#071126]/5 bg-white/10">
            <button
              onClick={() => setActiveTab("lead")}
              className={`flex-1 px-4 py-3.5 font-sans font-semibold text-[13px] transition-all flex items-center justify-center gap-2 border-b-2 outline-none ${
                activeTab === "lead"
                  ? "border-accent-blue text-accent-blue bg-white/30"
                  : "border-transparent text-primary-text/60 hover:text-primary-text hover:bg-white/10"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "lead" ? "bg-accent-blue animate-ping" : "bg-transparent"}`} />
              LeadEngine
            </button>
            <button
              onClick={() => setActiveTab("voice")}
              className={`flex-1 px-4 py-3.5 font-sans font-semibold text-[13px] transition-all flex items-center justify-center gap-2 border-b-2 outline-none ${
                activeTab === "voice"
                  ? "border-accent-orange text-accent-orange bg-white/30"
                  : "border-transparent text-primary-text/60 hover:text-primary-text hover:bg-white/10"
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${activeTab === "voice" ? "bg-accent-orange animate-ping" : "bg-transparent"}`} />
              VoicePilot
            </button>
          </div>

          {/* Tab Screen Output */}
          <div className="p-6 bg-slate-900 text-slate-100 font-mono text-[12px] h-[240px] overflow-y-auto leading-relaxed border-t border-slate-950/20 select-none">
            <div className="flex flex-col gap-2.5">
              {logs[activeTab].map((log, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-slate-500 font-semibold">{log.time}</span>
                  <span className="text-[#00E5FF] font-semibold">[$]</span>
                  <span
                    className={
                      log.type === "success"
                        ? "text-emerald-400"
                        : log.type === "lead"
                        ? "text-accent-orange font-semibold"
                        : log.type === "outreach"
                        ? "text-accent-blue font-semibold"
                        : log.type === "voice"
                        ? "text-accent-purple font-semibold italic"
                        : "text-slate-300"
                    }
                  >
                    {log.msg}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 text-accent-blue animate-pulse mt-2">
                <span>&gt;</span>
                <span className="w-1.5 h-3 bg-accent-blue" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Footer */}
          <div className="grid grid-cols-3 divide-x divide-primary-text/5 border-t border-primary-text/5 bg-white/20">
            <div className="p-4 flex flex-col">
              <span className="font-sans text-[10px] font-bold text-soft-gray uppercase tracking-widest">
                Scraped Leads
              </span>
              <span className="font-sans font-extrabold text-[20px] text-primary-text mt-1 flex items-center gap-1">
                42,912
                <Sparkles className="w-4 h-4 text-accent-blue" />
              </span>
            </div>
            <div className="p-4 flex flex-col">
              <span className="font-sans text-[10px] font-bold text-soft-gray uppercase tracking-widest">
                Orchestrations
              </span>
              <span className="font-sans font-extrabold text-[20px] text-primary-text mt-1 flex items-center gap-1">
                1.4M
                <TrendingUp className="w-4 h-4 text-accent-purple" />
              </span>
            </div>
            <div className="p-4 flex flex-col">
              <span className="font-sans text-[10px] font-bold text-soft-gray uppercase tracking-widest">
                Connected Minutes
              </span>
              <span className="font-sans font-extrabold text-[20px] text-primary-text mt-1 flex items-center gap-1">
                348,201
                <Activity className="w-4 h-4 text-accent-orange" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Maintenance Subtitle Anchor exactly matching reference font */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-0 w-full flex flex-col items-center"
      >
        <span className="font-sans text-[8.5px] font-bold text-[#071126] tracking-[0.4em] uppercase opacity-75">
          SALESHUBGLOBAL.COM © 2026
        </span>
      </motion.div>
    </section>
  );
};
