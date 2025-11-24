import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for positions to avoid re-renders on every mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Update dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) rotate(45deg)`;
      }

      // Check for hover targets
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, .hover-trigger');
      setIsHovered(!!isClickable);
    };

    const animateOutline = () => {
      if (outlineRef.current) {
        // Linear interpolation for smooth lag
        const dx = mousePos.current.x - outlinePos.current.x;
        const dy = mousePos.current.y - outlinePos.current.y;
        
        outlinePos.current.x += dx * 0.15;
        outlinePos.current.y += dy * 0.15;

        const x = outlinePos.current.x;
        const y = outlinePos.current.y;

        // Apply translate directly for performance
        outlineRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animateOutline);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(animateOutline);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-accent-secondary pointer-events-none z-[10000] -ml-[5px] -mt-[5px] mix-blend-difference"
      />
      
      {/* Outer Outline */}
      <div 
        ref={outlineRef}
        className={`
          fixed top-0 left-0 border-2 border-accent pointer-events-none z-[9999] transition-all duration-300 ease-out
          ${isHovered ? 'w-[60px] h-[60px] bg-accent/10 border-dashed animate-spin-slow' : 'w-[40px] h-[40px] border-solid'}
        `}
      />
    </>
  );
};

export default Cursor;