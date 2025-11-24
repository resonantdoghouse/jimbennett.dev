import React from 'react';
import { useSound } from '../../contexts/SoundContext';

const Stats: React.FC = () => {
  const { playSound } = useSound();

  const StatItem = ({ num, label }: { num: string, label: string }) => (
    <div 
      className="text-center group hover-trigger" 
      onMouseEnter={() => playSound('blip')}
    >
      <span className="font-pixel text-xl md:text-2xl text-accent mb-2 block group-hover:scale-110 transition-transform">{num}</span>
      <span className="text-sm md:text-base font-mono text-text-muted uppercase tracking-wider">{label}</span>
    </div>
  );

  return (
    <div className="bg-card border-t-4 border-b-4 border-accent py-10 -mt-12 relative z-20 shadow-lg">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          <StatItem num="10+" label="Years Experience" />
          <StatItem num="50+" label="Projects Delivered" />
          <StatItem num="100%" label="Commitment" />
        </div>
      </div>
    </div>
  );
};

export default Stats;