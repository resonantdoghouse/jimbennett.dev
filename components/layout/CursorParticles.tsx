import React, { useEffect, useRef, useMemo } from "react";
import { useTheme } from "../../hooks/useTheme";

interface Particle {
  x: number;
  y: number;
  size: number;
  life: number;
  color: string;
  vx: number;
  vy: number;
}

const CursorParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  // Theme colors for "evolution" effect
  const colors = useMemo(
    () =>
      theme === "light"
        ? ["99, 102, 241", "59, 130, 246"] // Indigo, Blue
        : ["129, 140, 248", "96, 165, 250"],
    [theme],
  ); // Lighter variants

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Create new particles
      if (speed > 0.1) {
        const count = Math.min(Math.floor(speed / 3), 4);
        for (let i = 0; i < count; i++) {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          particles.current.push({
            x: mouse.current.x + (Math.random() - 0.5) * 5,
            y: mouse.current.y + (Math.random() - 0.5) * 5,
            size: Math.random() * 3 + 2, // Start larger (2-5px)
            life: 1.0,
            color: randomColor,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
          });
        }
      }

      // Update and draw
      particles.current.forEach((p, index) => {
        p.life -= 0.015; // Slowed down fade rate
        p.x += p.vx;
        p.y += p.vy;

        if (p.life <= 0) {
          particles.current.splice(index, 1);
        } else {
          ctx.beginPath();
          // Size decays with life: Start Size * Life %
          const currentSize = p.size * p.life;
          ctx.arc(p.x, p.y, Math.max(0, currentSize), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${p.life})`;
          ctx.fill();
        }
      });

      lastMouse.current = { ...mouse.current };
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default CursorParticles;
