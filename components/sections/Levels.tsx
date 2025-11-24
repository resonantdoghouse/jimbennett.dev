import React from 'react';
import { useSound } from '../../contexts/SoundContext';

const Levels: React.FC = () => {
  const { playSound } = useSound();

  const ProjectCard = ({ 
    title, 
    desc, 
    tech, 
    color, 
    link,
    image 
  }: { 
    title: string, 
    desc: string, 
    tech: string[], 
    color?: string, 
    link?: string,
    image?: string
  }) => (
    <article 
      className="bg-card border border-border group transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--text-muted)] flex flex-col h-full"
      onMouseEnter={() => playSound('hover')}
    >
      <div className="h-48 bg-[#2a2a2a] relative flex items-center justify-center overflow-hidden shrink-0 border-b border-border group-hover:border-accent transition-colors">
        {image ? (
          <img 
            src={image} 
            alt={`Screenshot of ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div 
            className="w-20 h-14 bg-accent shadow-[4px_4px_0_var(--accent-secondary)]"
            style={{ background: color ? `var(--${color})` : undefined }} 
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
        
        {/* Scanline effect on image */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30"></div>
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
        
        <a href={link || "#"} target="_blank" rel="noopener noreferrer" className="font-bold font-mono text-sm text-accent hover:text-accent-secondary hover:underline cursor-none inline-flex items-center gap-2 mt-auto">
          <span>VIEW PROJECT</span>
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
                    Selected works demonstrating proficiency in creative coding, 3D visualization, and advanced CSS architecture.
                </p>
            </div>
            <a href="https://github.com/resonantdoghouse" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-secondary font-mono text-sm underline cursor-none">
                View GitHub Profile
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="The Joy of CSS Art"
            desc="A curated collection of CSS-only art pieces demonstrating the power of modern CSS styling and creative constraints."
            tech={['CSS', 'SCSS', 'Creative Coding']}
            link="https://thejoyofcss.art/"
            image="https://image.thum.io/get/width/800/crop/600/https://thejoyofcss.art/"
          />
          <ProjectCard 
            title="Three.js Heightmap"
            desc="Interactive 3D terrain visualization using heightmaps and WebGL shaders for performant rendering."
            tech={['Three.js', 'WebGL', 'JavaScript']}
            link="https://threejs-art-heightmap.netlify.app/"
            image="https://image.thum.io/get/width/800/crop/600/https://threejs-art-heightmap.netlify.app/"
          />
           <ProjectCard 
            title="Perlin Noise Terrain"
            desc="Procedural terrain generation using Perlin noise algorithms and p5.js for organic pattern creation."
            tech={['p5.js', 'Algorithms', 'JavaScript']}
            link="https://p5-perlin-terrain.netlify.app/"
            image="https://image.thum.io/get/width/800/crop/600/https://p5-perlin-terrain.netlify.app/"
          />
          <ProjectCard 
            title="Interactive Experiments"
            desc="A featured CodePen demonstration exploring advanced frontend techniques, animation loops, and interactive UI concepts."
            tech={['CodePen', 'CSS3', 'Animation']}
            link="https://codepen.io/jimbennett/full/Odyapv"
            image="https://shots.codepen.io/jimbennett/pen/Odyapv-800.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Levels;