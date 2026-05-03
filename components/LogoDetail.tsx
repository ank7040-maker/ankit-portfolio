import React, { useEffect } from 'react';
import { X, ArrowLeft } from 'lucide-react';

export interface LogoData {
  id: string;
  name: string;
  category: string;
  industry: string;
  description: string;
  concept: string;
  usage: string[];
  icon: React.ReactNode;
}

interface LogoDetailProps {
  logo: LogoData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const LogoDetail: React.FC<LogoDetailProps> = ({ logo, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !logo) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-brand-black overflow-y-auto animate-fade-in-up">
      {/* Navigation / Header */}
      <div className="sticky top-0 z-50 flex justify-between items-center p-6 md:p-8 bg-brand-black/90 backdrop-blur-md border-b border-white/5">
        <button 
          onClick={onClose}
          className="flex items-center gap-2 text-white hover:text-brand-neon transition-colors uppercase font-bold tracking-widest text-sm"
        >
          <ArrowLeft size={20} /> Back to Folio
        </button>
        <button 
          onClick={onClose}
          className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Visual Representation */}
          <div className="w-full aspect-square bg-white rounded-sm shadow-2xl flex items-center justify-center p-12 md:p-24 relative overflow-hidden group border border-white/10">
             <div className="absolute top-0 left-0 w-full h-2 bg-brand-neon"></div>
             {/* Abstract Background Pattern */}
             <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black to-transparent"></div>
             
             <div className="w-full h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
               {/* Container for the icon - ensuring it fills available space while maintaining aspect */}
               <div className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>img]:w-full [&>img]:h-full [&>img]:object-contain">
                  {logo.icon}
               </div>
             </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col space-y-12">
            
            <div>
              <span className="text-brand-neon font-mono text-sm uppercase tracking-widest mb-2 block">{logo.category}</span>
              <h1 className="text-6xl md:text-8xl font-display font-black text-white leading-none mb-4">{logo.name}</h1>
              <div className="h-1 w-24 bg-white/20 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-2">Industry</h3>
                  <p className="text-brand-gray">{logo.industry}</p>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-white uppercase mb-2">Year</h3>
                  <p className="text-brand-gray">2023 - 2024</p>
               </div>
            </div>

            <div>
               <h3 className="text-2xl font-display font-bold text-white mb-4 border-l-4 border-brand-neon pl-4">Brand Concept</h3>
               <p className="text-gray-300 text-lg leading-relaxed font-light">
                 {logo.concept}
               </p>
            </div>

            <div>
               <h3 className="text-2xl font-display font-bold text-white mb-4 border-l-4 border-brand-neon pl-4">Description</h3>
               <p className="text-gray-300 text-lg leading-relaxed font-light">
                 {logo.description}
               </p>
            </div>

            <div>
               <h3 className="text-xl font-bold text-white uppercase mb-4">Usage Context</h3>
               <div className="flex flex-wrap gap-3">
                  {logo.usage.map((tag, idx) => (
                    <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};