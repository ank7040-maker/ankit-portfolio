import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TableOfContents } from './components/TableOfContents';
import { LogoFolio } from './components/LogoFolio';
import { Branding } from './components/Branding';
import { FullBranding } from './components/FullBranding';
import { SocialMedia } from './components/SocialMedia';
import { Packaging } from './components/Packaging';
import { PrintMedia } from './components/PrintMedia';
import { UiUx } from './components/UiUx';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'content', 'logo-folio', 'branding', 'full-branding', 'social', 'packaging', 'print', 'uiux', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-black text-white selection:bg-brand-neon selection:text-brand-black min-h-screen">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <TableOfContents />
        <LogoFolio />
        <Branding />
        <FullBranding />
        <SocialMedia />
        <Packaging />
        <PrintMedia />
        <UiUx />
      </main>

      <Footer />
    </div>
  );
};

export default App;