"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Logo } from "../layout/Navbar";
import { Database, MessageSquare, Mail, Phone, CreditCard, Cloud, ArrowUpRight, Search } from "lucide-react";

interface Integration {
  name: string;
  category: "crm" | "outreach" | "messaging" | "billing";
  desc: string;
  icon: React.ComponentType<any>;
  color: string;
}

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "crm" | "outreach" | "messaging" | "billing">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const integrations: Integration[] = [
    { name: "Salesforce", category: "crm", desc: "Sync prospect metrics, accounts and pipelines in real-time.", icon: Cloud, color: "text-[#00A1E0] bg-[#00A1E0]/5" },
    { name: "HubSpot", category: "crm", desc: "Automate deal logging and lead pipeline updates instantly.", icon: Database, color: "text-[#FF7A59] bg-[#FF7A59]/5" },
    { name: "Slack", category: "messaging", desc: "Receive immediate notifications for hot leads and meeting bookings.", icon: MessageSquare, color: "text-[#4A154B] bg-[#4A154B]/5" },
    { name: "Google Workspace", category: "outreach", desc: "Dispatch email campaigns using optimized inbox rotation.", icon: Mail, color: "text-[#EA4335] bg-[#EA4335]/5" },
    { name: "Twilio", category: "messaging", desc: "Orchestrate Conversational AI voice calls over carrier lines.", icon: Phone, color: "text-[#F22F46] bg-[#F22F46]/5" },
    { name: "Stripe", category: "billing", desc: "Track conversions, contract value, and ROI indicators.", icon: CreditCard, color: "text-[#635BFF] bg-[#635BFF]/5" },
  ];

  const filteredIntegrations = integrations.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="integrations" className="py-32 relative bg-[#F7F8FC] overflow-hidden engineering-grid">
      {/* Background Soft Glows */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-accent-purple/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-glow-cyan/5 blur-[100px] rounded-full -z-10" />

      {/* Grid Fine Detail Overlay */}
      <div className="absolute inset-0 engineering-grid-fine pointer-events-none -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="px-3 py-1 rounded-full bg-accent-purple/5 font-sans font-bold text-[10px] text-accent-purple tracking-[0.2em] uppercase">
            Global Ecosystem
          </span>
          <h2 className="font-heading font-extrabold text-[36px] md:text-[54px] tracking-tight text-primary-text mt-4 leading-tight uppercase">
            Seamlessly Connected.
          </h2>
          <p className="font-sans text-base md:text-lg text-soft-gray mt-5 max-w-xl mx-auto leading-relaxed">
            Integrate SalesHub with your existing enterprise toolchain. Sync pipelines, track interactions, and automate data flows with zero friction.
          </p>
        </div>

        {/* Integration Sync Visualizer (Animated SVG centerpiece) */}
        <div className="w-full max-w-2xl mx-auto mb-20 rounded-2xl glassmorphism border border-white/50 p-8 flex items-center justify-center shadow-premium relative min-h-[340px]">
          {/* SVG Visualizer */}
          <svg className="w-full max-w-[500px] h-[300px]" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#8B6DFF" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#8B6DFF" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="sync-path" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#5E5BFF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8B6DFF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FF9A2F" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Ambient Background Glow behind center */}
            <circle cx="250" cy="150" r="90" fill="url(#centerGlow)" />

            {/* Outer Orbit Guideline Circles */}
            <circle cx="250" cy="150" r="110" stroke="rgba(7, 17, 38, 0.03)" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="250" cy="150" r="55" stroke="rgba(7, 17, 38, 0.03)" strokeWidth="1" />

            {/* Connecting Sync Paths */}
            {/* Salesforce -> Center */}
            <path id="path-sf" d="M100 80 Q 170 120 250 150" stroke="url(#sync-path)" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* HubSpot -> Center */}
            <path id="path-hs" d="M100 220 Q 170 180 250 150" stroke="url(#sync-path)" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Slack -> Center */}
            <path id="path-slack" d="M400 80 Q 330 120 250 150" stroke="url(#sync-path)" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Stripe -> Center */}
            <path id="path-stripe" d="M400 220 Q 330 180 250 150" stroke="url(#sync-path)" strokeWidth="1.5" strokeDasharray="4 4" />

            {/* Animated Data Packets (Pulsing glowing dots flowing along paths) */}
            <circle r="4.5" fill="#5E5BFF">
              <animateMotion dur="4.2s" repeatCount="indefinity" path="M100 80 Q 170 120 250 150" />
            </circle>
            <circle r="4.5" fill="#FF7A59">
              <animateMotion dur="5.5s" repeatCount="indefinity" path="M100 220 Q 170 180 250 150" />
            </circle>
            <circle r="4.5" fill="#8B6DFF">
              <animateMotion dur="4.8s" repeatCount="indefinity" path="M400 80 Q 330 120 250 150" />
            </circle>
            <circle r="4.5" fill="#FF9A2F">
              <animateMotion dur="6.2s" repeatCount="indefinity" path="M400 220 Q 330 180 250 150" />
            </circle>

            {/* Integration Nodes (Outer Orbits) */}
            {/* Salesforce */}
            <g transform="translate(80, 60)">
              <circle cx="20" cy="20" r="24" fill="white" stroke="rgba(7, 17, 38, 0.08)" strokeWidth="1.5" />
              <path d="M14 20h12v1H14z" fill="#00A1E0" />
              <circle cx="20" cy="20" r="14" fill="#00A1E0" fillOpacity="0.08" />
              <g transform="translate(13, 13)">
                <Cloud className="w-3.5 h-3.5 text-[#00A1E0]" />
              </g>
            </g>

            {/* HubSpot */}
            <g transform="translate(80, 200)">
              <circle cx="20" cy="20" r="24" fill="white" stroke="rgba(7, 17, 38, 0.08)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="14" fill="#FF7A59" fillOpacity="0.08" />
              <g transform="translate(13, 13)">
                <Database className="w-3.5 h-3.5 text-[#FF7A59]" />
              </g>
            </g>

            {/* Slack */}
            <g transform="translate(380, 60)">
              <circle cx="20" cy="20" r="24" fill="white" stroke="rgba(7, 17, 38, 0.08)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="14" fill="#4A154B" fillOpacity="0.08" />
              <g transform="translate(13, 13)">
                <MessageSquare className="w-3.5 h-3.5 text-[#4A154B]" />
              </g>
            </g>

            {/* Stripe */}
            <g transform="translate(380, 200)">
              <circle cx="20" cy="20" r="24" fill="white" stroke="rgba(7, 17, 38, 0.08)" strokeWidth="1.5" />
              <circle cx="20" cy="20" r="14" fill="#635BFF" fillOpacity="0.08" />
              <g transform="translate(13, 13)">
                <CreditCard className="w-3.5 h-3.5 text-[#635BFF]" />
              </g>
            </g>

            {/* Central Node (SalesHub Core) */}
            <g transform="translate(225, 125)">
              <circle cx="25" cy="25" r="32" fill="white" stroke="rgba(7, 17, 38, 0.1)" strokeWidth="2" className="shadow-lg" />
              <g transform="translate(6, 6)">
                <Logo size="sm" />
              </g>
            </g>
          </svg>

          {/* Core Indicator Badge */}
          <div className="absolute bottom-5 bg-[#071126] text-white px-3 py-1 rounded-full font-mono text-[9px] font-bold tracking-widest uppercase">
            SalesHub Core Sync active
          </div>
        </div>

        {/* Integration Filters and Search Bar */}
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between border-b border-[#071126]/5 pb-6 mb-10 max-w-5xl mx-auto">
          {/* Category Tabs */}
          <div className="flex items-center gap-1 bg-[#071126]/5 p-1 rounded-xl w-full md:w-auto">
            {["all", "crm", "outreach", "messaging", "billing"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as any)}
                className={`flex-1 md:flex-none px-4 py-2 rounded-lg font-sans font-bold text-xs uppercase tracking-wide transition-all outline-none ${
                  selectedCategory === cat
                    ? "bg-white text-primary-text shadow-sm"
                    : "text-primary-text/60 hover:text-primary-text"
                }`}
              >
                {cat === "all" ? "All Systems" : cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-soft-gray absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#071126]/10 bg-white/70 backdrop-blur-md font-sans text-sm focus:outline-none focus:border-accent-blue/35 transition-all text-primary-text shadow-sm placeholder:text-soft-gray/70"
            />
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredIntegrations.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                layout
                key={item.name}
                className="p-6 rounded-2xl bg-white border border-white hover:border-[#071126]/5 hover:shadow-premium transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] font-bold text-soft-gray uppercase tracking-widest bg-[#071126]/5 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-heading font-extrabold text-[17px] text-primary-text mt-4 group-hover:text-accent-blue transition-colors flex items-center gap-1">
                    {item.name}
                  </h4>
                  <p className="font-sans text-[13px] text-[#071126]/70 mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 font-sans font-bold text-[11px] text-accent-blue mt-5 group-hover:translate-x-1.5 transition-transform duration-300">
                  Configure Sync
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
