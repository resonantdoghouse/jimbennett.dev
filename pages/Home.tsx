import React, { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";

const Stats = lazy(() => import("../components/sections/Stats"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Work = lazy(() => import("../components/sections/Work"));
const Reviews = lazy(() => import("../components/sections/Reviews"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Contact = lazy(() => import("../components/sections/Contact"));

const Home: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Use setTimeout to allow Suspense components to mount or simply give it a tick
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Suspense
        fallback={
          <div className="h-screen w-full flex items-center justify-center text-accent">
            Loading...
          </div>
        }
      >
        <Stats />
        <Skills />
        <Work />
        <Projects />
        <Reviews />
        <Contact />
      </Suspense>
    </>
  );
};

export default Home;
