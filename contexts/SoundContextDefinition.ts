import { createContext } from "react";
import { SoundContextType } from "../types";

export const SoundContext = createContext<SoundContextType | undefined>(undefined);
