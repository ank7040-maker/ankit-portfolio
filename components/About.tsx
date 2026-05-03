import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { ResumeModal } from './ResumeModal';

export const About: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
      <ResumeModal isOpen={showResume} onClose={() => setShowResume(false)} />

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-5xl md:text-7xl font-display font-black text-white mb-8 leading-tight">
              Hello! <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-green-300 text-4xl md:text-6xl">
                I am Ankit.
              </span>
            </h2>
            
            <div className="relative mb-10">
              <span className="absolute -left-12 -top-8 font-script text-brand-neon text-4xl opacity-50 -rotate-12 hidden md:block">About me</span>
              <p className="text-brand-gray text-lg leading-relaxed mb-6 font-light">
                Greetings ladies & gentlemen. I am a creative and motivated graphic designer with a strong passion for visual storytelling and brand design. I thrive on exploring new challenges and opportunities that push the boundaries of my creativity.
              </p>
              <p className="text-brand-gray text-lg leading-relaxed font-light">
                Known for my creative flair and the ability to deliver impactful designs, I'm always exploring new trends and techniques to sharpen my creative thinking and skills.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-white text-brand-black font-bold uppercase tracking-widest hover:bg-brand-neon transition-colors duration-300"
              >
                Contact Me
              </button>
              
              <button 
                onClick={() => setShowResume(true)}
                className="px-8 py-3 border border-brand-neon text-brand-neon font-bold uppercase tracking-widest hover:bg-brand-neon hover:text-brand-black transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(182,255,0,0.1)] hover:shadow-[0_0_20px_rgba(182,255,0,0.4)]"
              >
                <Download size={18} /> Resume
              </button>
            </div>
          </div>

          {/* Image - Styled like a pencil sketch effect */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
             <div className="relative group">
                <div className="absolute inset-0 bg-brand-neon rounded-none rotate-6 scale-[0.95] opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
                <div className="relative w-72 h-96 md:w-96 md:h-[500px] overflow-hidden bg-brand-black border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://i.ibb.co/vvQH0kYb/Gemini-Generated-Image-jam5jdjam5jdjam5.png" 
                    alt="Ankit Kumar Portrait" 
                    className="w-full h-full object-cover opacity-90 mix-blend-normal"
                  />
                  {/* Overlay for sketch effect simulation */}
                  <div className="absolute inset-0 bg-white opacity-5 mix-blend-overlay"></div>
                </div>
                
                {/* Decorative Signature */}
                <div className="absolute -bottom-8 -right-8">
                   <span className="font-script text-4xl text-white">Ankit Kumar</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};