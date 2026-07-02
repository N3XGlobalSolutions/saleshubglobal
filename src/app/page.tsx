"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Lenis from "lenis";
import { Navbar } from "../components/layout/Navbar";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/layout/Footer";
import { InteractiveCanvas } from "../components/ui/InteractiveCanvas";

// Dynamically load he33avy client modules to reduce the initial JS bundle payload
const Products = dynamic(
  () => import("../components/products/Products").then((m) => m.Products),
  { ssr: false, loading: () => <ComponentFallback /> }
);
const TechStack = dynamic(
  () => import("../components/tech/TechStack").then((m) => m.TechStack),
  { ssr: false, loading: () => <ComponentFallback /> }
);

const ComponentFallback: React.FC = () => (
  <div className="w-full py-24 flex items-center justify-center bg-white">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-accent-blue/10 border-t-accent-blue animate-spin" />
      <span className="font-mono text-[10px] text-soft-gray uppercase tracking-widest">
        Loading Section...
      </span>
    </div>
  </div>
);

export default function Home() {
  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    // Dynamic grid glow positioning on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.documentElement.style.setProperty("--scroll-y", `${scrolled}px`);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F7F8FC] selection:bg-accent-blue/15 selection:text-accent-blue overflow-x-hidden">
      {/* Background Interactive Particles & Neural Net Canvas */}
      <InteractiveCanvas />

      {/* Floating Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Immersive flagship product pages */}
        <Products />

        {/* Global integration hub */}
        <TechStack />
      </main>

      {/* Luxury layout footer */}
      <Footer />
    </div>
  );
}
