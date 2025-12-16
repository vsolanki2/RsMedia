import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    "80+ Field-Tested Prompts",
    "Organized by Category (Writing, Business, Lifestyle)",
    "Beginner-Friendly Instructions",
    "Works with Free & Paid AI Models",
    "Instant PDF Download",
    "Lifetime Access & Updates"
  ];

  return (
    <Section light={false}>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Everything you need to master AI instantly.
          </h2>
          <p className="text-lg text-slate-400 mb-8">
            No fluff. No theory. Just the exact words you need to type to get professional-grade outputs for emails, essays, content creation, and more.
          </p>
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
            What's Included
          </h3>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Features;