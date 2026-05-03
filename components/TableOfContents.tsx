import React from 'react';
import { PenTool, Box, Smartphone, Layout, ShoppingBag, Printer } from 'lucide-react';

interface ContentCard {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  number: string;
}

const contents: ContentCard[] = [
  { id: 'logo-folio', title: 'Logo Folio', subtitle: 'Identity', icon: <PenTool size={32} />, number: '01' },
  { id: 'branding', title: 'Branding', subtitle: 'Strategy', icon: <Layout size={32} />, number: '02' },
  { id: 'social', title: 'Social Media', subtitle: 'Content', icon: <Smartphone size={32} />, number: '03' },
  { id: 'packaging', title: 'Packaging', subtitle: 'Design', icon: <Box size={32} />, number: '04' },
  { id: 'print', title: 'Print Media', subtitle: 'Marketing', icon: <Printer size={32} />, number: '05' },
  { id: 'uiux', title: 'UI / UX', subtitle: 'Experience', icon: <ShoppingBag size={32} />, number: '06' },
];

export const TableOfContents: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="content" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="mb-16">
           <span className="font-script text-3xl text-brand-neon">Table Of</span>
           <h2 className="text-6xl font-display font-black text-white">Contents</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((item) => (
            <div 
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative h-48 bg-brand-dark border border-white/5 p-8 flex flex-col justify-between cursor-pointer hover:bg-white/5 transition-all duration-300 overflow-hidden"
            >
              {/* Background Number */}
              <span className="absolute top-0 right-4 text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300 select-none">
                {item.number}
              </span>

              {/* Icon */}
              <div className="text-brand-neon opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 transform origin-left">
                {item.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <span className="font-script text-brand-gray text-lg group-hover:text-brand-neon transition-colors duration-300">
                  {item.subtitle}
                </span>
                <h3 className="text-3xl font-display font-bold text-white uppercase mt-1 group-hover:translate-x-2 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-brand-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};