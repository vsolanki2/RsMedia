import React from 'react';
import Button from './Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-gradient-to-b from-slate-900 to-black text-center border-t border-slate-900">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Ready to upgrade your workflow?
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Join thousands of students and creators saving hours every week. 
          Instant access. One-time payment.
        </p>
        <div className="pt-8">
          <Button 
            text="Get the Bundle on Etsy" 
            variant="primary" 
            onClick={() => window.open('https://etsy.com', '_blank')}
          />
        </div>
        <p className="text-sm text-slate-600 mt-8">
          100% Secure Checkout via Etsy
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;