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
  colorIndex: number;
  rotation: number;
  rotSpeed: number;
}

export function GoldenSparkles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Accessibility & Performance Guard: Respect prefers-reduced-motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    // 2. Mobile Battery Guard: Do not run heavy canvas animation loops on small mobile screens
    if (window.innerWidth < 768) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isVisible = true;

    // Golden Palette
    const colors = ["#F0B33E", "#FFD875", "#FFEEC2", "#D99B26", "#F5C869"];

    // 3. Pre-render particle glow sprites once into offscreen canvases
    // Eliminates thousands of createRadialGradient calls per second
    const spriteSize = 32;
    const sprites: HTMLCanvasElement[] = colors.map((color) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = spriteSize;
      offscreen.height = spriteSize;
      const offCtx = offscreen.getContext("2d");
      if (offCtx) {
        const rad = spriteSize / 2;
        const grad = offCtx.createRadialGradient(rad, rad, 0, rad, rad, rad);
        grad.addColorStop(0, color);
        grad.addColorStop(0.35, color);
        grad.addColorStop(1, "rgba(240, 179, 62, 0)");
        offCtx.fillStyle = grad;
        offCtx.beginPath();
        offCtx.arc(rad, rad, rad, 0, Math.PI * 2);
        offCtx.fill();
      }
      return offscreen;
    });

    // Mouse coordinates with smoothing
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    let mouseMoving = false;
    let mouseTimeout: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouseMoving = true;
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouseMoving = false;
      }, 1200);
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // 4. Pause animation when tab is inactive or page is scrolled down
    const handleVisibility = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    let isScrolledPast = false;
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 1.2;
      if (scrolled !== isScrolledPast) {
        isScrolledPast = scrolled;
        if (isScrolledPast) {
          cancelAnimationFrame(animationFrameId);
        } else if (isVisible) {
          lastTime = performance.now();
          animationFrameId = requestAnimationFrame(render);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    // 5. Lightweight particle count: 20 high-fidelity sparkles on desktop
    const particleCount = 20;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 0.22 + 0.08,
        speedX: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.6 + 0.2,
        maxOpacity: Math.random() * 0.4 + 0.5,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        colorIndex: Math.floor(Math.random() * colors.length),
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    let lastTime = performance.now();

    // 6. Main 60fps render loop with zero GC allocations
    const render = (currentTime: number) => {
      if (!isVisible || isScrolledPast) return;

      const delta = Math.min((currentTime - lastTime) / 16.67, 2);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouseMoving) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05 * delta;
        mouse.y += (mouse.targetY - mouse.y) * 0.05 * delta;
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.y += p.speedY * delta;
        p.x += p.speedX * delta;
        p.rotation += p.rotSpeed * delta;

        p.opacity += p.pulseSpeed * delta;
        if (p.opacity > p.maxOpacity || p.opacity < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Gentle cursor interaction
        if (mouseMoving) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 40000) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / 200) * 0.02 * delta;
            p.x += dx * force;
            p.y += dy * force * 0.4;
          }
        }

        // Boundary wrap
        if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 10) p.x = -10;
        if (p.x < -10) p.x = width + 10;

        // Draw cached sprite
        const sprite = sprites[p.colorIndex];
        const drawSize = p.size * 6;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.drawImage(
          sprite,
          p.x - drawSize / 2,
          p.y - drawSize / 2,
          drawSize,
          drawSize
        );

        // Core bright center for larger sparkles
        if (p.size > 2) {
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full select-none hidden md:block"
    />
  );
}
