import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-16 text-text-muted font-mono text-sm">
      <p>PRESS START TO CONTINUE © {new Date().getFullYear()} Jim Bennett</p>
    </footer>
  );
};

export default Footer;