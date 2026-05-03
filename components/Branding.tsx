import React from 'react';
import { SectionHeading } from './SectionHeading';

// Veloura Icon using Image Mask for dynamic coloring (kept for potential secondary use, though main displays now use img)
const VelouraIcon = ({ className = "w-full h-full", color = "#b6ff00" }) => (
  <div 
     className={className} 
     style={{ 
        backgroundColor: color,
        maskImage: `url(https://i.ibb.co/bjtN3PS6/asq.png)`,
        WebkitMaskImage: `url(https://i.ibb.co/bjtN3PS6/asq.png)`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center'
     }}
  />
);

export const Branding: React.FC = () => {
  return (
    <section id="branding" className="py-24 bg-brand-dark border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <SectionHeading title="Branding" subtitle="Veloura Case Study" />

        <div className="bg-brand-black border border-white/10 p-8 md:p-12 shadow-2xl rounded-sm relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#b6ff00] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

            {/* TOP SECTION: Info & Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 relative z-10">
                
                {/* Left: Brand Info */}
                <div>
                    <h3 className="text-4xl font-display font-black text-white mb-2">Brand : Veloura</h3>
                    <p className="text-sm font-bold text-[#b6ff00] uppercase tracking-widest mb-8">Industry: Luxury Wellness & Spa</p>
                    
                    <p className="text-brand-gray leading-relaxed mb-8 text-base">
                        Veloura is a luxury wellness and spa brand dedicated to creating deeply relaxing, rejuvenating experiences inspired by nature. We believe in the harmony of mind, body, and soul—offering holistic spa therapies that restore balance, relieve stress, and promote overall well-being through natural elements and mindful practices.
                    </p>

                    <h4 className="text-xl font-bold text-white mb-6 border-l-4 border-[#b6ff00] pl-4">Key Features</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Target Audience : Wellness-focused individuals (25–50)</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Luxury Spa Experience</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Nature-Inspired Therapies</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Holistic Mind & Body Wellness</span>
                        </li>
                        <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Eco-friendly & Calm Environment</span>
                        </li>
                         <li className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 bg-[#b6ff00] rounded-full"></div>
                           <span>Premium, Safe & Relaxing Treatments</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Visual Grid Mosaic */}
                <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Block 1: Main Logo on Black */}
                    <div className="col-span-2 bg-[#1a1a1a] rounded-sm p-6 flex items-center justify-center relative overflow-hidden h-48 group border border-white/5 hover:border-white/30 transition-colors">
                         <div className="flex flex-col items-center z-10">
                            <div className="w-20 h-20 mb-3 transition-transform duration-500 group-hover:scale-110">
                               <img 
                                 src="https://i.ibb.co/bjtN3PS6/asq.png" 
                                 alt="Veloura Logo" 
                                 className="w-full h-full object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                               />
                            </div>
                            <h2 className="font-serif text-3xl font-bold text-white tracking-wider">Veloura</h2>
                         </div>
                    </div>

                    {/* Block 2: Typography - Changed to White Background */}
                    <div className="bg-white rounded-sm p-6 text-black flex flex-col justify-center h-48 relative overflow-hidden group">
                        <div className="absolute top-2 right-2 opacity-20">
                           <span className="font-display font-black text-6xl">Aa</span>
                        </div>
                        <span className="font-serif text-2xl font-bold mb-1">Modern No. 20</span>
                        <span className="text-xs font-mono uppercase tracking-widest mb-4 opacity-70">Regular / Serif</span>
                        
                        <div className="font-serif text-3xl leading-none mb-2">Aa Bb Cc</div>
                        <p className="text-[10px] opacity-80 leading-tight w-3/4">Soft, round typeface to communicate safety and nature.</p>
                    </div>

                    {/* Block 3: Color Palette - 50/50 #121212 and #FFFFFF */}
                    <div className="bg-white rounded-sm p-1 h-48 flex flex-col justify-center">
                         <div className="flex h-full w-full">
                             <div className="flex-1 bg-[#121212] flex flex-col justify-end p-3 relative overflow-hidden">
                                <span className="text-[10px] text-white font-mono rotate-90 mb-16 origin-left translate-x-1 block whitespace-nowrap">#121212</span>
                             </div>
                             <div className="flex-1 bg-[#ffffff] flex flex-col justify-end p-3 border-l border-gray-200 relative overflow-hidden">
                                <span className="text-[10px] text-black font-mono rotate-90 mb-16 origin-left translate-x-1 block whitespace-nowrap">#FFFFFF</span>
                             </div>
                         </div>
                    </div>

                    {/* Block 4: Pattern/Texture - UPDATED for Interactive Colors */}
                    <div className="col-span-2 bg-[#1A1A1A] hover:bg-[#FFFFFF] rounded-sm h-32 relative overflow-hidden flex items-center justify-center group transition-colors duration-700 ease-in-out border border-white/5 hover:border-transparent">
                        <div 
                            className="absolute inset-0 bg-white group-hover:bg-[#1A1A1A] transition-colors duration-700 ease-in-out"
                            style={{
                                maskImage: `url(https://i.ibb.co/bjtN3PS6/asq.png)`,
                                WebkitMaskImage: `url(https://i.ibb.co/bjtN3PS6/asq.png)`,
                                maskSize: '45px',
                                WebkitMaskSize: '45px',
                                maskRepeat: 'repeat',
                                WebkitMaskRepeat: 'repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM SECTION: Logo Analysis */}
            <div className="border-t border-white/10 pt-20 relative">
                
                <div className="text-center mb-20">
                     <h2 className="font-display font-black text-5xl md:text-7xl text-[#b6ff00] uppercase tracking-tighter mb-4">Wordmark Logo</h2>
                     <h3 className="font-sans text-xl md:text-2xl text-white tracking-[0.5em] uppercase font-light">Main Logo Analysis</h3>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 relative">
                     
                     {/* Left Callout */}
                     <div className="lg:w-1/4 text-center lg:text-right order-2 lg:order-1">
                         <div className="relative group mb-12">
                            <h4 className="text-[#b6ff00] font-bold text-lg mb-2">Leaf Symbol</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Inspired by nature and renewal. Represents calmness, healing, and organic wellness—core values of the Veloura spa experience.
                            </p>
                            {/* Connector Line Desktop */}
                            <div className="hidden lg:block absolute top-1/2 right-[-60px] w-[50px] h-[1px] bg-[#b6ff00]/50"></div>
                            <div className="hidden lg:block absolute top-1/2 right-[-60px] w-1 h-1 bg-[#b6ff00] rounded-full"></div>
                         </div>
                         
                         <div className="relative group">
                             <h4 className="text-[#b6ff00] font-bold text-lg mb-2">Negative Space</h4>
                             <p className="text-xs text-gray-400">
                                 The central drop symbolizes essential oils, energy flow, and inner balance—highlighting purity, relaxation, and mindful self-care.
                             </p>
                             {/* Connector Line Desktop */}
                            <div className="hidden lg:block absolute top-1/2 right-[-40px] w-[30px] h-[1px] bg-[#b6ff00]/50"></div>
                            <div className="hidden lg:block absolute top-1/2 right-[-40px] w-1 h-1 bg-[#b6ff00] rounded-full"></div>
                         </div>
                     </div>

                     {/* CENTER PIECE: The Main Logo - IMPROVED CIRCLE */}
                     <div className="order-1 lg:order-2 relative group cursor-pointer z-20 flex justify-center items-center">
                         {/* Pulse Effect Behind */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-neon/10 rounded-full blur-[80px] group-hover:bg-brand-neon/20 transition-all duration-700"></div>
                         
                         {/* The Premium Circle */}
                         <div className="relative flex flex-col items-center justify-center 
                                       w-80 h-80 md:w-96 md:h-96
                                       rounded-full 
                                       bg-gradient-to-br from-[#1a1a1a] via-[#0d0d0d] to-[#000000]
                                       border border-white/5
                                       shadow-[0_25px_50px_-12px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.1),inset_0_-10px_40px_rgba(0,0,0,0.8)]
                                       group-hover:shadow-[0_30px_60px_-12px_rgba(255,255,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)]
                                       group-hover:border-white/30
                                       transition-all duration-500 ease-out">
                             
                             {/* Subtle circular grid or texture for "tech/premium" feel */}
                             <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(255,255,255,0.03)_100%)] pointer-events-none"></div>

                             {/* Inner Highlight Ring */}
                             <div className="absolute inset-4 rounded-full border border-white/5 pointer-events-none"></div>
                             
                             <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover:scale-105 mb-12">
                                 <div className="w-32 h-32 md:w-48 md:h-48 mb-0 drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]">
                                     <img 
                                        src="https://i.ibb.co/bjtN3PS6/asq.png" 
                                        alt="Veloura Logo" 
                                        className="w-full h-full object-contain brightness-0 invert" 
                                     />
                                 </div>
                                 <h1 className="font-serif text-5xl md:text-6xl text-white transition-colors duration-300 drop-shadow-md tracking-wide mt-[-0.25rem]">
                                   Veloura
                                 </h1>
                             </div>
                         </div>
                     </div>

                     {/* Right Callout */}
                     <div className="lg:w-1/4 text-center lg:text-left order-3">
                         
                         <div className="mb-12 relative">
                             {/* Connector Line Desktop */}
                            <div className="hidden lg:block absolute top-1/2 left-[-60px] w-[50px] h-[1px] bg-[#b6ff00]/50"></div>
                            <div className="hidden lg:block absolute top-1/2 left-[-60px] w-1 h-1 bg-[#b6ff00] rounded-full"></div>

                             <h4 className="text-[#b6ff00] font-bold text-lg mb-2">Serif Typography</h4>
                             <p className="text-xs text-gray-400 leading-relaxed">
                                 <span className="italic text-white">Modern No. 20</span> reflects elegance, tranquility, and a premium spa atmosphere—designed to evoke trust and relaxation.
                             </p>
                         </div>

                         <div className="border-l-2 border-[#b6ff00] pl-6 py-2 bg-gradient-to-r from-[#b6ff00]/5 to-transparent">
                             <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-3">Color Psychology</h4>
                             <ul className="text-xs text-gray-400 space-y-1">
                                 <li>• <span className="text-[#b6ff00] font-bold">Nature</span> & Calmness</li>
                                 <li>• <span className="text-[#b6ff00] font-bold">Wellness</span> & Healing</li>
                                 <li>• <span className="text-[#b6ff00] font-bold">Luxury</span> & Serenity</li>
                                 <li>• <span className="text-[#b6ff00] font-bold">Organic</span> & Mindful Living</li>
                             </ul>
                         </div>
                     </div>

                </div>

            </div>
        </div>
      </div>
    </section>
  );
};