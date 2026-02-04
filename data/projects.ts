import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "place-cats",
    title: "Place Cats",
    slug: "place-cats",
    description: "Free, fast, and adorable cat placeholders for your design projects.",
    tech: ["API", "Node.js", "Images"],
    link: "https://placecats.com",
    color: "accent",
    images: ["/assets/portfolio/placecats.jpg"]
  },
  {
    id: "advance-bass",
    title: "Advance Bass",
    slug: "advance-bass",
    description: "High-quality, accurate transcriptions of modern and classic bass lines, plus interactive practice tools.",
    tech: ["Next.js", "React", "Music Theory"],
    link: "https://advancebass.com",
    color: "accent-secondary",
    images: ["/assets/portfolio/advance-bass.jpg"]
  },
  {
    id: "react-player-piano",
    title: "React Player Piano",
    slug: "react-player-piano",
    description: "A piano keyboard player that plays selected songs with left and right hand visuals.",
    tech: ["React", "SCSS", "Creative Coding"],
    link: "https://react-player-piano.netlify.app/",
    images: ["/assets/portfolio/react-player-piano.jpg"]
  },
  {
    id: "three-js-heightmap",
    title: "Three.js Heightmap",
    slug: "three-js-heightmap",
    description: "Interactive 3D terrain visualization using heightmaps and WebGL shaders for performant rendering.",
    tech: ["Three.js", "WebGL", "JavaScript"],
    link: "https://threejs-art-heightmap.netlify.app/",
    images: ["/assets/portfolio/three-heightmap.jpg"]
  },
  {
    id: "perlin-noise-terrain",
    title: "Perlin Noise Terrain",
    slug: "perlin-noise-terrain",
    description: "Procedural terrain generation using Perlin noise algorithms and p5.js for organic pattern creation.",
    tech: ["p5.js", "Algorithms", "JavaScript"],
    link: "https://p5-perlin-terrain.netlify.app/",
    images: ["/assets/portfolio/perlin-noise.jpg"]
  },
  {
    id: "interactive-experiments",
    title: "Interactive Experiments",
    slug: "interactive-experiments",
    description: "A featured CodePen demonstration exploring advanced frontend techniques, animation loops, and interactive UI concepts.",
    tech: ["CodePen", "CSS3", "Animation"],
    link: "https://codepen.io/jimbennett/full/Odyapv",
    images: ["/assets/portfolio/interactive-experiments.jpg"]
  }
];
