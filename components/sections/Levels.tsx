import React from "react";
import { useSound } from "../../contexts/SoundContext";

interface ProjectCardProps {
  title: string;
  desc: string;
  tech: string[];
  color?: string;
  link?: string;
  image?: string;
  onHover: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  tech,
  color,
  link,
  image,
  onHover,
}) => (
  <article
    className="bg-card border border-border group transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--text-muted)] flex flex-col h-full"
    onMouseEnter={onHover}
  >
    <a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
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
    </a>

    <div className="p-6 flex flex-col grow">
      <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-fit"
      >
        <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
      </a>
      <p className="text-text-muted mb-6 text-sm leading-relaxed grow">
        {desc}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider bg-background px-2 py-1 border border-border text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold font-mono text-sm text-accent hover:text-accent-secondary hover:underline inline-flex items-center gap-2 mt-auto"
      >
        <span>VIEW PROJECT</span>
        <span>{">"}</span>
      </a>
    </div>
  </article>
);

const Levels: React.FC = () => {
  const { playSound } = useSound();

  return (
    <section id="levels" className="py-24 relative bg-background/50">
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 flex items-center gap-4 pixel-underline">
              Portfolio
            </h2>
            <p className="text-text-muted max-w-xl">
              Selected works demonstrating proficiency in creative coding, 3D
              visualization, and advanced CSS architecture.
            </p>
          </div>
          <a
            href="https://github.com/resonantdoghouse"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-secondary font-mono text-sm underline"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Place Cats"
            desc="Free, fast, and adorable cat placeholders for your design projects."
            tech={["API", "Node.js", "Images"]}
            link="https://placecats.com"
            color="accent"
            image="/assets/portfolio/placecats.jpg"
            onHover={() => playSound("hover")}
          />
          <ProjectCard
            title="Advance Bass"
            desc="High-quality, accurate transcriptions of modern and classic bass lines, plus interactive practice tools."
            tech={["Next.js", "React", "Music Theory"]}
            link="https://advancebass.com"
            color="accent-secondary"
            image="/assets/portfolio/advance-bass.jpg"
            onHover={() => playSound("hover")}
          />
          <ProjectCard
            title="React Player Piano"
            desc="A piano keyboard player that plays selected songs with left and right hand visuals."
            tech={["React", "SCSS", "Creative Coding"]}
            link="https://react-player-piano.netlify.app/"
            image="/assets/portfolio/react-player-piano.jpg"
            onHover={() => playSound("hover")}
          />
          <ProjectCard
            title="Three.js Heightmap"
            desc="Interactive 3D terrain visualization using heightmaps and WebGL shaders for performant rendering."
            tech={["Three.js", "WebGL", "JavaScript"]}
            link="https://threejs-art-heightmap.netlify.app/"
            image="/assets/portfolio/three-heightmap.jpg"
            onHover={() => playSound("hover")}
          />
          <ProjectCard
            title="Perlin Noise Terrain"
            desc="Procedural terrain generation using Perlin noise algorithms and p5.js for organic pattern creation."
            tech={["p5.js", "Algorithms", "JavaScript"]}
            link="https://p5-perlin-terrain.netlify.app/"
            image="/assets/portfolio/perlin-noise.jpg"
            onHover={() => playSound("hover")}
          />
          <ProjectCard
            title="Interactive Experiments"
            desc="A featured CodePen demonstration exploring advanced frontend techniques, animation loops, and interactive UI concepts."
            tech={["CodePen", "CSS3", "Animation"]}
            link="https://codepen.io/jimbennett/full/Odyapv"
            image="/assets/portfolio/interactive-experiments.jpg"
            onHover={() => playSound("hover")}
          />
        </div>
      </div>
    </section>
  );
};

export default Levels;
