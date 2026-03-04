import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxStars: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Different speeds for different layers of stars
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const [stars, setStars] = useState<
    { id: number; top: string; left: string; size: number; opacity: number }[]
  >([]);

  useEffect(() => {
    // Generate static stars once on mount so they don't jump around on re-renders
    const newStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1, // 1px to 3px
      opacity: Math.random() * 0.8 + 0.2, // 0.2 to 1.0
    }));
    setStars(newStars);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
    >
      {/* Background layer (slowest) */}
      <motion.div className="absolute inset-0" style={{ y: yBackground }}>
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
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Midground layer (medium speed) */}
      <motion.div className="absolute inset-0" style={{ y: yMidground }}>
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
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </motion.div>

      {/* Foreground layer (fastest) */}
      <motion.div className="absolute inset-0" style={{ y: yForeground }}>
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
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxStars;
