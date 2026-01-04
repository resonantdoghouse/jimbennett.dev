import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { SoundProvider } from './contexts/SoundContext';

import Scanlines from './components/layout/Scanlines';
import Cursor from './components/layout/Cursor';
import CursorParticles from './components/layout/CursorParticles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Skills from './components/sections/Skills';
import Quests from './components/sections/Quests';
import Levels from './components/sections/Levels';
import Contact from './components/sections/Contact';

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
          <Stats />
          <Skills />
          <Quests />
          <Levels />
          <Contact />

          <Footer />
        </main>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;