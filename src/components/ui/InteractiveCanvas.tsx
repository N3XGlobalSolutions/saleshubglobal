"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  speedModifier: number;
}

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = Math.min(65, Math.floor((window.innerWidth * window.innerHeight) / 22000));
    
    // Theme Colors
    const colors = [
      "rgba(94, 91, 255, 0.25)",   // Accent Blue
      "rgba(139, 109, 255, 0.25)",  // Accent Purple
      "rgba(255, 154, 47, 0.2)",    // Accent Orange
      "rgba(0, 229, 255, 0.15)",   // Glow Cyan
    ];

    // Check accessibility reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x,
          y,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.15,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.15,
          baseX: x,
          baseY: y,
          radius,
          color,
          speedModifier: Math.random() * 0.6 + 0.4,
        });
      }
    };

    initCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Interpolate mouse coordinates for smooth tracking
      if (!prefersReducedMotion) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;
      } else {
        mouseRef.current.x = mouseRef.current.targetX;
        mouseRef.current.y = mouseRef.current.targetY;
      }

      // Draw subtle ambient glow near mouse cursor
      if (mouseRef.current.active && !prefersReducedMotion) {
        const glowGradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          250
        );
        glowGradient.addColorStop(0, "rgba(139, 109, 255, 0.04)");
        glowGradient.addColorStop(0.5, "rgba(94, 91, 255, 0.015)");
        glowGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 250, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Move particle
        if (!prefersReducedMotion) {
          p.x += p.vx * p.speedModifier;
          p.y += p.vy * p.speedModifier;

          // Gentle canvas boundary collision
          if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
          if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        }

        // Magnetic parallax effect relative to mouse
        if (mouseRef.current.active && !prefersReducedMotion) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 220;

          if (distance < maxDistance) {
            // Calculate push/pull strength based on distance
            const force = (maxDistance - distance) / maxDistance;
            // Shift particle slightly in the direction of/away from mouse (parallax simulation)
            const shiftX = (dx / distance) * force * 15 * p.speedModifier;
            const shiftY = (dy / distance) * force * 15 * p.speedModifier;
            
            ctx.fillStyle = p.color.replace("0.25", "0.45").replace("0.2", "0.4").replace("0.15", "0.35");
            ctx.beginPath();
            ctx.arc(p.x + shiftX, p.y + shiftY, p.radius * (1 + force * 0.3), 0, Math.PI * 2);
            ctx.fill();
            return;
          }
        }

        // Default particle draw
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw neural connections (network lines)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          let dx = p1.x - p2.x;
          let dy = p1.y - p2.y;

          // Parallax shift calculation for drawing correct connected lines
          if (mouseRef.current.active && !prefersReducedMotion) {
            const dx1 = mouseRef.current.x - p1.x;
            const dy1 = mouseRef.current.y - p1.y;
            const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
            
            const dx2 = mouseRef.current.x - p2.x;
            const dy2 = mouseRef.current.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            
            const maxD = 220;
            let sx1 = 0, sy1 = 0, sx2 = 0, sy2 = 0;

            if (dist1 < maxD) {
              const f = (maxD - dist1) / maxD;
              sx1 = (dx1 / dist1) * f * 15 * p1.speedModifier;
              sy1 = (dy1 / dist1) * f * 15 * p1.speedModifier;
            }
            if (dist2 < maxD) {
              const f = (maxD - dist2) / maxD;
              sx2 = (dx2 / dist2) * f * 15 * p2.speedModifier;
              sy2 = (dy2 / dist2) * f * 15 * p2.speedModifier;
            }

            dx = (p1.x + sx1) - (p2.x + sx2);
            dy = (p1.y + sy1) - (p2.y + sy2);

            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 130) {
              const alpha = (130 - distance) / 130 * 0.07;
              ctx.strokeStyle = `rgba(139, 109, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x + sx1, p1.y + sy1);
              ctx.lineTo(p2.x + sx2, p2.y + sy2);
              ctx.stroke();
            }
          } else {
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 130) {
              const alpha = (130 - distance) / 130 * 0.05;
              ctx.strokeStyle = `rgba(139, 109, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-80"
    />
  );
};
