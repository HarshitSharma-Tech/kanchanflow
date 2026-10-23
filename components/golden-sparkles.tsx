"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  speedY: number;
  speedX: number;
  swayAngle: number;
  swaySpeed: number;
  swayRadius: number;
  opacity: number;
  minOpacity: number;
  maxOpacity: number;
  pulseSpeed: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  isHeroStar: boolean;
  orbitRadius: number;
  orbitAngle: number;
  orbitSpeed: number;
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

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      return { width, height };
    };

    let { width, height } = updateDimensions() || {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Golden luxury sparkle palette
    const colors = [
      "#FFD700", // Bright Electric Gold
      "#F0B33E", // Kanchan Brand Molten Gold
      "#FFF2BD", // Soft Radiant Diamond Light
      "#FFDE6A", // Warm Glistening Gold
      "#F6BA42", // Deep Lustrous Amber
    ];

    // Smooth mouse coordinates relative to hero canvas
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
      isInside: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left - 40 &&
        clientX <= rect.right + 40 &&
        clientY >= rect.top - 40 &&
        clientY <= rect.bottom + 40
      ) {
        mouse.targetX = clientX - rect.left;
        mouse.targetY = clientY - rect.top;
        mouse.isInside = true;
      } else {
        mouse.isInside = false;
      }
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

    // Tasteful particle density
    const particleCount = Math.min(Math.floor(width / 48) + 12, 34);
    const particles: Particle[] = [];

    // Distribute particles across canvas initially
    for (let i = 0; i < particleCount; i++) {
      const isHeroStar = i % 5 === 0;
      // Reduced size by ~0.8x: delicate, fine, and elegant (1.4px to 3.4px)
      const baseSize = isHeroStar
        ? Math.random() * 0.9 + 2.5
        : Math.random() * 0.9 + 1.4;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize,
        size: baseSize,
        // Gentle, slow, serene drift
        speedY: (Math.random() * 0.10 + 0.04) * 0.5,
        speedX: (Math.random() - 0.5) * 0.06 * 0.5,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.012 + 0.006) * 0.5,
        swayRadius: Math.random() * 0.3 + 0.15,
        opacity: Math.random() * 0.35 + 0.5,
        minOpacity: Math.random() * 0.2 + 0.25,
        maxOpacity: Math.random() * 0.15 + 0.8,
        pulseSpeed: (Math.random() * 0.012 + 0.005) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.010 * 0.5,
        isHeroStar,
        // Assigned orbital shells so particles never clump into a single point
        orbitRadius: 65 + (i % 6) * 20 + Math.random() * 12,
        orbitAngle: (i / particleCount) * Math.PI * 2,
        orbitSpeed: ((i % 2 === 0 ? 1 : -1) * (Math.random() * 0.006 + 0.003)) * 0.5,
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

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 1. Particle-to-particle soft repulsion (guarantees NO vertical line or clumping)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSeparation = 26;
          if (dist < minSeparation && dist > 0.01) {
            const overlap = (minSeparation - dist) * 0.02;
            const nx = dx / dist;
            const ny = dy / dist;
            particles[i].x -= nx * overlap;
            particles[i].y -= ny * overlap;
            particles[j].x += nx * overlap;
            particles[j].y += ny * overlap;
          }
        }
      }

      // 2. Physics & Draw loop
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational downward fall + harmonic sway
        p.swayAngle += p.swaySpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.swayAngle) * p.swayRadius;
        p.rotation += p.rotSpeed;

        // Pulsing twinkle opacity
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < p.minOpacity) {
          p.pulseSpeed = -p.pulseSpeed;
        }
        // Subtle breathing size
        p.size = p.baseSize * (0.94 + 0.12 * Math.sin(p.swayAngle * 1.5));

        // Intelligent mouse follow: orbits in soft dispersed constellation (NO stacking)
        if (mouse.isInside) {
          p.orbitAngle += p.orbitSpeed;
          const targetOrbitX = mouse.x + Math.cos(p.orbitAngle) * p.orbitRadius;
          const targetOrbitY = mouse.y + Math.sin(p.orbitAngle) * (p.orbitRadius * 0.65);

          const dx = targetOrbitX - p.x;
          const dy = targetOrbitY - p.y;
          const distToOrbit = Math.sqrt(dx * dx + dy * dy);

          if (distToOrbit > 1) {
            const pullFactor = Math.min(0.010, 0.04 / (1 + distToOrbit * 0.01)) * 0.5;
            p.x += dx * pullFactor;
            p.y += dy * pullFactor;
          }

          // Safety buffer from cursor center
          const directDx = mouse.x - p.x;
          const directDy = mouse.y - p.y;
          const directDist = Math.sqrt(directDx * directDx + directDy * directDy);
          if (directDist < 40) {
            const push = (40 - directDist) * 0.03;
            p.x -= (directDx / (directDist || 1)) * push;
            p.y -= (directDy / (directDist || 1)) * push;
          }
        }

        // Wrap around hero section boundaries smoothly
        if (p.y > height + 20) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -15;
        if (p.x < -20) p.x = width + 20;

        // ==========================================
        // DRAW DELICATE 4-POINT DIAMOND STAR SPARKLE
        // ==========================================
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const currentOpacity = Math.max(0, Math.min(1, p.opacity));

        // 1. Radiant Molten Gold Glow Halo
        const glowRadius = p.size * 2.2;
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        glowGradient.addColorStop(0, p.color);
        glowGradient.addColorStop(0.35, p.color);
        glowGradient.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = glowGradient;
        ctx.globalAlpha = currentOpacity * 0.8;
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Shiny 4-Point Diamond Star Facet
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.beginPath();
        const s = p.size * 1.25;
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.closePath();
        ctx.fill();

        // 3. Crisp Brilliant White Shimmer Flare Cross
        const flare = s * 1.25;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(-flare, 0);
        ctx.lineTo(flare, 0);
        ctx.moveTo(0, -flare);
        ctx.lineTo(0, flare);
        ctx.stroke();

        // 4. Central Brilliant White Diamond Core
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 1.0;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(0.6, p.size * 0.32), 0, Math.PI * 2);
        ctx.fill();

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
