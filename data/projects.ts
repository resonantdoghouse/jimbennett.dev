import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "place-cats",
    title: "Place Cats",
    slug: "place-cats",
    description:
      "Free, fast, and adorable cat placeholders for your design projects.",
    longDescription:
      "A robust placeholder image service designed for developers and designers. It features a simple, intuitive API for generating resizing, grayscale, and object-fit cat images on the fly. The project highlights expertise in API design, image processing pipelines, and serving optimized assets via CDN for high performance.",
    tech: ["Node.js", "API Design", "Image Processing", "CDN"],
    link: "https://placecats.com",
    color: "accent",
    images: [
      "/assets/portfolio/placecats.jpg",
      "/assets/portfolio/placecats.jpg",
      "/assets/portfolio/placecats.jpg",
    ],
  },
  {
    id: "advance-bass",
    title: "Advance Bass",
    slug: "advance-bass",
    description:
      "High-quality, accurate transcriptions of modern and classic bass lines, plus interactive practice tools.",
    longDescription:
      "A comprehensive educational platform for bass players, featuring a suite of browser-based practice tools. Includes a Video Looper for transcribing YouTube content, a real-time Pitch Shifter, Metronome, and an interactive Fretboard Visualizer. Demonstrates complex state management and direct integration with the Web Audio API.",
    tech: ["Next.js", "React", "Web Audio API", "TypeScript"],
    link: "https://advancebass.com",
    color: "accent-secondary",
    images: [
      "/assets/portfolio/advance-bass.jpg",
      "/assets/portfolio/advance-bass.jpg",
      "/assets/portfolio/advance-bass.jpg",
    ],
  },
  {
    id: "react-player-piano",
    title: "React Player Piano",
    slug: "react-player-piano",
    description:
      "A piano keyboard player that plays selected songs with left and right hand visuals.",
    longDescription:
      "An interactive virtual piano built with React, capable of playing MIDI-like song data with synchronized visual feedback. It splits left and right-hand parts, illuminating keys in real-time. Showcases precise timing handling in JavaScript and performant DOM updates for musical applications.",
    tech: ["React", "SCSS", "Creative Coding", "Web Audio"],
    link: "https://react-player-piano.netlify.app/",
    images: [
      "/assets/portfolio/react-player-piano.jpg",
      "/assets/portfolio/react-player-piano.jpg",
    ],
  },
  {
    id: "three-js-heightmap",
    title: "Three.js Heightmap",
    slug: "three-js-heightmap",
    description:
      "Interactive 3D terrain visualization using heightmaps and WebGL shaders for performant rendering.",
    longDescription:
      "A 3D visualization experiment using Three.js to render terrain from heightmap data. It utilizes custom WebGL shaders for texture mapping and lighting, providing a performant and interactive 3D environment in the browser. Highlights skills in graphics programming and 3D math.",
    tech: ["Three.js", "WebGL", "GLSL Shaders", "JavaScript"],
    link: "https://threejs-art-heightmap.netlify.app/",
    images: ["/assets/portfolio/three-heightmap.jpg"],
  },
  {
    id: "perlin-noise-terrain",
    title: "Perlin Noise Terrain",
    slug: "perlin-noise-terrain",
    description:
      "Procedural terrain generation using Perlin noise algorithms and p5.js for organic pattern creation.",
    longDescription:
      "A procedural terrain generator utilizing Perlin noise algorithms to create organic, infinite landscapes. Built with p5.js, it demonstrates an understanding of algorithmic generation, mathematical visualizations, and canvas rendering performance.",
    tech: ["p5.js", "Algorithms", "Creative Coding", "Math"],
    link: "https://p5-perlin-terrain.netlify.app/",
    images: ["/assets/portfolio/perlin-noise.jpg"],
  },
  {
    id: "interactive-experiments",
    title: "Interactive Experiments",
    slug: "interactive-experiments",
    description:
      "A featured CodePen demonstration exploring advanced frontend techniques, animation loops, and interactive UI concepts.",
    longDescription:
      "A collection of advanced frontend demonstrations focusing on CSS3 triggers, complex keyframe animations, and experimental UI patterns. These experiments push the boundaries of browser rendering engines and serve as a playground for modern interaction design.",
    tech: ["CSS3", "Animation", "UI/UX", "CodePen"],
    link: "https://codepen.io/jimbennett/full/Odyapv",
    images: ["/assets/portfolio/interactive-experiments.jpg"],
  },
];
