import React, { useEffect, useRef } from 'react';

const Cursor: React.FC = () => {

  // Use refs for positions
  const mousePos = useRef({ x: -100, y: -100 });
  
  useEffect(() => {
     // Keep mouse listener if needed for future logic, or remove entirely if we want zero overhead.
     // For now, removing the heavy animation loop but keeping basic structure.
     const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // We are programmatically disabling the visual cursor circle to rely on the system cursor + particles
  return null;
};

export default Cursor;