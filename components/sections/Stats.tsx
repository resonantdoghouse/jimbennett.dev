import React from "react";
import { useSound } from "../../hooks/useSound";

interface StatItemProps {
  num: string;
  label: string;
  onHover: () => void;
}

const StatItem: React.FC<StatItemProps> = ({ num, label, onHover }) => (
  <div className="text-center group hover-trigger" onMouseEnter={onHover}>
    <span className="font-pixel text-xl md:text-2xl text-accent mb-2 block group-hover:scale-110 transition-transform">
      {num}
    </span>
    <span className="text-sm md:text-base font-mono text-text-muted uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const Stats: React.FC = () => {
  const { playSound } = useSound();

  return (
    <div className="bg-card border-t-4 border-b-4 border-accent py-10 -mt-12 relative z-20 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          <StatItem
            num="17+"
            label="Years Experience"
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="Expert"
            label="Debugging"
            onHover={() => playSound("blip")}
          />
          <StatItem
            num="Active"
            label="Mentoring"
            onHover={() => playSound("blip")}
          />
           <StatItem
            num="Always"
            label="Lifelong Learner"
            onHover={() => playSound("blip")}
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
