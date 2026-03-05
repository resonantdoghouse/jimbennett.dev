import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxStars: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Different speeds for different layers of stars
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const [stars] = useState<
    {
      id: number;
      top: string;
      left: string;
      size: number;
      opacity: number;
      duration: number;
    }[]
  >(() =>
    // Generate static stars once on mount so they don't jump around on re-renders
    Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px to 3px
      opacity: Math.random() * 0.8 + 0.2, // 0.2 to 1.0
      duration: Math.random() * 3 + 2,
    })),
  );

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Background layer (slowest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yBackground, willChange: "transform" }}
      >
        {stars.slice(0, 50).map((star) => (
          <div
            key={`bg-${star.id}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size * 0.5}px`,
              height: `${star.size * 0.5}px`,
              opacity: star.opacity * 0.5,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Midground layer (medium speed) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yMidground, willChange: "transform" }}
      >
        {stars.slice(50, 110).map((star) => (
          <div
            key={`md-${star.id}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size * 0.8}px`,
              height: `${star.size * 0.8}px`,
              opacity: star.opacity * 0.8,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Foreground layer (fastest) */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yForeground, willChange: "transform" }}
      >
        {stars.slice(110, 150).map((star) => (
          <div
            key={`fg-${star.id}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxStars;
