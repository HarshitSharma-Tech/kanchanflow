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
  char?: string;
  rotation: number;
  rotSpeed: number;
}

export function GoldenSparkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with smoothing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
    };

    let mouseTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;

      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 1500);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // Color palette for golden sparkles
    const colors = [
      "#F0B33E", // Molten Gold
      "#FFD875", // Bright Gold highlight
      "#FFEEC2", // Warm White sparkle
      "#D99B26", // Deep Amber Gold
      "#F5C869", // Luminous Gold
    ];

    // Particle count: optimal for performance and elegance
    const particleCount = Math.min(Math.floor(width / 24), 55);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 0.28 + 0.12, // Very very slow falling
        speedX: (Math.random() - 0.5) * 0.2, // Subtle horizontal sway
        opacity: Math.random() * 0.7 + 0.2,
        maxOpacity: Math.random() * 0.5 + 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Main render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gravitational fall: very slow
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotSpeed;

        // Subtle pulsing opacity (twinkle effect)
        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Gentle attraction & wake towards cursor position
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 220) {
          const force = (1 - dist / 220) * 0.025;
          p.x += dx * force;
          p.y += dy * force * 0.5;
        }

        // Wrap around boundaries
        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        // Draw golden sparkle with soft glow
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Core soft radial glow
        const glowRadius = p.size * 3.5;
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(0.35, p.color);
        gradient.addColorStop(1, "rgba(240, 179, 62, 0)");

        ctx.fillStyle = gradient;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));

        // Draw 4-point diamond star sparkle for larger particles, soft circle for smaller ones
        if (p.size > 1.8) {
          ctx.beginPath();
          const s = p.size * 2.2;
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.closePath();
          ctx.fill();

          // Central bright core
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.45, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full select-none"
    />
  );
}
