import React from 'react';
import Section from './Section';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Sarah J.",
      role: "Marketing Student",
      quote: "Saved me so much time on my thesis research. The summarization prompts are gold. I used to spend hours just trying to get the right output."
    },
    {
      name: "Mike T.",
      role: "Content Creator",
      quote: "Finally stopped getting generic outputs. My engagement went up because the tone is actually human. Highly recommend for anyone using ChatGPT."
    },
    {
      name: "Elena R.",
      role: "Small Business Owner",
      quote: "Best investment I've made for my workflow. I wrote my entire email welcome sequence in a single afternoon using the business prompts."
    }
  ];

  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Trusted by happy users
        </h2>
        <div className="flex justify-center gap-1 mb-4 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <p className="text-lg text-slate-400">
            Real results from people just like you.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-slate-900 p-8 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-violet-500/30 transition-colors duration-300 shadow-sm">
            <p className="text-slate-300 italic mb-6 leading-relaxed">
              "{review.quote}"
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-violet-400 font-bold">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">{review.role}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;