import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { LogoDetail, LogoData } from './LogoDetail';

interface LogoItemProps {
  logo: LogoData;
  onClick: () => void;
}

// Helper component for the grid items
const LogoItem: React.FC<LogoItemProps> = ({ logo, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white p-6 flex flex-col items-center justify-center gap-4 rounded-sm shadow-xl hover:scale-105 transition-transform duration-300 group aspect-square border border-gray-100 relative overflow-hidden cursor-pointer"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gray-50 group-hover:bg-brand-neon transition-colors duration-300"></div>
    <div className="w-24 h-24 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-110">
      {logo.icon}
    </div>
    <div className="text-center z-10">
      <span className="font-display font-bold text-brand-black uppercase tracking-wider text-lg block">{logo.name}</span>
      <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase mt-1 block">{logo.category}</span>
    </div>
  </div>
);

export const LogoFolio: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState<LogoData | null>(null);

  const logos: LogoData[] = [
    {
      id: 'aura',
      name: 'Aura',
      category: 'Hotels & Resorts',
      industry: 'Hotels & Resorts',
      description: 'Aura is a luxury hospitality brand focused on premium hotel and resort experiences. The identity reflects elegance, calmness, and exclusivity, designed to appeal to high-end travelers.',
      concept: 'The symbol represents serenity, protection, and refined comfort—creating a welcoming and sophisticated brand presence.',
      usage: ['Hotels', 'Resorts', 'Luxury Stays', 'Travel', 'Hospitality'],
      icon: <img src="https://i.ibb.co/VpwyTCyQ/8.png" alt="Aura Logo" className="w-full h-full object-contain scale-[1.6]" />
    },
    {
      id: 'solaris',
      name: 'Solaris',
      category: 'Energy Solutions',
      industry: 'Energy Solutions',
      description: 'Solaris is a clean energy brand specializing in solar and renewable energy solutions. The brand emphasizes sustainability and innovation.',
      concept: 'The sun icon symbolizes power, renewable energy, and a brighter future through clean technology.',
      usage: ['Solar Energy', 'Green Power', 'Sustainability', 'Eco-tech'],
      icon: <img src="https://i.ibb.co/Ld4kYW29/solaris-logo.jpg" alt="Solaris Logo" className="w-full h-full object-contain scale-[1.6]" />
    },
    {
      id: 'kory',
      name: 'Kory',
      category: 'Footwear',
      industry: 'Footwear',
      description: 'Kory is a modern footwear brand designed for comfort, durability, and everyday performance with a stylish edge.',
      concept: 'The shoe icon represents movement, strength, and reliability, aligning with active lifestyles.',
      usage: ['Sneakers', 'Sports Shoes', 'Lifestyle', 'E-commerce'],
      icon: <img src="https://i.ibb.co/F4KpfLnb/brand-logo.jpg" alt="Kory Logo" className="w-full h-full object-contain scale-[1.8]" />
    },
    {
      id: 'eflow',
      name: 'eFlow',
      category: 'Tech',
      industry: 'Technology',
      description: 'Eflow is a tech-focused brand representing seamless digital flow, innovation, and smart solutions.',
      concept: 'The circular “E” form symbolizes connectivity, efficiency, and continuous technological progress.',
      usage: ['Tech Startups', 'SaaS', 'IT Services', 'Digital Products'],
      icon: (
         <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
           <circle cx="50" cy="50" r="45" fill="#007ecc" />
           <path d="M75 50 A 25 25 0 1 1 50 25 L70 25" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
           <path d="M35 50 L75 50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" />
         </svg>
      )
    },
    {
      id: 'beacon',
      name: 'Beacon',
      category: 'Mobile App',
      industry: 'Mobile App',
      description: 'Beacon is a mobile app brand designed around guidance, alerts, and smart digital assistance.',
      concept: 'The abstract symbol represents a signal or light—helping users find direction and stay informed.',
      usage: ['Mobile Apps', 'Productivity', 'Tracking', 'Notifications'],
      icon: <img src="https://i.ibb.co/HDcRqJ00/4.png" alt="Beacon Logo" className="w-full h-full object-contain scale-[1.6]" />
    },
    {
      id: 'scrijee',
      name: 'scriJee',
      category: 'Copywriting',
      industry: 'Copywriting',
      description: 'Scrijee is a modern copywriting and content-writing brand focused on clarity, storytelling, and effective communication.',
      concept: 'The clean wordmark highlights readability and precision—key values in professional writing.',
      usage: ['Copywriting', 'Content Creation', 'Marketing', 'Branding'],
      icon: <img src="https://i.ibb.co/pvk4SP1p/scrijee-logo.jpg" alt="scriJee Logo" className="w-full h-full object-contain scale-[1.6]" />
    },
    {
      id: 'nulse',
      name: 'nuLse',
      category: 'Health',
      industry: 'Health',
      description: 'Nulse is a health-focused brand centered on wellness, monitoring, and care-driven solutions.',
      concept: 'The pulse line represents life, health tracking, and medical reliability.',
      usage: ['Health Apps', 'Wellness', 'Medical', 'Fitness'],
      icon: <img src="https://i.ibb.co/mVMrXsqj/dob.jpg" alt="nuLse Logo" className="w-full h-full object-contain scale-[1.6]" />
    },
    {
      id: 'skyline',
      name: 'Skyline',
      category: 'Real Estate',
      industry: 'Real Estate',
      description: 'Skyline is a real estate brand representing modern living, urban growth, and architectural strength.',
      concept: 'The geometric icon reflects buildings, stability, and upward growth.',
      usage: ['Real Estate', 'Property', 'Construction', 'Architecture'],
      icon: <img src="https://i.ibb.co/dw7QLZcV/skyline-logo.jpg" alt="Skyline Logo" className="w-full h-full object-contain scale-[1.6]" />
    }
  ];

  return (
    <section id="logo-folio" className="py-24 bg-brand-black relative">
       {/* Background Grid Pattern */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Logo Folio" subtitle="Visual Identity" />
        
        <p className="text-center text-brand-gray max-w-2xl mx-auto mb-16">
          My logofolio highlighting custom logos I designed to align with clients' visions. Simplicity meets functionality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {logos.map((logo) => (
            <LogoItem 
              key={logo.id}
              logo={logo}
              onClick={() => setSelectedLogo(logo)}
            />
          ))}
        </div>
      </div>

      <LogoDetail 
        logo={selectedLogo} 
        isOpen={!!selectedLogo} 
        onClose={() => setSelectedLogo(null)} 
      />
    </section>
  );
};