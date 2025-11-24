import React from 'react';
import { useSound } from '../../contexts/SoundContext';

const Levels: React.FC = () => {
  const { playSound } = useSound();

  const ProjectCard = ({ title, desc, tech, color, link }: { title: string, desc: string, tech: string[], color?: string, link?: string }) => (
    <article 
      className="bg-card border border-border group transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--text-muted)] flex flex-col h-full"
      onMouseEnter={() => playSound('hover')}
    >
      <div className="h-40 bg-[#2a2a2a] relative flex items-center justify-center overflow-hidden shrink-0 border-b border-border">
        {/* Pixel Art Placeholder */}
        <div 
          className="w-20 h-14 bg-accent shadow-[4px_4px_0_var(--accent-secondary)]"
          style={{ background: color ? `var(--${color})` : undefined }} 
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>
      
      <div className="p-6 flex flex-col grow">
        <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-text-muted mb-6 text-sm leading-relaxed grow">{desc}</p>
        
        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map(t => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-wider bg-background px-2 py-1 border border-border text-text-muted">
              {t}
            </span>
          ))}
        </div>
        
        <a href={link || "#"} className="font-bold font-mono text-sm text-accent hover:text-accent-secondary hover:underline cursor-none inline-flex items-center gap-2 mt-auto">
          <span>VIEW SOURCE</span>
          <span>{'>'}</span>
        </a>
      </div>
    </article>
  );

  return (
    <section id="levels" className="py-24 relative bg-background/50">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h2 className="text-4xl font-extrabold mb-4 flex items-center gap-4 pixel-underline">
                Portfolio
                </h2>
                <p className="text-text-muted max-w-xl">
                    Selected works demonstrating proficiency in backend architecture, creative coding, and advanced interface design.
                </p>
            </div>
            <a href="https://github.com/resonantdoghouse" className="text-accent hover:text-accent-secondary font-mono text-sm underline cursor-none">
                View GitHub Profile
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="REST API Gateway"
            desc="Scalable backend service handling authentication, complex data aggregation, and third-party integrations."
            tech={['Node.js', 'Express', 'TypeScript', 'SQL']}
            link="#"
          />
          <ProjectCard 
            title="Interactive Design System"
            desc="A component library featuring complex CSS animations, accessible interactions, and custom React hooks for fluid motion."
            tech={['React', 'SCSS', 'Animations', 'TypeScript']}
            color="accent-secondary"
            link="#"
          />
           <ProjectCard 
            title="Legacy PHP Migration"
            desc="Refactoring a monolithic PHP application into a modular architecture with modern SCSS styling and ES6+ JavaScript modules."
            tech={['PHP', 'MySQL', 'SCSS', 'JavaScript']}
            link="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Levels;