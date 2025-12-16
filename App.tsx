import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Audience from './components/Audience';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-violet-500/30">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></span>
            AI Prompt Bundle
          </div>
          <button 
            onClick={() => window.open('https://etsy.com', '_blank')}
            className="text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 px-4 py-2 rounded-full transition-all"
          >
            Buy on Etsy
          </button>
        </div>
      </nav>
      
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Audience />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;