"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Cpu, PhoneCall, Layers } from "lucide-react";

export const Logo: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "sm" }) => {
  const containerSizes = {
    sm: "w-9 h-9 rounded-xl",
    md: "w-14 h-14 rounded-2xl",
    lg: "w-24 h-24 rounded-3xl",
  };

  const svgSizes = {
    sm: "w-5 h-5",
    md: "w-8 h-8",
    lg: "w-14 h-14",
  };

  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-[#121422] to-[#07080f] border border-white/10 shadow-lg ${containerSizes[size]}`}>
      {/* Subtle Breathing Glow */}
      <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-accent-purple/20 to-accent-orange/10 blur-[6px] -z-10 animate-pulse duration-[3000ms]" />
      
      <svg
        className={`${svgSizes[size]} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="chevron-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B6DFF" />
            <stop offset="100%" stopColor="#5E5BFF" />
          </linearGradient>
          <linearGradient id="chevron-right" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF9A2F" />
            <stop offset="60%" stopColor="#8B6DFF" />
            <stop offset="100%" stopColor="#5E5BFF" />
          </linearGradient>
        </defs>
        {/* Left wing of caret */}
        <path
          d="M12 4L4.5 18H8.5L12 11.5L12.5 12.5Z"
          fill="url(#chevron-left)"
        />
        {/* Right wing of caret (overlays and blends) */}
        <path
          d="M12 4L19.5 18H15.5L12 11.5L11.5 12.5Z"
          fill="url(#chevron-right)"
        />
      </svg>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", href: "#products", icon: Layers },
    { name: "LeadEngine", href: "#leadengine", icon: Cpu },
    { name: "VoicePilot", href: "#voicepilot", icon: PhoneCall },
    { name: "Integrations", href: "#integrations", icon: Cpu },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="fixed top-5 left-1/2 z-50 w-[calc(100%-32px)] max-w-7xl -translate-x-1/2 px-4 transition-all duration-300"
      >
        <div className={`w-full rounded-2xl flex items-center justify-between px-6 md:px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "glassmorphism border border-white/50 shadow-premium"
            : "bg-white/45 backdrop-blur-md border border-white/20 shadow-sm"
        }`}>
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center group cursor-pointer"
          >
            <Logo size="sm" />
            <div className="flex flex-col ml-3 leading-none select-none">
              <span className="font-heading font-extrabold text-[16px] tracking-tight text-primary-text flex items-center gap-1">
                SALESHUB
              </span>
              <span className="font-sans font-bold text-[8.5px] tracking-[0.25em] text-soft-gray uppercase mt-0.5">
                GLOBAL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans font-medium text-[13.5px] text-[#071126]/75 hover:text-[#5E5BFF] transition-colors relative py-2 group flex items-center gap-1.5"
                >
                  <Icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-accent-purple" />
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-accent-blue to-accent-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="font-sans font-semibold text-[13.5px] text-primary-text hover:text-accent-blue transition-colors py-2"
            >
              Sign In
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-sans font-semibold text-[13.5px] text-white bg-[#071126] hover:bg-[#121b2d] overflow-hidden transition-all duration-300 shadow-md group active:scale-95"
            >
              {/* Inner glowing hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center gap-1">
                Contact Sales
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-3.5 py-2 rounded-lg bg-[#071126] text-white font-sans font-semibold text-[12px] shadow-sm hover:bg-[#121b2d] transition-all"
            >
              Demo
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-primary-text hover:text-accent-blue transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white/95 backdrop-blur-xl border-b border-primary-text/5 shadow-2xl py-6 px-8 flex flex-col gap-6 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="font-sans font-semibold text-[16px] text-primary-text hover:text-accent-blue py-2 flex items-center gap-3 border-b border-black/5"
                  >
                    <Icon className="w-4 h-4 text-accent-purple" />
                    {item.name}
                  </motion.a>
                );
              })}
            </div>
            
            <div className="flex flex-col gap-3 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center py-3 rounded-xl border border-primary-text/10 font-sans font-semibold text-primary-text hover:bg-black/5 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full text-center py-3 rounded-xl bg-[#071126] text-white font-sans font-semibold shadow-md flex items-center justify-center gap-2"
              >
                Contact Sales
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
