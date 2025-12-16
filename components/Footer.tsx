import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-slate-900 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} AI Prompt Bundle. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;