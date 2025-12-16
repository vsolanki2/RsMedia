import React from 'react';
import Section from './Section';

const Solution: React.FC = () => {
  return (
    <Section className="text-center">
      <div className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-900 rounded-full">
        The Solution
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
        Introducing the <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">AI Prompt Bundle</span>
      </h2>
      
      <div className="prose prose-lg mx-auto text-slate-400 mb-12">
        <p className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
          Think of this as your cheat sheet for ChatGPT, Claude, and Gemini.
        </p>
        <p>
          This isn't a long, boring course you'll never finish. It is a 
          <strong className="text-white"> curated collection of high-performance inputs</strong> that you can copy, paste, and customize in seconds.
        </p>
        <p>
          We've spent hundreds of hours testing what works so you don't have to. 
          Skip the learning curve and jump straight to the results.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900 aspect-video md:aspect-[21/9] flex items-center justify-center group">
         {/* Abstract representation of the product */}
         <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-slate-900"></div>
         
         {/* Grid pattern overlay */}
         <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

         <div className="relative z-10 text-slate-500 font-bold text-4xl md:text-6xl tracking-widest opacity-30 select-none group-hover:text-violet-500/50 transition-colors duration-500">
            PDF PREVIEW
         </div>
      </div>
    </Section>
  );
};

export default Solution;