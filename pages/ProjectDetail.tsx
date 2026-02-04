import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { useSound } from "../hooks/useSound";

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { playSound } = useSound();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-background text-text-main pb-20 pt-20 mt-12 px-5">
      <div className="max-w-[1100px] mx-auto">
        {/* Header / Nav Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary font-mono mb-8 group"
          onClick={() => playSound("click")}
        >
          <span>{"<"}</span>
          <span className="group-hover:underline">BACK TO TERMINAL</span>
        </Link>
        {/* Title Section */}
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            {project.title}
            <span className="text-accent animate-pulse">_</span>
          </h1>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-xs md:text-sm uppercase tracking-wider bg-accent/10 px-3 py-1 text-accent border border-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Description Block */}
            <section className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-6 text-accent flex items-center gap-3">
                <span className="inline-block w-2 h-8 bg-accent"></span>
                MISSION_BRIEFING
              </h2>
              <div className="bg-card/50 border border-border p-8 backdrop-blur-sm leading-8 text-lg text-text-muted">
                {project.longDescription ? (
                  <p className="whitespace-pre-line">
                    {project.longDescription}
                  </p>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
            </section>

            {/* Visuals Block - Only show if we have images */}
            {project.images && project.images.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6 text-accent flex items-center gap-3">
                  <span className="inline-block w-2 h-8 bg-accent-secondary"></span>
                  VISUAL_RECORDS
                </h2>
                <div className="border-2 border-border p-2 bg-card rounded-lg shadow-2xl">
                  <img
                    src={project.images[0]}
                    alt={`Design Interface of ${project.title}`}
                    className="w-full h-auto rounded grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="mt-2 text-center font-mono text-xs text-text-muted/60">
                    FIG. 01 // INTERFACE_VIEW_MAIN
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <aside className="lg:col-span-4">
            {/* Sticky Wrapper - Top offset adjusted to clear fixed header */}
            <div className="sticky top-32 space-y-8">
              {/* Data Card */}
              <div className="bg-card border border-border p-6 shadow-lg relative overflow-hidden group">
                {/* Decorative corner accents */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent opacity-50"></div>

                <h3 className="font-bold text-xl mb-6 border-b border-border pb-2 flex justify-between items-center">
                  <span>DATA_LOG</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </h3>

                <div className="space-y-6 font-mono text-sm">
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-text-muted">STATUS</span>
                    <span className="text-accent">CLASSIFIED</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-text-muted">ACCESS_LEVEL</span>
                    <span className="text-accent">PUBLIC</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="text-text-muted">DEPLOYMENT</span>
                    <span className="text-accent">NETLIFY</span>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-4 border border-accent/50 hover:bg-accent hover:text-white transition-all duration-300 bg-accent/5"
                    onClick={() => playSound("click")}
                  >
                    <span className="font-bold">LAUNCH_PROJECT</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </a>

                  <button
                    disabled
                    className="flex items-center justify-between w-full p-4 border border-border text-text-muted cursor-not-allowed bg-background/50 opacity-60"
                  >
                    <span>SOURCE_CODE</span>
                    <span>Login Required</span>
                  </button>
                </div>
              </div>

              {/* Additional Info / Tags */}
              <div className="p-6 bg-accent/5 border border-accent/10 rounded-lg">
                <p className="font-mono text-xs text-text-muted leading-relaxed">
                  &gt; This file has been recovered from the archives.
                  <br />
                  &gt; Some data may be corrupted or missing.
                  <br />
                  &gt; Proceed with caution.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
