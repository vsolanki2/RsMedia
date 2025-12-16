import React from 'react';
import Section from './Section';
import { GraduationCap, PenTool, Briefcase, User } from 'lucide-react';

const Audience: React.FC = () => {
  const audienceList = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Students",
      desc: "Summarize textbooks, outline essays, and simplify complex topics in minutes."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Creators",
      desc: "Generate endless content ideas, scripts, and captions that actually sound human."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Entrepreneurs",
      desc: "Write sales emails, product descriptions, and business plans 10x faster."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Anyone using AI",
      desc: "If you use ChatGPT, this bundle will instantly upgrade your daily output."
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Who is this for?
        </h2>
        <p className="text-lg text-slate-400">
          Designed for practical, real-world use cases.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {audienceList.map((item, index) => (
          <div key={index} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-300 group">
            <div className="text-violet-500 mb-4 group-hover:text-violet-400 transition-colors">{item.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Audience;