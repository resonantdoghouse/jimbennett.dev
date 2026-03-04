import React from "react";
import { motion } from "framer-motion";
import { useSound } from "../../hooks/useSound";

interface StatItemProps {
  num: string;
  label: string;
  delay: number;
  onHover: () => void;
}

const StatItem: React.FC<StatItemProps> = ({ num, label, delay, onHover }) => (
  <motion.div
    className="text-center group hover-trigger"
    onMouseEnter={onHover}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay }}
  >
    <span className="font-pixel text-xl md:text-2xl text-accent mb-2 block group-hover:scale-110 transition-transform">
      {num}
    </span>
    <span className="text-sm md:text-base font-mono text-text-muted uppercase tracking-wider">
      {label}
    </span>
  </motion.div>
);

const Stats: React.FC = () => {
  const { playSound } = useSound();

  return (
    <div className="bg-card border-t-4 border-b-4 border-accent py-10 -mt-12 relative z-20 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          <StatItem
            num="17+"
            label="Years Experience"
            delay={0.1}
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="Team Lead"
            label="& Mentor"
            delay={0.2}
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="Full Stack"
            label="React • Node • SQL"
            delay={0.3}
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="DevOps"
            label="Cloud Deployments"
            delay={0.4}
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="1,000+"
            label="Students Taught"
            delay={0.5}
            onHover={() => playSound("blip")}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
