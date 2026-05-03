import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { Monitor, Smartphone } from 'lucide-react';

export const UiUx: React.FC = () => {

  // 🔥 STATE
  const [view, setView] = useState<"old" | "new">("new");

  return (
    <section id="uiux" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionHeading title="UI / UX Design" subtitle="Digital Experience" />
        
        {/* Project 1 */}
        <div className="mb-24">
           <div className="flex items-center gap-4 mb-8">
              <Smartphone className="text-brand-neon" size={32} />
              <h3 className="text-3xl font-display font-bold text-white">Shopzy App</h3>
           </div>
           
           <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-16 rounded-xl border border-white/5">
              <div className="flex flex-col md:flex-row items-center gap-12">
                 <div className="w-full md:w-1/3">
                    <h4 className="text-brand-neon font-bold uppercase tracking-widest mb-4">Description</h4>
                    <p className="text-brand-gray mb-6">
                       Shopzy is a modern e-commerce application designed to provide a smooth and engaging shopping experience. It focuses on clean design, easy navigation, and personalized product discovery.
                    </p>
                    <ul className="space-y-2 text-sm text-white">
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-neon rounded-full"></div> Clean & Minimal UI</li>
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-neon rounded-full"></div> Personalized Recommendations </li>
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-neon rounded-full"></div> Smooth Navigation</li>
                       <li className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-neon rounded-full"></div> Fast & Secure Checkout</li>
                    </ul>
                 </div>
                 <div className="w-full md:w-2/3 flex justify-center gap-4">
                    <img src="https://i.ibb.co/7JMSbxK9/1st-uiux.jpg" className="w-1/3 rounded-xl shadow-2xl border-4 border-neutral-800" alt="App Screen 1" />
                    <img src="https://i.ibb.co/Y7jShN6f/2nd-uiux.jpg" className="w-1/3 rounded-xl shadow-2xl border-4 border-neutral-800 mt-12" alt="App Screen 2" />
                    <img src="https://i.ibb.co/39qNpLf1/3rd-uiux.jpg" className="w-1/3 rounded-xl shadow-2xl border-4 border-neutral-800" alt="App Screen 3" />
                 </div>
              </div>
           </div>
        </div>

        {/* 🔥 Project 2 FIXED */}
        <div>
           <div className="flex items-center gap-4 mb-8 justify-end text-right">
              <h3 className="text-3xl font-display font-bold text-white">Epic Game Store Redesign</h3>
              <Monitor className="text-brand-neon" size={32} />
           </div>

           {/* 🔥 IMAGE SWITCH */}
           <div className="bg-white p-2 rounded-xl">
             <div className="bg-neutral-900 rounded-lg overflow-visible relative">

                <img
                  src={
                    view === "old"
                      ? "https://i.ibb.co/gZ7yVTff/old-epic-games.jpg" // OLD image
                      : "https://i.ibb.co/TM1qcjDc/epic-games-website-uiux.jpg" // NEW image
                  }
                  className="w-full h-auto transition-all duration-300"
                  alt="UI Preview"
                />

                {/* Badge */}
                <div className="absolute top-0 left-0 -translate-x-3 -translate-y-1/2 bg-brand-neon px-6 py-2 text-black font-bold uppercase shadow-lg transform -rotate-2 z-10">
                  {view === "old" ? "Before" : "After"}
                </div>

             </div>
           </div>
           
           {/* 🔥 CLICKABLE CARDS */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

              {/* OLD */}
              <div
                onClick={() => setView("old")}
                className={`p-8 bg-neutral-900 border cursor-pointer transition hover:scale-[1.02] ${
                  view === "old" ? "border-[#B6FE00]" : "border-white/10"
                }`}
              >
                 <h5 className="text-white font-bold text-xl mb-4">Old Interface</h5>
                 <p className="text-sm text-brand-gray">
                   Cluttered navigation, poor hierarchy, and lack of visual focus.
                 </p>
              </div>

              {/* NEW */}
              <div
                onClick={() => setView("new")}
                className={`p-8 bg-neutral-900 border cursor-pointer transition hover:scale-[1.02] ${
                  view === "new" ? "border-[#B6FE00]" : "border-white/10"
                }`}
              >
                 <h5 className="text-brand-neon font-bold text-xl mb-4">New Interface</h5>
                 <p className="text-sm text-brand-gray">
                   Streamlined sidebar, hero focus, and better layout.
                 </p>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};