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
  baseOpacity: number;
  pulseSpeed: number;
  highlight: number; // 0.0 (idle) to 1.0 (intensely highlighted)
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

    // Golden luxury & metallic sparkle palette
    const goldTones = [
      { base: "#F0B33E", highlight: "#FFF2C2" }, // Molten Amber
      { base: "#FFD700", highlight: "#FFFFFF" }, // Electric Gold
      { base: "#F7BE45", highlight: "#FFF9DB" }, // Lustrous Brass
      { base: "#FFDF73", highlight: "#FFFFFF" }, // Sunlight Shimmer
      { base: "#E09C22", highlight: "#FFEAA7" }, // Deep Metallic Gold
    ];

    // Smooth mouse coordinates relative to hero canvas
    const mouse = {
      x: width * 0.5,
      y: height * 0.45,
      targetX: width * 0.5,
      targetY: height * 0.45,
      isInside: false,
    };

    // Interactive limited distance boundary: only affect particles within 130px
    const LIMIT_DISTANCE = 130;

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
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

    // Micro-burst sparkles on click for creative interactivity
    const burstSparks: BurstSpark[] = [];
    const handleCanvasClick = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;

      for (let k = 0; k < 10; k++) {
        const angle = Math.random() * Math.PI * 2;
        const spd = Math.random() * 2.2 + 0.8;
        burstSparks.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * spd,
          vy: Math.sin(angle) * spd,
          size: Math.random() * 2.2 + 1.2,
          alpha: 1.0,
          life: 0,
          maxLife: Math.floor(Math.random() * 20 + 25),
          color: k % 2 === 0 ? "#FFD700" : "#FFF5D0",
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

    // Flake count: perfectly balanced density
    const flakeCount = Math.min(Math.floor(width / 44) + 14, 38);
    const flakes: Flake[] = [];

    // Distribute flakes across canvas initially
    for (let i = 0; i < flakeCount; i++) {
      const isStar = i % 3 === 0;
      const tone = goldTones[i % goldTones.length];
      const baseSize = isStar
        ? Math.random() * 1.1 + 1.8 // Diamond star: 1.8px to 2.9px
        : Math.random() * 1.3 + 2.0; // Metallic gold flake chip: 2.0px to 3.3px

      flakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseSize,
        size: baseSize,
        type: isStar ? "star" : "flake",
        // Calm gentle downward drift
        speedY: (Math.random() * 0.10 + 0.05) * 0.55,
        speedX: (Math.random() - 0.5) * 0.06 * 0.5,
        swayAngle: Math.random() * Math.PI * 2,
        swaySpeed: (Math.random() * 0.012 + 0.006) * 0.5,
        swayRadius: Math.random() * 0.35 + 0.15,
        // 3D rotation and tumbling
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.012 * 0.6,
        flipAngle: Math.random() * Math.PI * 2,
        flipSpeed: (Math.random() * 0.025 + 0.012) * 0.7,
        // Highlighting optics
        opacity: Math.random() * 0.35 + 0.45,
        baseOpacity: Math.random() * 0.3 + 0.45,
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
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // 1. Creative ambient light aura around cursor (illuminates the factory air)
      if (mouse.isInside) {
        const auraRadius = LIMIT_DISTANCE;
        const auraGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          auraRadius
        );
        auraGrad.addColorStop(0, "rgba(240, 179, 62, 0.14)");
        auraGrad.addColorStop(0.5, "rgba(240, 179, 62, 0.04)");
        auraGrad.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Particle-to-particle soft repulsion (guarantees NO clumping)
      for (let i = 0; i < flakes.length; i++) {
        for (let j = i + 1; j < flakes.length; j++) {
          const dx = flakes[j].x - flakes[i].x;
          const dy = flakes[j].y - flakes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minSeparation = 24;
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

      // 3. Highlighted Constellation Filaments:
      // When nearby flakes are both highlighted within LIMIT_DISTANCE, draw delicate golden light threads
      if (mouse.isInside) {
        ctx.lineWidth = 0.6;
        for (let i = 0; i < flakes.length; i++) {
          if (flakes[i].highlight < 0.25) continue;
          for (let j = i + 1; j < flakes.length; j++) {
            if (flakes[j].highlight < 0.25) continue;
            const dx = flakes[j].x - flakes[i].x;
            const dy = flakes[j].y - flakes[i].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 75) {
              const alpha =
                (1 - dist / 75) *
                Math.min(flakes[i].highlight, flakes[j].highlight) *
                0.35;
              ctx.strokeStyle = `rgba(255, 220, 120, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(flakes[i].x, flakes[i].y);
              ctx.lineTo(flakes[j].x, flakes[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // 4. Update and Draw Flakes
      for (let i = 0; i < flakes.length; i++) {
        const p = flakes[i];

        // Gravitational downward fall + gentle harmonic sway
        p.swayAngle += p.swaySpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.swayAngle) * p.swayRadius;
        p.rotation += p.rotSpeed;

        // Tumbling 3D angle
        p.flipAngle += p.flipSpeed;
        const glintFactor = Math.abs(Math.sin(p.flipAngle)); // 0 = edge on, 1 = face on

        // Twinkle pulse
        p.opacity += p.pulseSpeed;
        if (p.opacity > 0.85 || p.opacity < 0.35) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // ==============================================================
        // LIMIT DISTANCE MOUSE INTERACTION & INTENSE PROXIMITY HIGHLIGHT
        // ==============================================================
        let distFromMouse = 9999;
        if (mouse.isInside) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          distFromMouse = Math.sqrt(dx * dx + dy * dy);
        }

        // ONLY interact if within LIMIT_DISTANCE! Beyond that, ZERO mouse pull.
        if (mouse.isInside && distFromMouse < LIMIT_DISTANCE) {
          // Strong proximity highlight: closer = dramatic golden glow & specular glare!
          const proximityRatio = 1 - distFromMouse / LIMIT_DISTANCE;
          p.targetHighlight = Math.max(0, proximityRatio * 1.35);

          // Gentle creative orbital swirl strictly inside this limited radius
          const angle = Math.atan2(mouse.y - p.y, mouse.x - p.x);
          if (distFromMouse > 35) {
            const swirlStrength = 0.35 * (1 - distFromMouse / LIMIT_DISTANCE);
            p.x += -Math.sin(angle) * swirlStrength + Math.cos(angle) * 0.12;
            p.y += Math.cos(angle) * swirlStrength * 0.7 + Math.sin(angle) * 0.12;
          } else {
            // Buffer zone pushes gently outward so particles don't collapse on cursor
            const push = (35 - distFromMouse) * 0.04;
            p.x -= Math.cos(angle) * push;
            p.y -= Math.sin(angle) * push;
          }
        } else {
          // Beyond limit distance: no mouse pull; allow highlight to decay smoothly
          p.targetHighlight = 0;
        }

        // Autonomous Specular Flash: when tumbling face-on to light, flash naturally!
        if (glintFactor > 0.88) {
          const autonomousGlint = (glintFactor - 0.88) / 0.12;
          p.targetHighlight = Math.max(p.targetHighlight, autonomousGlint * 0.8);
        }

        // Smoothly interpolate highlight intensity
        p.highlight += (p.targetHighlight - p.highlight) * 0.12;

        // Wrap around boundaries
        if (p.y > height + 20) {
          p.y = -15;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -15;
        if (p.x < -20) p.x = width + 20;

        // ==============================================================
        // DRAW HIGHLIGHTED METALLIC FLAKES & DIAMOND STARS
        // ==============================================================
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const currentOpacity = Math.min(
          1.0,
          p.opacity + p.highlight * 0.55
        );
        const effectiveSize = p.baseSize * (1 + p.highlight * 0.35);

        // 1. Radiant Molten Gold Glow Halo (Dramatic bloom when highlighted!)
        const glowRadius = effectiveSize * (2.4 + p.highlight * 3.2);
        const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        glowGrad.addColorStop(
          0,
          p.highlight > 0.35 ? "#FFFFFF" : p.highlightColor
        );
        glowGrad.addColorStop(0.3, p.color);
        glowGrad.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = glowGrad;
        ctx.globalAlpha = Math.min(1.0, currentOpacity * (0.8 + p.highlight * 0.5));
        ctx.beginPath();
        ctx.arc(0, 0, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Render Distinct Flake or Star
        if (p.type === "flake") {
          // ========================================================
          // METALLIC GOLD FLAKE (3D Tumbling Polygonal Metal Leaf)
          // ========================================================
          const scaleX = Math.cos(p.flipAngle);
          ctx.scale(Math.max(0.12, Math.abs(scaleX)), 1);

          const r = effectiveSize * 1.1;
          ctx.beginPath();
          ctx.moveTo(0, -r * 1.3);
          ctx.lineTo(r * 0.9, -r * 0.3);
          ctx.lineTo(r * 0.7, r * 1.1);
          ctx.lineTo(-r * 0.65, r * 0.85);
          ctx.lineTo(-r * 0.95, -r * 0.35);
          ctx.closePath();

          // Luminous Metallic 2-Tone Gradient
          const flakeGrad = ctx.createLinearGradient(-r, -r, r, r);
          if (p.highlight > 0.25 || glintFactor > 0.85) {
            flakeGrad.addColorStop(0, "#FFFFFF"); // Blazing specular edge!
            flakeGrad.addColorStop(0.35, "#FFF0A8");
            flakeGrad.addColorStop(0.75, "#F0B33E");
            flakeGrad.addColorStop(1, "#D48B14");
          } else {
            flakeGrad.addColorStop(0, "#FFE994");
            flakeGrad.addColorStop(0.5, "#F0B33E");
            flakeGrad.addColorStop(1, "#B87610");
          }

          ctx.fillStyle = flakeGrad;
          ctx.globalAlpha = currentOpacity;
          ctx.fill();

          // Specular Glint Highlight Streak across the metal facet
          if (p.highlight > 0.2 || glintFactor > 0.82) {
            ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(-r * 0.7, -r * 0.2);
            ctx.lineTo(r * 0.7, r * 0.2);
            ctx.stroke();

            // Highlight spike beacon
            const flare = r * (1.1 + p.highlight * 1.4);
            ctx.strokeStyle = "rgba(255, 248, 220, 0.9)";
            ctx.beginPath();
            ctx.moveTo(0, -flare);
            ctx.lineTo(0, flare);
            ctx.stroke();
          }
        } else {
          // ========================================================
          // DIAMOND STAR SPARKLE (Crisp 4-Point Starlight Flare)
          // ========================================================
          const s = effectiveSize * 1.25;
          ctx.fillStyle = p.highlight > 0.3 ? "#FFF8D6" : p.color;
          ctx.globalAlpha = currentOpacity;

          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.closePath();
          ctx.fill();

          // Brilliant White Highlighting Cross Flare
          const flare = s * (1.3 + p.highlight * 1.2);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.95)";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(-flare, 0);
          ctx.lineTo(flare, 0);
          ctx.moveTo(0, -flare);
          ctx.lineTo(0, flare);
          ctx.stroke();

          // Secondary 45° micro-flare when intensely highlighted
          if (p.highlight > 0.4) {
            const miniFlare = flare * 0.5;
            ctx.strokeStyle = "rgba(255, 235, 160, 0.8)";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(-miniFlare, -miniFlare);
            ctx.lineTo(miniFlare, miniFlare);
            ctx.moveTo(-miniFlare, miniFlare);
            ctx.lineTo(miniFlare, -miniFlare);
            ctx.stroke();
          }

          // Central Diamond Reflection Core
          ctx.fillStyle = "#FFFFFF";
          ctx.globalAlpha = 1.0;
          ctx.beginPath();
          ctx.arc(
            0,
            0,
            Math.max(0.6, effectiveSize * (0.35 + p.highlight * 0.15)),
            0,
            Math.PI * 2
          );
          ctx.fill();
        }

        ctx.restore();
      }

      // 5. Draw Interactive Click Burst Sparks
      for (let k = burstSparks.length - 1; k >= 0; k--) {
        const b = burstSparks[k];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.94;
        b.vy *= 0.94;
        b.life++;
        b.alpha = 1 - b.life / b.maxLife;

        ctx.save();
        ctx.fillStyle = b.color;
        ctx.globalAlpha = b.alpha;
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
