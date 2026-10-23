"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  color: string;
  rotation: number;
  rotSpeed: number;
}

interface GoldenSparklesProps {
  className?: string;
}

export function GoldenSparkles({ className = "" }: GoldenSparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const updateDimensions = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = parent ? parent.clientHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      return { width, height };
    };

    let { width, height } = updateDimensions() || {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Golden luxury sparkle palette
    const colors = [
      "#F0B33E", // Molten Gold
      "#FFD875", // Bright Gold highlight
      "#FFEEC2", // Warm White sparkle
      "#D99B26", // Deep Amber Gold
      "#F5C869", // Luminous Gold
    ];

    // Smooth mouse coordinates relative to hero canvas
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isInside: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isInside =
        e.clientX >= rect.left - 50 &&
        e.clientX <= rect.right + 50 &&
        e.clientY >= rect.top - 50 &&
        e.clientY <= rect.bottom + 50;
    };

    const handleResize = () => {
      const dim = updateDimensions();
      if (dim) {
        width = dim.width;
        height = dim.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Dynamic particle count scaled to hero size (glistening & dense)
    const particleCount = Math.min(Math.floor(width / 32) + 15, 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.4 + 1.2,
        speedY: Math.random() * 0.35 + 0.15, // Falling gently from top to bottom
        speedX: (Math.random() - 0.5) * 0.25, // Subtle horizontal sway
        opacity: Math.random() * 0.65 + 0.25,
        maxOpacity: Math.random() * 0.45 + 0.55,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.025,
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    // Main render loop
    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation towards cursor
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational downward fall
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        // Pulsing twinkle opacity
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.18) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Active mouse attraction & swirling wake
        if (mouse.isInside) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 260) {
            const force = (1 - dist / 260) * 0.045;
            p.x += dx * force;
            p.y += dy * force * 0.5;
          }
        }

        // Wrap around hero section boundaries
        if (p.y > height + 15) {
          p.y = -12;
          p.x = Math.random() * width;
        }
        if (p.x > width + 15) p.x = -12;
        if (p.x < -15) p.x = width + 15;

        // Draw shiny 4-point diamond star sparkle with golden radial glow
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // 1. Soft Molten Gold Atmospheric Glow
        const glowRadius = p.size * 3.8;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(0.35, p.color);
        gradient.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = gradient;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Shiny 4-Point Diamond Star Sparkle (quadratic curved facets)
        ctx.fillStyle = p.color;
        ctx.beginPath();
        const s = p.size * 2.4;
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.closePath();
        ctx.fill();

        // 3. Central Brilliant White Star Core (Gives crisp, diamond sparkle)
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.48, 0, Math.PI * 2);
        ctx.fill();

        // 4. Subtle Shimmer Cross Spike on larger particles
        if (p.size > 2.0) {
          ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
          ctx.lineWidth = 0.8;
          const flare = s * 1.4;
          ctx.beginPath();
          ctx.moveTo(-flare, 0);
          ctx.lineTo(flare, 0);
          ctx.moveTo(0, -flare);
          ctx.lineTo(0, flare);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-15 h-full w-full select-none ${className}`}
    />
  );
}
