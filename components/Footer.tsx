import React, { useState } from 'react';
import { Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const Footer: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-brand-black pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />

      {/* Giant Text Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-5">
         <h1 className="text-[12.5vw] font-display font-black text-white leading-none whitespace-nowrap">
           WORK WITH ME
         </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
           <span className="font-script text-3xl text-brand-neon mb-4">Project in mind?</span>
           <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8">
             Let’s Work <span className="text-brand-neon">Together!</span>
           </h2>
           <button 
             onClick={() => setIsContactModalOpen(true)}
             className="px-10 py-4 bg-brand-neon text-brand-black text-lg font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(182,255,0,0.3)]"
           >
             Start a Project
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12 items-center">
           <div className="text-center md:text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">ANKIT.KUMAR</h3>
              <p className="text-brand-gray text-sm">© 2026 All Rights Reserved.</p>
           </div>

           <div className="flex justify-center gap-6">
              <a 
                href="https://www.linkedin.com/in/ankit-kumar-370933350" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-white hover:bg-brand-neon hover:text-brand-black transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/editspenguin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full text-white hover:bg-brand-neon hover:text-brand-black transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
           </div>

           <div className="flex justify-center md:justify-end">
              <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-white font-bold uppercase text-sm hover:text-brand-neon transition-colors"
              >
                Back to Top
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-brand-neon transition-colors">
                   <ArrowUp size={16} />
                </div>
              </button>
           </div>
        </div>
      </div>
    </footer>
  );
};