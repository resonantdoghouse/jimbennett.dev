import React from "react";
import { motion } from "framer-motion";
import Scene from "../3d/VoxelAvatar";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden py-24 md:py-0"
    >
      {/* Animated Background Elements */}
      <div className="bg-hero-gradient animate-gradient-x"></div>
      <div className="bg-grid-pattern"></div>

      {/* Full-screen Background Canvas */}
      <div
        id="canvas-container"
        className="absolute inset-0 z-0"
        aria-label="Interactive 3D Avatar"
      >
        <Scene />
      </div>

      <div className="max-w-[1100px] mx-auto px-5 w-full relative z-10 pointer-events-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
          <motion.div
            className="hero-text-content pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 border border-green-500/50 bg-green-500/10 px-4 py-2 rounded-full mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="font-mono text-xs text-green-400 font-bold tracking-wide uppercase">
                Open to Work
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Full Stack <br />
              <span className="text-accent-secondary">Creative Dev.</span>
            </h1>

            <p className="mb-8 text-lg text-text-muted max-w-lg mx-auto md:mx-0">
              Front End Developer, Engineering Leader, and Software Engineering
              Educator combining robust backend logic with immersive front-end
              interfaces. Passionate about technical leadership, teaching
              full-stack software engineering (JavaScript, React, Node.js), and
              crafting creative web experiences with advanced CSS and JS
              animations. Expert in{" "}
              <strong>
                React, Express, TypeScript, Node.js, Git, and DevOps
              </strong>
              .
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Button href="#contact" as="a" soundType="coin">
                HIRE ME
              </Button>
              <Button
                href="#levels"
                as="a"
                variant="icon"
                className="w-auto px-6 border-accent text-accent hover:bg-accent hover:text-white"
              >
                VIEW PORTFOLIO
              </Button>
            </motion.div>
          </motion.div>

          {/* Empty column for layout spacing to keep text on the left */}
          <div className="hidden md:block pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
