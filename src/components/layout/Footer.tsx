"use client";

import React, { useState } from "react";
import { Logo } from "./Navbar";
import { Send, Shield, Globe, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-20 bg-white overflow-hidden border-t border-[#071126]/5">
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-accent-blue/5 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Three Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#071126]/5">
          
          {/* Column 1: Brand Representation & Compliance Badges (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center group cursor-pointer select-none">
              <Logo size="sm" />
              <div className="flex flex-col ml-3 leading-none">
                <span className="font-heading font-extrabold text-[16px] tracking-tight text-primary-text">
                  SALESHUB
                </span>
                <span className="font-sans font-bold text-[8.5px] tracking-[0.25em] text-soft-gray uppercase mt-0.5">
                  GLOBAL
                </span>
              </div>
            </div>
            <p className="font-sans text-[13px] text-[#071126]/60 mt-4 leading-relaxed font-normal max-w-xs">
              Autonomous enterprise agents designed to automate lead generation and qualify pipelines at global scale.
            </p>

            {/* Compliance badges inline */}
            <div className="flex items-center gap-3 mt-6 text-soft-gray font-sans font-bold text-[8.5px] tracking-wider uppercase">
              <div className="flex items-center gap-1.5 bg-[#071126]/5 px-2.5 py-1.5 rounded-lg border border-[#071126]/5">
                <Shield className="w-3 h-3 text-accent-purple" />
                <span>SOC2</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#071126]/5 px-2.5 py-1.5 rounded-lg border border-[#071126]/5">
                <Globe className="w-3 h-3 text-accent-blue" />
                <span>GDPR</span>
              </div>
            </div>
          </div>

          {/* Column 2: Sleek Inline Briefing Signup (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h4 className="font-heading font-extrabold text-[14px] text-primary-text uppercase tracking-wider">
              Subscribe to Briefings
            </h4>
            <p className="font-sans text-[12px] text-soft-gray mt-1 leading-relaxed max-w-sm">
              Join growth directors and get product briefings, automation strategies, and release notes.
            </p>

            <form onSubmit={handleSubmit} className="mt-4 flex gap-2 w-full max-w-sm">
              <div className="relative flex-grow">
                <Mail className="w-3.5 h-3.5 text-soft-gray absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter corporate email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#071126]/10 bg-[#F7F8FC] font-sans text-xs focus:outline-none focus:border-accent-blue/35 transition-all text-primary-text placeholder:text-soft-gray/70"
                />
              </div>
              <button
                type="submit"
                disabled={subscribed}
                className="px-4 py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-white bg-[#071126] hover:bg-[#121b2d] transition-all shadow-md group disabled:bg-emerald-600 active:scale-95 cursor-pointer"
              >
                {subscribed ? "Subscribed" : (
                  <span className="flex items-center gap-1">
                    Subscribe
                    <Send className="w-3 h-3" />
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Column 3: Key Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-start gap-8 lg:gap-5">
            <div>
              <h4 className="font-heading font-extrabold text-[11.5px] text-primary-text tracking-[0.2em] uppercase mb-3">
                Flagships
              </h4>
              <ul className="flex flex-col gap-2 font-sans text-[12.5px] text-[#071126]/70 font-medium">
                <li><a href="#leadengine" className="hover:text-accent-blue transition-colors">LeadEngine</a></li>
                <li><a href="#voicepilot" className="hover:text-accent-orange transition-colors">VoicePilot</a></li>
                <li><a href="#integrations" className="hover:text-accent-blue transition-colors">Ecosystem Hub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-extrabold text-[11.5px] text-primary-text tracking-[0.2em] uppercase mb-3">
                Connect
              </h4>
              <ul className="flex flex-col gap-2 font-sans text-[12.5px] text-[#071126]/70 font-medium">
                <li><a href="#contact" className="hover:text-accent-blue transition-colors">LinkedIn</a></li>
                <li><a href="#contact" className="hover:text-accent-blue transition-colors">GitHub Repository</a></li>
                <li><a href="#contact" className="hover:text-accent-blue transition-colors">Trust Center</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Lower Footer: Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 font-sans text-[10.5px] text-soft-gray font-semibold tracking-wider">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5">
            <span className="uppercase text-[#071126] font-bold">
              SALESHUBGLOBAL.COM © {currentYear}
            </span>
            <span className="hidden md:inline text-soft-gray/30">|</span>
            <span className="uppercase">
              ELEVATING SALES THROUGH AI &amp; TECHNOLOGY
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#contact" className="hover:text-[#071126] transition-colors uppercase">Terms of Service</a>
            <a href="#contact" className="hover:text-[#071126] transition-colors uppercase">Privacy Shield</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
