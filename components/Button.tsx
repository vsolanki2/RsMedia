import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  onClick?: () => void;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary', 
  fullWidth = false, 
  onClick,
  icon = true 
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";
  
  const variants = {
    // Gradient Violet/Fuchsia
    primary: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-500 hover:to-fuchsia-500 shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.6)] focus:ring-violet-500 border border-transparent",
    
    // Solid Slate Lighter
    secondary: "bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 hover:border-slate-600 shadow-lg focus:ring-slate-500",
    
    // Outline
    outline: "bg-transparent border-2 border-slate-700 text-slate-300 hover:text-white hover:border-violet-500 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] focus:ring-violet-500"
  };

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass}`}
    >
      {icon && <ShoppingBag className="w-5 h-5" />}
      {text}
      {!icon && <ArrowRight className="w-5 h-5 ml-1" />}
    </button>
  );
};

export default Button;