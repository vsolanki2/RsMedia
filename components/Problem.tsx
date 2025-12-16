import React from 'react';
import Section from './Section';
import { AlertCircle, Clock, SearchX } from 'lucide-react';

const Problem: React.FC = () => {
  return (
    <Section light={false} id="problem">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Why most people struggle with AI
        </h2>
        <p className="text-lg text-slate-400">
          You know AI is powerful, but getting it to do exactly what you want is harder than it looks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-red-500/30 transition-colors">
          <div className="w-12 h-12 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center mb-6 border border-red-500/20">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Generic Answers</h3>
          <p className="text-slate-400">
            You ask a question and get the same bland, robotic "As an AI language model..." response that everyone else gets.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-orange-500/30 transition-colors">
          <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-lg flex items-center justify-center mb-6 border border-orange-500/20">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Wasted Time</h3>
          <p className="text-slate-400">
            You spend more time tweaking your questions and arguing with the chatbot than actually getting work done.
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700/50 hover:border-slate-500/30 transition-colors">
          <div className="w-12 h-12 bg-slate-700/30 text-slate-300 rounded-lg flex items-center justify-center mb-6 border border-slate-600/30">
            <SearchX className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">Overwhelmed</h3>
          <p className="text-slate-400">
            "Prompt Engineering" sounds technical and complicated. You don't want to learn a new skill; you just want results.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Problem;