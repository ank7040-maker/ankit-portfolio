import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-transparent to-brand-black/90"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-neon rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="mb-4 animate-fade-in-up">
           <span className="font-script text-3xl md:text-5xl text-brand-neon -rotate-3 block mb-6">
             Graphic Design
           </span>
        </div>
        
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-white leading-[0.9] mb-6 drop-shadow-2xl">
          Portfo<span className="text-brand-neon">lio</span>
        </h1>
        
        <div className="relative">
          <p className="font-sans text-brand-gray text-lg md:text-xl max-w-xl mx-auto mb-10 tracking-wide uppercase drop-shadow-lg">
            Ankit Kumar — <span className="text-white font-semibold">Senior Creative Designer</span>
          </p>
          <div className="hidden md:block absolute -right-32 top-0 w-24 h-24 border border-brand-neon/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
             <span className="text-[10px] text-brand-neon uppercase tracking-widest font-mono">
               • Scroll Down •
                Scroll Down 
             </span>
          </div>
        </div>

        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex flex-col items-center gap-4 text-brand-gray hover:text-brand-neon transition-colors duration-300 mt-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Explore Work</span>
          <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-current rounded-full animate-bounce mt-1"></div>
          </div>
        </button>
      </div>
    </section>
  );
};