import React, { Suspense, lazy } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SoundProvider } from "./contexts/SoundContext";

import Scanlines from "./components/layout/Scanlines";
import Cursor from "./components/layout/Cursor";
import CursorParticles from "./components/layout/CursorParticles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";

const Stats = lazy(() => import("./components/sections/Stats"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Quests = lazy(() => import("./components/sections/Quests"));
const Levels = lazy(() => import("./components/sections/Levels"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <main className="relative min-h-screen bg-background text-text-main font-main transition-colors duration-300">
          {/* Global Overlays */}
          <Scanlines />
          <CursorParticles />
          <Cursor />

          {/* Navigation */}
          <Header />

          {/* Content */}
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
            <Quests />
            <Levels />
            <Contact />
          </Suspense>

          <Footer />
        </main>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
