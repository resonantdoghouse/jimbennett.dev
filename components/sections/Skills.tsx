import React from "react";
import { motion } from "framer-motion";
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
  "HTML5",
  "Git",
  "CI/CD",
  "Playwright",
  "Vitest",
  "Jest",
  "AI Tools",
  "Shell Scripting",
];

const Skills: React.FC = () => {
  const { playSound } = useSound();

  return (
    <section
      id="skills"
      className="py-20 bg-background border-b border-border overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-5">
        <motion.h2
          className="text-2xl font-bold mb-8 font-mono text-center md:text-left flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent">{">>"}</span> TECH_STACK_INIT
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
        >
          {skillList.map((skill) => (
            <motion.div
              key={skill}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              className="px-6 py-3 bg-card border border-border rounded shadow-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-200 cursor-default"
              onMouseEnter={() => playSound("typing")}
            >
              <span className="font-mono font-bold">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
