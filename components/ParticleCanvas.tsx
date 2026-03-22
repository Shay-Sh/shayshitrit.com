"use client";

import { useEffect, useRef, useState } from "react";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w: number, h: number;
    let raf: number;
    const mouse = { x: null as number | null, y: null as number | null };
    const COUNT = 60;
    const CONNECT_DIST = 140;
    const SPEED = 0.2;

    interface Particle { x: number; y: number; vx: number; vy: number; r: number }
    let particles: Particle[] = [];

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      w = canvas!.width = parent.offsetWidth;
      h = canvas!.height = parent.offsetHeight;
    }

    function init() {
      resize();
      particles = [];
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
          r: Math.random() * 1.4 + 0.4,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(0,102,255,${0.06 * (1 - d / CONNECT_DIST)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      if (mouse.x !== null) {
        for (const p of particles) {
          const dx = mouse.x! - p.x;
          const dy = mouse.y! - p.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx!.beginPath();
            ctx!.moveTo(mouse.x!, mouse.y!);
            ctx!.lineTo(p.x, p.y);
            ctx!.strokeStyle = `rgba(0,180,216,${0.08 * (1 - d / 160)})`;
            ctx!.lineWidth = 0.4;
            ctx!.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(0,102,255,0.3)";
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    const parent = canvas.parentElement;
    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = null; mouse.y = null; };
    const onResize = () => { cancelAnimationFrame(raf); init(); draw(); };

    parent?.addEventListener("mousemove", onMove);
    parent?.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    init();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      parent?.removeEventListener("mousemove", onMove);
      parent?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  if (isMobile) return null;

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
