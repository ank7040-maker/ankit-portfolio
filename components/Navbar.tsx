import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { ContactModal } from './ContactModal';

interface NavbarProps {
  activeSection: string;
}

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'content', label: 'Content' },
  { id: 'branding', label: 'Branding' },
  { id: 'social', label: 'Social' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="group relative z-50">
             <span className="text-2xl font-display font-black text-white tracking-tighter">
               ANKIT<span className="text-brand-neon">.</span>KUMAR
             </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'text-brand-neon' 
                    : 'text-brand-gray hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
               onClick={() => setIsContactModalOpen(true)}
               className="px-6 py-2 bg-brand-neon text-brand-black font-bold uppercase text-xs tracking-wider hover:bg-white transition-all duration-300"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Mobile Overlay */}
          <div className={`fixed inset-0 bg-brand-black flex flex-col justify-center items-center transition-all duration-500 ease-in-out md:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}>
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-3xl font-display font-bold uppercase ${
                    activeSection === item.id ? 'text-brand-neon' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                 onClick={() => { setIsOpen(false); setIsContactModalOpen(true); }}
                 className="text-3xl font-display font-bold uppercase text-brand-neon"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};