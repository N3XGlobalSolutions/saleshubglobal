"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, PhoneCall, CheckCircle2 } from "lucide-react";

// LeadEngine enrichment card simulator
const LeadCardSimulator: React.FC = () => {
  const [leads, setLeads] = useState([
    { id: 1, name: "Marcus Aurelius", role: "VP Growth", company: "Linear", status: "Scanning", verified: false, score: 0 },
    { id: 2, name: "Ada Lovelace", role: "Head of Pipeline", company: "Vercel", status: "Scraped", verified: true, score: 92 },
    { id: 3, name: "Alan Turing", role: "VP Operations", company: "Stripe", status: "Verified", verified: true, score: 99 },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLeads(prev => {
        return prev.map(lead => {
          if (lead.status === "Scanning") {
            return { ...lead, status: "Scraped", verified: true, score: Math.floor(Math.random() * 15) + 85 };
          } else if (lead.status === "Scraped") {
            return { ...lead, status: "Verified" };
          } else {
            // cycle back to scanning
            return { ...lead, status: "Scanning", score: 0, verified: false };
          }
        });
      });
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 w-full">
      {leads.map((lead) => (
        <motion.div
          layout
          key={lead.id}
          className="p-4 rounded-xl glassmorphism border border-white/40 flex items-center justify-between shadow-premium hover:shadow-glow-blue/5 transition-all group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center font-heading font-bold text-accent-blue text-sm">
              {lead.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-primary-text">{lead.name}</h4>
              <p className="font-sans text-[11px] text-soft-gray font-medium">{lead.role} @ {lead.company}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`px-2 py-0.5 rounded text-[9.5px] font-bold tracking-wide uppercase ${
              lead.status === "Verified" 
                ? "bg-emerald-100 text-emerald-700" 
                : lead.status === "Scraped" 
                ? "bg-blue-100 text-blue-700" 
                : "bg-amber-100 text-amber-700 animate-pulse"
            }`}>
              {lead.status}
            </span>
            {lead.score > 0 && (
              <span className="font-mono text-xs font-extrabold text-accent-blue bg-accent-blue/5 px-2 py-1 rounded">
                Score: {lead.score}
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};



// VoicePilot Canvas waveform visualizer
const VoiceWaveform: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameId: number;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 154, 47, 0.6)";
      ctx.lineWidth = 2.5;

      const scale = hovered ? 40 : 20;
      const speed = hovered ? 0.15 : 0.07;

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        // Draw main soundwave
        const y = canvas.height / 2 + Math.sin(x * 0.02 + phase) * scale * Math.sin(x * 0.005);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw secondary shadow wave
      ctx.strokeStyle = "rgba(139, 109, 255, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.cos(x * 0.015 - phase) * (scale * 0.7) * Math.sin(x * 0.005);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      phase += speed;
      frameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(frameId);
  }, [hovered]);

  return (
    <div 
      className="p-5 rounded-2xl bg-gradient-to-br from-[#0F101A] to-[#07080F] border border-white/5 shadow-2xl relative w-full h-full flex flex-col justify-between"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-accent-orange uppercase tracking-widest">Sarah-V2 Voice Agent</span>
        </div>
        <span className="font-sans text-[10px] text-white/40">Hover to speak</span>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <canvas ref={canvasRef} width={340} height={120} className="w-full h-[120px]" />
      </div>

      <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/5 font-mono text-[10.5px] leading-relaxed text-white/70">
        <div className="text-accent-orange font-bold mb-1">Sarah (AI):</div>
        &quot;Hi, I noticed SalesHub would align with your outbound pipelines. Would you be open to a quick 10-minute briefing on Tuesday?&quot;
      </div>
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-32 relative bg-white overflow-hidden">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#071126]/5 to-transparent" />
      
      {/* Background ambient lighting */}
      <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-accent-blue/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] bg-accent-purple/5 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <span className="px-3 py-1 rounded-full bg-accent-blue/5 font-sans font-bold text-[10px] text-accent-blue tracking-[0.2em] uppercase">
            Flagship Autonomous Suites
          </span>
          <h2 className="font-heading font-extrabold text-[36px] md:text-[54px] tracking-tight text-primary-text mt-4 leading-tight uppercase">
            Designed to Automate,
            <br />
            Built to Scale.
          </h2>
          <p className="font-sans text-base md:text-lg text-soft-gray mt-5 max-w-xl mx-auto leading-relaxed">
            Discover the two engines that power the modern outbound sales stack. Fully integrated, enterprise-compliant.
          </p>
        </div>

        {/* Product 1: LeadEngine */}
        <div id="leadengine" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-36">
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-sans font-bold text-[11px] text-accent-blue tracking-widest uppercase">Product 01</span>
            <h3 className="font-heading font-extrabold text-[28px] md:text-[40px] tracking-tight text-primary-text mt-2 leading-tight uppercase">
              LeadEngine
            </h3>
            <p className="font-sans text-[#071126]/75 mt-4 leading-relaxed">
              Automate prospect identification and enrichment with deep precision. LeadEngine crawls LinkedIn Sales Navigator, Crunchbase, and localized company directories, applying strict validation filters and scoring criteria so your SDRs target only hot accounts.
            </p>
            
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Strict validation with 98.8% email deliverability rate",
                "Deep account scoring using company funding, size, and hiring stats",
                "Automatic custom data enrichment (direct lines, corporate profiles)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-sans text-sm text-[#071126]/70">
                  <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-[#F7F8FC] border border-[#071126]/5 shadow-premium flex items-center justify-center relative overflow-hidden group min-h-[300px]">
            {/* Glowing orb behind container */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-blue/10 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
            <LeadCardSimulator />
          </div>
        </div>

        {/* Product 2: VoicePilot */}
        <div id="voicepilot" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center text-accent-orange mb-6">
              <PhoneCall className="w-6 h-6" />
            </div>
            <span className="font-sans font-bold text-[11px] text-accent-orange tracking-widest uppercase">Product 02</span>
            <h3 className="font-heading font-extrabold text-[28px] md:text-[40px] tracking-tight text-primary-text mt-2 leading-tight uppercase">
              VoicePilot
            </h3>
            <p className="font-sans text-[#071126]/75 mt-4 leading-relaxed">
              Connect via conversational, ultra-low latency voice agents. VoicePilot dials direct lines and executes discovery calls with natural voice synthesis, handling objections in real-time, qualifying leads, and logging bookings directly into calendars.
            </p>
            
            <ul className="mt-8 flex flex-col gap-3">
              {[
                "Ultra-low response latency (< 900ms audio turnaround)",
                "Context-aware objection handling and discovery scripts",
                "Automatic meeting booking and call recording analysis",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 font-sans text-sm text-[#071126]/70">
                  <CheckCircle2 className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-slate-100 to-[#F7F8FC] border border-[#071126]/5 shadow-premium flex items-center justify-center relative overflow-hidden group min-h-[300px]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent-orange/10 blur-3xl rounded-full group-hover:scale-125 transition-transform duration-700" />
            <VoiceWaveform />
          </div>
        </div>
      </div>
    </section>
  );
};
