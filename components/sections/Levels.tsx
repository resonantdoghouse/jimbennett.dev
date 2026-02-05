import React from "react";
import { Link } from "react-router-dom";
import { useSound } from "../../hooks/useSound";
import { projects } from "../../data/projects";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  onHover: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onHover }) => (
  <article
    className="bg-card border border-border group transition-all duration-300 hover:-translate-y-2 hover:shadow-[10px_10px_0_var(--text-muted)] flex flex-col h-full"
    onMouseEnter={onHover}
  >
    <Link to={`/projects/${project.slug}`} className="block group">
      <div className="h-48 bg-[#2a2a2a] relative flex items-center justify-center overflow-hidden shrink-0 border-b border-border group-hover:border-accent transition-colors">
        {project.images && project.images.length > 0 ? (
          <img
            src={project.images[0]}
            alt={`Screenshot of ${project.title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="w-20 h-14 bg-accent shadow-[4px_4px_0_var(--accent-secondary)]"
            style={{
              background: project.color ? `var(--${project.color})` : undefined,
            }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>

        {/* Scanline effect on image */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-30"></div>
      </div>
    </Link>

    <div className="p-6 flex flex-col grow">
      <Link to={`/projects/${project.slug}`} className="block w-fit">
        <h3 className="font-bold text-xl mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
      </Link>
      <p className="text-text-muted mb-6 text-sm leading-relaxed grow">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[10px] uppercase tracking-wider bg-background px-2 py-1 border border-border text-text-muted"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-auto">
        <Link
          to={`/projects/${project.slug}`}
          className="font-bold font-mono text-sm text-accent hover:text-accent-secondary hover:underline inline-flex items-center gap-2"
        >
          <span>CASE STUDY</span>
          <span>{">"}</span>
        </Link>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold font-mono text-sm text-text-muted hover:text-text-main hover:underline inline-flex items-center gap-2 ml-auto"
        >
          <span>VISIT</span>
          <span>↗</span>
        </a>
      </div>
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
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHover={() => playSound("hover")}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Levels;
