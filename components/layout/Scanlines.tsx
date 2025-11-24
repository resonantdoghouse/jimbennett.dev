import React from 'react';

const Scanlines: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[999] pointer-events-none scanlines" aria-hidden="true" />
  );
};

export default Scanlines;