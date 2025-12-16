import React from 'react';
import Button from './Button';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-8 bg-slate-950 min-h-[85vh] flex flex-col justify-center items-center text-center overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-slate-800 backdrop-blur-sm text-violet-400 rounded-full text-sm font-medium shadow-xl">
          <Sparkles className="w-4 h-4" />
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Updated for 2025</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
          Stop getting <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">robotic answers</span> from AI.
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Unlock pro-level results instantly. 80+ copy-paste prompts designed to save you hours of frustration. No experience needed.
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            text="Buy on Etsy – Instant Download" 
            variant="primary"
            onClick={() => window.open('https://etsy.com', '_blank')} 
          />
        </div>
        
        <p className="text-sm text-slate-500 pt-4">
          Files delivered automatically via email immediately after purchase.
        </p>
      </div>
    </section>
  );
};

export default Hero;