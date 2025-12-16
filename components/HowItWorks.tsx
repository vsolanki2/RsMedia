import React from 'react';
import Section from './Section';
import { Download, Copy, Coffee } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "1. Buy & Download",
      desc: "Secure checkout via Etsy. You'll receive an instant link to download the PDF bundle."
    },
    {
      icon: <Copy className="w-8 h-8" />,
      title: "2. Copy a Prompt",
      desc: "Browse the categories, find what you need, and copy the text."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "3. Paste & Relax",
      desc: "Paste it into your AI of choice and watch it generate exactly what you needed."
    }
  ];

  return (
    <Section light={false}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How it works
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector Line for Desktop */}
        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center shadow-lg border border-slate-700 mb-6 text-violet-400 group-hover:scale-110 transition-transform duration-300 group-hover:border-violet-500/50 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
            <p className="text-slate-400 max-w-xs">{step.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HowItWorks;