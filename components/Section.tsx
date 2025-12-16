import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, light = true }) => {
  // light prop now toggles between darkest (slate-950) and slightly lighter dark (slate-900)
  const bgClass = light ? 'bg-slate-950' : 'bg-slate-900';
  
  return (
    <section id={id} className={`py-20 md:py-28 px-6 md:px-8 ${bgClass} ${className} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;