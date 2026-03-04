export type Theme = "light" | "dark";

export type SoundType =
  | "hover"
  | "click"
  | "start"
  | "blip"
  | "coin"
  | "powerup"
  | "error"
  | "success"
  | "jump"
  | "typing"
  | "synth"
  | "select";

export interface SoundContextType {
  isEnabled: boolean;
  toggleSound: () => void;
  playSound: (type: SoundType) => void;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  color?: string;
  slug: string;
  longDescription?: string;
  images?: string[];
  githubUrl?: string;
}

export interface Quest {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}
