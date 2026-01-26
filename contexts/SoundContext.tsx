/* eslint-disable react-hooks/preserve-manual-memoization */
import React, { useRef, useState, useCallback } from "react";
import { SoundType } from "../types";

import { SoundContext } from "./SoundContextDefinition";

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioContextClass();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, []);

  const toggleSound = () => {
    if (!isEnabled) {
      initAudio();
      playSound("click"); // Feedback for turning on
    }
    setIsEnabled((prev) => !prev);
  };

  const playSound = useCallback(
    (type: SoundType) => {
      if (!isEnabled || !audioCtxRef.current) return;

      // Ensure context is running
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      const now = ctx.currentTime;

      switch (type) {
        case "hover":
          osc.type = "square";
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
          gainNode.gain.setValueAtTime(0.05, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
          break;
        case "click":
        case "start":
          osc.type = "triangle";
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.setValueAtTime(800, now + 0.1);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;
        case "blip":
          osc.type = "sine";
          osc.frequency.setValueAtTime(200, now);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        case "coin":
          osc.type = "square";
          osc.frequency.setValueAtTime(1000, now);
          osc.frequency.setValueAtTime(1500, now + 0.1);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
      }
    },
    [isEnabled],
  );

  return (
    <SoundContext.Provider value={{ isEnabled, toggleSound, playSound }}>
      {children}
    </SoundContext.Provider>
  );
};
