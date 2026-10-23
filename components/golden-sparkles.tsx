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
      "#FFF3B0", // Radiant Sunlight Diamond Gold
      "#FFDE6A", // Glistening Warm Gold
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

    // Particle count: well-distributed, prominent and elegant
    const particleCount = Math.min(Math.floor(width / 42) + 14, 38);
    const particles: Particle[] = [];

    // Distribute particles across canvas initially
    for (let i = 0; i < particleCount; i++) {
      const isHeroStar = i % 4 === 0;
      // Prominently larger size: 5.5px to 13.0px, hero stars up to 16.5px
      const baseSize = isHeroStar
        ? Math.random() * 4.5 + 12.0
        : Math.random() * 4.0 + 6.0;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize,
        size: baseSize,
        // Reduced speed by 0.6x: gentle, serene, calm drift
        speedY: (Math.random() * 0.12 + 0.05) * 0.6,
        speedX: (Math.random() - 0.5) * 0.08 * 0.6,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.012 + 0.006) * 0.6,
        swayRadius: Math.random() * 0.4 + 0.2,
        opacity: Math.random() * 0.4 + 0.55,
        minOpacity: Math.random() * 0.25 + 0.35,
        maxOpacity: Math.random() * 0.15 + 0.85,
        pulseSpeed: (Math.random() * 0.014 + 0.006) * 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.012 * 0.6,
        isHeroStar,
        // Assigned individual orbital shells so particles never clump into a single point
        orbitRadius: 75 + (i % 7) * 24 + Math.random() * 15,
        orbitAngle: (i / particleCount) * Math.PI * 2,
        orbitSpeed: ((i % 2 === 0 ? 1 : -1) * (Math.random() * 0.008 + 0.004)) * 0.6,
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

      // Smooth mouse interpolation (gentle glide)
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // 1. Particle-to-particle soft repulsion (guarantees NO vertical line or clumping)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSeparation = 36;
          if (dist < minSeparation && dist > 0.01) {
            const overlap = (minSeparation - dist) * 0.025;
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

        // 0.6x Speed Gravitational downward fall + harmonic sway
        p.swayAngle += p.swaySpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.swayAngle) * p.swayRadius;
        p.rotation += p.rotSpeed;

        // Pulsing twinkle opacity & size breathing
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < p.minOpacity) {
          p.pulseSpeed = -p.pulseSpeed;
        }
        // Subtle breathing size
        p.size = p.baseSize * (0.92 + 0.16 * Math.sin(p.swayAngle * 1.5));

        // Intelligent mouse follow: orbits in soft dispersed constellation (NO stacking)
        if (mouse.isInside) {
          p.orbitAngle += p.orbitSpeed;
          const targetOrbitX = mouse.x + Math.cos(p.orbitAngle) * p.orbitRadius;
          const targetOrbitY = mouse.y + Math.sin(p.orbitAngle) * (p.orbitRadius * 0.65);

          const dx = targetOrbitX - p.x;
          const dy = targetOrbitY - p.y;
          const distToOrbit = Math.sqrt(dx * dx + dy * dy);

          if (distToOrbit > 1) {
            // Very gentle 0.6x scaled attraction toward its own orbit shell
            const pullFactor = Math.min(0.012, 0.06 / (1 + distToOrbit * 0.01)) * 0.6;
            p.x += dx * pullFactor;
            p.y += dy * pullFactor;
          }

          // Safety buffer: keep particle away from exact mouse center
          const directDx = mouse.x - p.x;
          const directDy = mouse.y - p.y;
          const directDist = Math.sqrt(directDx * directDx + directDy * directDy);
          if (directDist < 45) {
            const push = (45 - directDist) * 0.04;
            p.x -= (directDx / (directDist || 1)) * push;
            p.y -= (directDy / (directDist || 1)) * push;
          }
        }

        // Wrap around hero section boundaries smoothly
        if (p.y > height + 35) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 35) p.x = -25;
        if (p.x < -35) p.x = width + 35;

        // ==========================================
        // DRAW GLISTENING 4-POINT DIAMOND STAR
        // ==========================================
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const currentOpacity = Math.max(0, Math.min(1, p.opacity));

        // 1. Radiant Molten Gold Glow Halo
        const glowRadius = p.size * 3.4;
        const glowGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        glowGradient.addColorStop(0, p.color);
        glowGradient.addColorStop(0.3, p.color);
        glowGradient.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = glowGradient;
        ctx.globalAlpha = currentOpacity * 0.85;
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Shiny 4-Point Diamond Star Facet (Concave Curves)
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        ctx.beginPath();
        const s = p.size * 1.8;
        ctx.moveTo(0, -s);
        ctx.quadraticCurveTo(0, 0, s, 0);
        ctx.quadraticCurveTo(0, 0, 0, s);
        ctx.quadraticCurveTo(0, 0, -s, 0);
        ctx.quadraticCurveTo(0, 0, 0, -s);
        ctx.closePath();
        ctx.fill();

        // 3. Crisp Brilliant White Shimmer Flare Cross
        const flare = s * 1.5;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
        ctx.lineWidth = p.isHeroStar ? 1.6 : 1.1;
        ctx.beginPath();
        ctx.moveTo(-flare, 0);
        ctx.lineTo(flare, 0);
        ctx.moveTo(0, -flare);
        ctx.lineTo(0, flare);
        ctx.stroke();

        // 4. Secondary 45-degree micro-flares for hero stars
        if (p.isHeroStar) {
          const miniFlare = flare * 0.42;
          ctx.strokeStyle = "rgba(255, 235, 175, 0.75)";
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(-miniFlare, -miniFlare);
          ctx.lineTo(miniFlare, miniFlare);
          ctx.moveTo(-miniFlare, miniFlare);
          ctx.lineTo(miniFlare, -miniFlare);
          ctx.stroke();
        }

        // 5. Central Brilliant White Diamond Core (Glistening Diamond Reflection)
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 1.0;
        ctx.beginPath();
        ctx.arc(0, 0, Math.max(1.2, p.size * 0.4), 0, Math.PI * 2);
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
