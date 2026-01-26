import React from "react";
import { useSound } from "../../hooks/useSound";

const skillList = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "SQL",
  "React",
  "Three.js",
  "WebGL",
  "SCSS",
  "CSS Modules",
  "HTML5",
  "Git",
];

const Skills: React.FC = () => {
  const { playSound } = useSound();

  return (
    <section id="skills" className="py-20 bg-background border-b border-border">
      <div className="max-w-[1100px] mx-auto px-5">
        <h2 className="text-2xl font-bold mb-8 font-mono text-center md:text-left flex items-center gap-3">
          <span className="text-accent">{">>"}</span> TECH_STACK_INIT
        </h2>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {skillList.map((skill) => (
            <div
              key={skill}
              className="px-6 py-3 bg-card border border-border rounded shadow-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200 cursor-default"
              onMouseEnter={() => playSound("hover")}
            >
              <span className="font-mono font-bold">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
