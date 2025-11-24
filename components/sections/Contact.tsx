import React from 'react';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center pb-32 bg-card border-t border-border">
       <div className="max-w-[800px] mx-auto px-5">
        <span className="font-mono text-accent text-sm mb-4 block">AVAILABLE FOR EMPLOYMENT</span>
        <h2 className="text-4xl font-extrabold mb-6 pixel-underline inline-flex items-center gap-4">
          Ready to Join Your Team
        </h2>
        <p className="text-xl mb-10 text-text-muted leading-relaxed">
          I'm currently looking for new opportunities in Full Stack Development. 
          If you have a role that fits my stack, let's connect.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
            as="a" 
            href="mailto:hello@jimbennett.dev" 
            soundType="coin"
            >
            SEND EMAIL
            </Button>
            <Button 
            as="a" 
            href="https://www.linkedin.com/in/jim-bennett/" 
            variant="icon"
            className="w-auto px-8"
            >
            LINKEDIN
            </Button>
        </div>
       </div>
    </section>
  );
};

export default Contact;