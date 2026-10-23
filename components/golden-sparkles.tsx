"use client";

import React, { useEffect, useRef } from "react";

interface Flake {
  x: number;
  y: number;
  baseSize: number;
  size: number;
  type: "flake" | "star";
  // Physics
  speedY: number;
  speedX: number;
  swayAngle: number;
  swaySpeed: number;
  swayRadius: number;
  // 3D Rotation & Tumbling
  rotation: number;
  rotSpeed: number;
  flipAngle: number;
  flipSpeed: number;
  // Optics & Highlighting
  opacity: number;
  pulseSpeed: number;
  highlight: number;
  targetHighlight: number;
  color: string;
  highlightColor: string;
}

interface BurstSpark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  maxLife: number;
  life: number;
  color: string;
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

    // Harmonized strictly with the hero font gold palette (#F0B33E & #FFD875)
    const fontMatchedGoldTones = [
      { base: "#F0B33E", highlight: "#FFF4D4" }, // Brand Molten Gold (matches font accent)
      { base: "#FFD875", highlight: "#FFFFFF" }, // Bright Headline Gold Highlight
      { base: "#E5A328", highlight: "#FFEAA7" }, // Rich Amber Shadow Gold
      { base: "#F5C358", highlight: "#FFF8E0" }, // Radiant Starlight Gold
    ];

    // Smooth mouse coordinates relative to hero canvas
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
      isInside: false,
    };

    // 1 to 2 feet screen attraction field (approx 520px radius)
    const ATTRACTION_RADIUS = 520;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left - 80 &&
        clientX <= rect.right + 80 &&
        clientY >= rect.top - 80 &&
        clientY <= rect.bottom + 80
      ) {
        mouse.targetX = clientX - rect.left;
        mouse.targetY = clientY - rect.top;
        mouse.isInside = true;
      } else {
        mouse.isInside = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.isInside = false;
    };

    // Micro-burst sparkles on click
    const burstSparks: BurstSpark[] = [];
    const handleCanvasClick = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (let k = 0; k < 8; k++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 1.8 + 0.6;
        burstSparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          size: Math.random() * 1.2 + 0.6,
          alpha: 1.0,
          life: 0,
          maxLife: Math.floor(Math.random() * 16 + 20),
          color: k % 2 === 0 ? "#FFD875" : "#FFF8D6",
        });
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
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleCanvasClick);
    window.addEventListener("resize", handleResize);

    // Tasteful density of delicate micro-flakes
    const flakeCount = Math.min(Math.floor(width / 42) + 16, 44);
    const flakes: Flake[] = [];

    // Distribute flakes across canvas initially
    for (let i = 0; i < flakeCount; i++) {
      const isStar = i % 3 === 0;
      const tone = fontMatchedGoldTones[i % fontMatchedGoldTones.length];
      
      // Significantly smaller: 0.75px to 1.65px (delicate airborne gold dust)
      const baseSize = isStar
        ? Math.random() * 0.7 + 1.1 // Star: 1.1px to 1.8px
        : Math.random() * 0.9 + 0.75; // Flake: 0.75px to 1.65px

      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize,
        size: baseSize,
        type: isStar ? "star" : "flake",
        // Serene downward drift
        speedY: (Math.random() * 0.08 + 0.04) * 0.55,
        speedX: (Math.random() - 0.5) * 0.05 * 0.5,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.012 + 0.006) * 0.5,
        swayRadius: Math.random() * 0.3 + 0.12,
        // 3D rotation and tumbling
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.012 * 0.6,
        flipAngle: Math.random() * Math.PI * 2,
        flipSpeed: (Math.random() * 0.028 + 0.014) * 0.7,
        // Optics: subtle base opacity so it complements font without obscuring
        opacity: Math.random() * 0.35 + 0.45,
        pulseSpeed: (Math.random() * 0.014 + 0.007) * 0.5,
        highlight: 0,
        targetHighlight: 0,
        color: tone.base,
        highlightColor: tone.highlight,
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

      // Smooth mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Subtle, ethereal warm light field extending 1 to 2 feet around cursor
      if (mouse.isInside) {
        const auraRadius = Math.min(ATTRACTION_RADIUS * 0.45, 240);
        const auraGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          auraRadius
        );
        auraGrad.addColorStop(0, "rgba(240, 179, 62, 0.08)");
        auraGrad.addColorStop(0.5, "rgba(240, 179, 62, 0.025)");
        auraGrad.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Soft mutual repulsion (prevents particles from bunching into clumps)
      for (let i = 0; i < flakes.length; i++) {
        for (let j = i + 1; j < flakes.length; j++) {
          const dx = flakes[j].x - flakes[i].x;
          const dy = flakes[j].y - flakes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSeparation = 18;
          if (dist < minSeparation && dist > 0.01) {
            const overlap = (minSeparation - dist) * 0.02;
            const nx = dx / dist;
            const ny = dy / dist;
            flakes[i].x -= nx * overlap;
            flakes[i].y -= ny * overlap;
            flakes[j].x += nx * overlap;
            flakes[j].y += ny * overlap;
          }
        }
      }

      // 3. Update and Draw Flakes
      for (let i = 0; i < flakes.length; i++) {
        const p = flakes[i];

        // Gravitational downward fall + gentle harmonic sway
        p.swayAngle += p.swaySpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.swayAngle) * p.swayRadius;
        p.rotation += p.rotSpeed;

        // 3D Tumbling
        p.flipAngle += p.flipSpeed;
        const glintFactor = Math.abs(Math.sin(p.flipAngle));

        // Breathing pulse
        p.opacity += p.pulseSpeed;
        if (p.opacity > 0.85 || p.opacity < 0.35) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // ==============================================================
        // 1 TO 2 FEET ATTRACTION FIELD (520px Radius)
        // ==============================================================
        let distFromMouse = 9999;
        if (mouse.isInside) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          distFromMouse = Math.sqrt(dx * dx + dy * dy);
        }

        if (mouse.isInside && distFromMouse < ATTRACTION_RADIUS) {
          // Smooth non-linear attraction over 1 to 2 feet
          const influence = Math.pow(1 - distFromMouse / ATTRACTION_RADIUS, 1.4);
          const angle = Math.atan2(mouse.y - p.y, mouse.x - p.x);

          // Gentle pull toward cursor
          const pullSpeed = influence * 0.42;
          p.x += Math.cos(angle) * pullSpeed;
          p.y += Math.sin(angle) * pullSpeed * 0.75;

          // Soft organic orbital swirl as particle gets within 200px
          if (distFromMouse < 200) {
            const swirl = (1 - distFromMouse / 200) * 0.30;
            p.x += -Math.sin(angle) * swirl;
            p.y += Math.cos(angle) * swirl * 0.6;
          }

          // Buffer cushion: keeps particles from collapsing onto the mouse point
          if (distFromMouse < 48) {
            const push = (48 - distFromMouse) * 0.04;
            p.x -= Math.cos(angle) * push;
            p.y -= Math.sin(angle) * push;
          }

          // Progressive highlight: flakes glow and sparkle brighter as they approach
          const proximityHighlight = Math.pow(1 - distFromMouse / ATTRACTION_RADIUS, 1.8) * 1.3;
          p.targetHighlight = Math.max(0, proximityHighlight);
        } else {
          p.targetHighlight = 0;
        }

        // Autonomous Specular Flash when tumbling face-on to light
        if (glintFactor > 0.88) {
          const autonomousGlint = (glintFactor - 0.88) / 0.12;
          p.targetHighlight = Math.max(p.targetHighlight, autonomousGlint * 0.75);
        }

        // Smoothly interpolate highlight intensity
        p.highlight += (p.targetHighlight - p.highlight) * 0.10;

        // Wrap around boundaries
        if (p.y > height + 15) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 15) p.x = -10;
        if (p.x < -15) p.x = width + 15;

        // ==============================================================
        // DRAW DELICATE MICRO-FLAKES & STARS (HARMONIZED WITH FONT)
        // ==============================================================
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const currentOpacity = Math.min(
          0.95,
          p.opacity + p.highlight * 0.4
        );
        const effectiveSize = p.baseSize * (1 + p.highlight * 0.25);

        // 1. Soft Golden Radial Aura (delicate, never overpowering text)
        const glowRadius = effectiveSize * (1.8 + p.highlight * 2.2);
        const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        glowGrad.addColorStop(
          0,
          p.highlight > 0.35 ? "#FFFDF5" : p.highlightColor
        );
        glowGrad.addColorStop(0.35, p.color);
        glowGrad.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = glowGrad;
        ctx.globalAlpha = Math.min(0.9, currentOpacity * (0.75 + p.highlight * 0.35));
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Render Micro-Flake or Micro-Star
        if (p.type === "flake") {
          // ========================================================
          // MICRO METALLIC GOLD FLAKE (3D Tumbling Gold Leaf Chip)
          // ========================================================
          const scaleX = Math.cos(p.flipAngle);
          ctx.scale(Math.max(0.18, Math.abs(scaleX)), 1);

          const r = effectiveSize * 0.95;
          ctx.beginPath();
          ctx.moveTo(0, -r * 1.25);
          ctx.lineTo(r * 0.85, -r * 0.25);
          ctx.lineTo(r * 0.65, r * 1.05);
          ctx.lineTo(-r * 0.6, r * 0.8);
          ctx.lineTo(-r * 0.9, -r * 0.3);
          ctx.closePath();

          // Metallic Gradient harmonized with font gold (#F0B33E & #FFD875)
          const flakeGrad = ctx.createLinearGradient(-r, -r, r, r);
          if (p.highlight > 0.25 || glintFactor > 0.85) {
            flakeGrad.addColorStop(0, "#FFFFFF"); // Specular glint
            flakeGrad.addColorStop(0.4, "#FFD875");
            flakeGrad.addColorStop(0.85, "#F0B33E");
            flakeGrad.addColorStop(1, "#C98B19");
          } else {
            flakeGrad.addColorStop(0, "#FFF0B8");
            flakeGrad.addColorStop(0.5, "#F0B33E");
            flakeGrad.addColorStop(1, "#C98B19");
          }

          ctx.fillStyle = flakeGrad;
          ctx.globalAlpha = currentOpacity;
          ctx.fill();

          // Delicate specular gleam
          if (p.highlight > 0.25 || glintFactor > 0.85) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(-r * 0.6, -r * 0.15);
            ctx.lineTo(r * 0.6, r * 0.15);
            ctx.stroke();
          }
        } else {
          // ========================================================
          // MICRO DIAMOND STAR SPARKLE (4-Point Starlight Flare)
          // ========================================================
          const s = effectiveSize * 1.05;
          ctx.fillStyle = p.highlight > 0.3 ? "#FFF8E0" : p.color;
          ctx.globalAlpha = currentOpacity;

          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.closePath();
          ctx.fill();

          // Fine Needle Shimmer Cross Flare
          const flare = s * (1.1 + p.highlight * 0.9);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(-flare, 0);
          ctx.lineTo(flare, 0);
          ctx.moveTo(0, -flare);
          ctx.lineTo(0, flare);
          ctx.stroke();

          // Pinpoint Diamond Core
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = 1.0;
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(0.45, effectiveSize * 0.3), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // 4. Draw Click Burst Sparks
      for (let k = burstSparks.length - 1; k >= 0; k--) {
        const b = burstSparks[k];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.92;
        b.vy *= 0.92;
        b.life++;
        b.alpha = 1 - b.life / b.maxLife;

        ctx.save();
        ctx.fillStyle = b.color;
        ctx.globalAlpha = b.alpha * 0.85;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size * (1 - b.life / b.maxLife), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (b.life >= b.maxLife) {
          burstSparks.splice(k, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleCanvasClick);
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
