import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = useCallback(() => {
    if (!project?.images) return;
    setActiveImageIndex((prev) => (prev + 1) % project.images!.length);
  }, [project?.images]);

  const prevImage = useCallback(() => {
    if (!project?.images) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? project.images!.length - 1 : prev - 1,
    );
  }, [project?.images]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextImage]);

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
          <span className="group-hover:underline">BACK</span>
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
                Project Details
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
                  Screenshots
                </h2>
                <div className="space-y-6">
                  {/* Main Image Stage */}
                  <div
                    className="relative border-2 border-border p-2 bg-card rounded-lg shadow-2xl overflow-hidden group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="relative aspect-video overflow-hidden rounded bg-black/50">
                      <img
                        src={project.images[activeImageIndex]}
                        alt={`Screenshot ${activeImageIndex + 1} of ${project.title}`}
                        className="w-full h-full object-contain transition-all duration-500"
                      />

                      {/* Navigation Overlays */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSound("click");
                          prevImage();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                        aria-label="Previous image"
                      >
                        <ChevronLeft size={24} />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSound("click");
                          nextImage();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent"
                        aria-label="Next image"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Progress Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeImageIndex
                                ? "w-8 bg-accent"
                                : "w-2 bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {project.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          playSound("click");
                          setActiveImageIndex(index);
                        }}
                        className={`relative rounded overflow-hidden border-2 transition-all ${
                          index === activeImageIndex
                            ? "border-accent opacity-100 scale-105 shadow-lg"
                            : "border-transparent opacity-60 hover:opacity-100 hover:border-accent/50"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover aspect-video"
                        />
                      </button>
                    ))}
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
                  <span>Resources</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                </h3>

                <div className="mt-8 space-y-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-4 border border-accent/50 hover:bg-accent hover:text-white transition-all duration-300 bg-accent/5"
                    onClick={() => playSound("click")}
                  >
                    <span className="font-bold">Launch Project</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group p-4 border border-accent/50 hover:bg-accent hover:text-white transition-all duration-300 bg-accent/5"
                    >
                      <span className="font-bold">GitHub Repo</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
