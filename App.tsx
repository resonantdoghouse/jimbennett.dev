import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SoundProvider } from "./contexts/SoundContext";

import Scanlines from "./components/layout/Scanlines";
import Cursor from "./components/layout/Cursor";
import CursorParticles from "./components/layout/CursorParticles";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ParallaxStars from "./components/layout/ParallaxStars";

import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <Router>
          <main className="relative min-h-screen bg-background text-text-main font-main transition-colors duration-300">
            {/* Global Overlays */}
            <ParallaxStars />
            <Scanlines />
            <CursorParticles />
            <Cursor />

            {/* Navigation */}
            <Header />

            {/* Content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
            </Routes>

            <Footer />
          </main>
        </Router>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
