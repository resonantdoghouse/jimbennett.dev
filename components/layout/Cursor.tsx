import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {

  const outlineRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for positions to avoid re-renders on every mousemove
  const mousePos = useRef({ x: -100, y: -100 });
  const outlinePos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show custom cursor on fine pointer devices (mouse) AND if user hasn't requested reduced motion
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    if (!mediaQuery.matches || reducedMotionQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      


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

        // Apply translate to the WRAPPER only. 
        // We include translate(-50%, -50%) to center the element on the coordinates.
        // This works because the wrapper shrinks to fit the child (40px or 60px).
        outlineRef.current.style.transform = `translate(${outlinePos.current.x}px, ${outlinePos.current.y}px) translate(-50%, -50%)`;
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

      
      {/* Outer Outline Wrapper - Handles Position Only */}
      <div 
        ref={outlineRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{ willChange: 'transform' }}
      >
        {/* Visual Box - Handles Shape, Color, and Spin Animation - Simplified follower */}
        <div 
          className={`
            border-2 border-accent/50 transition-all duration-300 ease-out rounded-full
            ${isHovered 
              ? 'w-[50px] h-[50px] bg-accent/5 border-accent animate-spin-slow' 
              : 'w-[30px] h-[30px] border-solid'
            }
          `}
        />
      </div>
    </>
  );
};

export default Cursor;