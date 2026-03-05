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

        // New Sounds
        case "powerup":
          osc.type = "square";
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.setValueAtTime(600, now + 0.1);
          osc.frequency.setValueAtTime(800, now + 0.2);
          osc.frequency.setValueAtTime(1000, now + 0.3);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.linearRampToValueAtTime(0, now + 0.4);
          osc.start(now);
          osc.stop(now + 0.4);
          break;
        case "error":
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.exponentialRampToValueAtTime(80, now + 0.3);
          gainNode.gain.setValueAtTime(0.15, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;
        case "success":
          osc.type = "square";
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
          osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
          osc.frequency.setValueAtTime(1046.5, now + 0.3); // C6
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;
        case "jump":
          osc.type = "square";
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
          osc.start(now);
          osc.stop(now + 0.2);
          break;
        case "typing":
          osc.type = "square";
          osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
          gainNode.gain.setValueAtTime(0.02, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
          break;
        case "synth":
          osc.type = "square";
          osc.frequency.setValueAtTime(200, now);
          gainNode.gain.setValueAtTime(0.05, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        case "subtle_blip":
          osc.type = "sine";
          osc.frequency.setValueAtTime(400, now);
          osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
          gainNode.gain.setValueAtTime(0.01, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
          break;
        case "bell":
          osc.type = "sine";
          osc.frequency.setValueAtTime(1000, now);
          osc.frequency.exponentialRampToValueAtTime(900, now + 0.5);
          gainNode.gain.setValueAtTime(0.05, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;
        case "plop":
          osc.type = "sine";
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.exponentialRampToValueAtTime(150, now + 0.1);
          gainNode.gain.setValueAtTime(0.08, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
          break;
        case "chime": {
          osc.type = "sine";
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(1500, now + 0.8);
          // Simple modulation
          const modOsc = ctx.createOscillator();
          const modGain = ctx.createGain();
          modOsc.type = "sine";
          modOsc.frequency.value = 8;
          modGain.gain.value = 50;
          modOsc.connect(modGain);
          modGain.connect(osc.frequency);
          modOsc.start(now);
          modOsc.stop(now + 0.8);

          gainNode.gain.setValueAtTime(0.03, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
          osc.start(now);
          osc.stop(now + 0.8);
          break;
        }
        case "select":
          osc.type = "triangle";
          osc.frequency.setValueAtTime(800, now);
          gainNode.gain.setValueAtTime(0.1, now);
          gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
          osc.start(now);
          osc.stop(now + 0.1);
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
