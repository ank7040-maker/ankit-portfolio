import React from 'react';
import { SectionHeading } from './SectionHeading';

const ProductCard = ({ title, type, img }: { title: string, type: string, img: string }) => (
  <div className="group relative w-full h-96 bg-brand-dark overflow-hidden rounded-sm cursor-pointer border border-white/5 hover:border-brand-neon/50 transition-colors duration-300">
    <img 
      src={img} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0" 
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
    <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-brand-neon font-mono text-xs uppercase tracking-widest mb-2 block">{type}</span>
      <h3 className={`text-3xl text-white ${title === 'Veloura' ? 'font-serif italic tracking-wide' : 'font-display font-bold'}`}>
        {title}
      </h3>
    </div>
  </div>
);

export const Packaging: React.FC = () => {
  return (
    <section id="packaging" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <SectionHeading title="Packaging" subtitle="Product Design" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex flex-col gap-8 mt-12">
             <ProductCard 
               title="Berry" 
               type="Premium Skincare" 
               img="https://i.ibb.co/5WD2ygzC/Gemini-Generated-Image-nf7ob3nf7ob3nf7o.jpg" 
             />
             <ProductCard title="Gopal Chips" type="Snack Packaging" img="https://i.ibb.co/BVMLz9Yd/Gemini-Generated-Image-2sy6dk2sy6dk2sy6.jpg" />
           </div>
           <div className="flex flex-col gap-8">
             <ProductCard title="Arabian Dates" type="Pouch Design" img="https://i.ibb.co/Pz31SBrD/Gemini-Generated-Image-rt6golrt6golrt6g.jpg" />
             <ProductCard title="Paneer Tikka" type="Frozen Food Box" img="https://i.ibb.co/fKnsXF7/Gemini-Generated-Image-8ylvp98ylvp98ylv.jpg" />
           </div>
        </div>
      </div>
    </section>
  );
};