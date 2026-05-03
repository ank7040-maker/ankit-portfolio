import React from 'react';

const SubHeading = ({ title, accent }: { title: string, accent: string }) => (
  <div className="mb-12 relative inline-block group">
    <h3 className="text-4xl md:text-5xl font-display font-bold text-white relative z-10">
      {title} <span className="font-script text-brand-neon text-5xl md:text-6xl absolute top-2 -right-24 -rotate-12 group-hover:rotate-0 transition-transform duration-300 pointer-events-none select-none">{accent}</span>
    </h3>
  </div>
);

export const PrintMedia: React.FC = () => {
  return (
    <section id="print" className="pt-40 pb-24 bg-brand-dark border-t border-white/5 relative scroll-mt-20">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-24">
           <div className="border border-dashed border-white/20 inline-block px-8 py-4 md:px-16 md:py-8 rounded-sm">
             <h2 className="text-6xl md:text-8xl font-display font-black text-brand-neon uppercase tracking-tighter mix-blend-screen">
               Print Media
             </h2>
             <p className="text-white mt-4 font-light tracking-widest uppercase text-sm">
               High-quality print designs to enhance offline brand presence
             </p>
           </div>
        </div>

        {/* 1. Brochure Design */}
        <div className="mb-32">
           <SubHeading title="Brochure" accent="Design" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
              {/* Mockup 1: Open Spread */}
              <div className="lg:col-span-2 relative group overflow-hidden rounded-sm bg-neutral-800 aspect-[16/9]">
                 <img src="https://i.ibb.co/k6DSPKq8/Gemini-Generated-Image-vksipjvksipjvksi.jpg" alt="Brochure Spread" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <span className="text-brand-neon font-bold uppercase text-xs tracking-wider">Trifold</span>
                    <h4 className="text-white font-display font-bold text-2xl">Interior Catalog</h4>
                 </div>
              </div>

              {/* Mockup 2: Cover */}
              <div className="relative group overflow-hidden rounded-sm bg-neutral-800 aspect-[4/3] lg:aspect-auto">
                 <img src="https://i.ibb.co/Myx3ghH9/Untitled-1.jpg" alt="Brochure Cover" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <span className="text-brand-neon font-bold uppercase text-xs tracking-wider">Booklet</span>
                    <h4 className="text-white font-display font-bold text-2xl">Corporate Profile</h4>
                 </div>
              </div>

              {/* Mockup 3: Stack */}
              <div className="relative group overflow-hidden rounded-sm bg-neutral-800 aspect-[4/3]">
                 <img src="https://i.ibb.co/zVMr4kxn/Gemini-Generated-Image-7hlsv67hlsv67hls.jpg" alt="Brochure Stack" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <span className="text-brand-neon font-bold uppercase text-xs tracking-wider">Flyer</span>
                    <h4 className="text-white font-display font-bold text-2xl">Event Promo</h4>
                 </div>
              </div>

              {/* Mockup 4: Detail */}
              <div className="lg:col-span-2 relative group overflow-hidden rounded-sm bg-neutral-800 aspect-[16/9] lg:aspect-auto">
                 <img src="https://i.ibb.co/GfyTgb6h/3rd-vala.jpg" alt="Brochure Detail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/90 to-transparent w-full">
                    <span className="text-brand-neon font-bold uppercase text-xs tracking-wider">Square Fold</span>
                    <h4 className="text-white font-display font-bold text-2xl">Product Lookbook</h4>
                 </div>
              </div>
           </div>
        </div>

        {/* 2. Billboard Design */}
        <div className="mb-32">
           <div className="flex justify-end text-right">
              <SubHeading title="Billboard" accent="Design" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Large Hero Billboard */}
              <div className="md:col-span-2 relative group overflow-hidden rounded-sm shadow-2xl">
                 <img src="https://i.ibb.co/Nd68nqT3/Gemini-Generated-Image-lv4huhlv4huhlv4h.jpg" alt="Highway Billboard" className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute top-4 right-4 bg-brand-neon text-black font-bold px-4 py-1 text-sm uppercase transform rotate-2">
                    Highway Hoarding
                 </div>
              </div>

              {/* Smaller Billboards */}
              <div className="relative group overflow-hidden rounded-sm shadow-xl">
                 <img src="https://i.ibb.co/3YSSHJg3/Gemini-Generated-Image-5gmoik5gmoik5gmo.jpg" alt="City Billboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute bottom-0 w-full bg-black/80 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h5 className="text-white font-bold">City Center Campaign</h5>
                 </div>
              </div>
              
              <div className="relative group overflow-hidden rounded-sm shadow-xl">
                 <img src="https://i.ibb.co/rGqjLZ63/Gemini-Generated-Image-oh6ohooh6ohooh6o.jpg" alt="Subway Billboard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute bottom-0 w-full bg-black/80 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h5 className="text-white font-bold">Metro Station Ad</h5>
                 </div>
              </div>
           </div>
        </div>

        {/* 3. Standee Design */}
        <div>
           <SubHeading title="Standee" accent="Design" />
           
           <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12 py-12 bg-white/5 rounded-xl border border-white/5">
              
              {/* Standee 1 */}
              <div className="relative group w-full md:w-1/4 aspect-[9/16] md:aspect-[1/2.5] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-transform duration-500">
                 <img src="https://i.ibb.co/zV0t7gBw/standee-design1.jpg" alt="Standee 1" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-0 border-4 border-neutral-800 pointer-events-none"></div>
                 {/* Feet */}
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-full shadow-lg"></div>
                 <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-brand-black text-white px-2 py-1 text-xs">Conference Roll-up</span>
                 </div>
              </div>

              {/* Standee 2 */}
              <div className="relative group w-full md:w-1/4 aspect-[9/16] md:aspect-[1/2.5] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-transform duration-500 delay-100">
                 <img src="https://i.ibb.co/VYhnjnkm/standee-design2.jpg" alt="Standee 2" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-0 border-4 border-neutral-800 pointer-events-none"></div>
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-full shadow-lg"></div>
                 <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-brand-black text-white px-2 py-1 text-xs">Product Launch</span>
                 </div>
              </div>

              {/* Standee 3 */}
              <div className="relative group w-full md:w-1/4 aspect-[9/16] md:aspect-[1/2.5] bg-neutral-900 rounded-sm overflow-hidden shadow-2xl transform hover:-translate-y-4 transition-transform duration-500 delay-200">
                 <img src="https://i.ibb.co/Q7c9p2Px/standee-design3.jpg" alt="Standee 3" className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
                 <div className="absolute inset-0 border-4 border-neutral-800 pointer-events-none"></div>
                 <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-2 bg-gray-400 rounded-full shadow-lg"></div>
                 <div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-brand-black text-white px-2 py-1 text-xs">Event Welcome</span>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};