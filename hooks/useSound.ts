import { useContext } from "react";
import { SoundContext } from "../contexts/SoundContextDefinition";

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) throw new Error("useSound must be used within a SoundProvider");
  return context;
};
