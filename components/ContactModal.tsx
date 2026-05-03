import React from 'react';
import { X, Mail, Phone, Linkedin, Instagram, ArrowRight, MessageCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#121212] border border-brand-neon/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(182,255,0,0.1)] transform transition-all duration-300 scale-100 animate-fade-in-up overflow-hidden">
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-brand-neon transition-colors p-2 z-20"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="mb-8 text-center relative z-10">
          <div className="w-16 h-16 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4 border border-white/10 shadow-inner group">
             <MessageCircle size={32} className="text-brand-neon group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-2">Let's Talk</h2>
          <p className="text-brand-gray text-sm">Have a project in mind? Let's create something amazing together.</p>
        </div>

        {/* Contact Options */}
        <div className="space-y-4 relative z-10">
          
          {/* WhatsApp */}
          <a 
            href="https://wa.me/918368855353" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center text-[#25D366]">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-400 uppercase tracking-wider">WhatsApp</span>
                <span className="text-white font-bold group-hover:text-[#25D366] transition-colors font-mono tracking-wide">+91 8368855353</span>
              </div>
            </div>
            <ArrowRight size={18} className="text-gray-500 group-hover:text-[#25D366] group-hover:translate-x-1 transition-all" />
          </a>

          {/* Email */}
          <a 
            href="mailto:ankput20@gmail.com"
            className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-brand-neon/10 hover:border-brand-neon/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 bg-brand-neon/20 rounded-full flex items-center justify-center text-brand-neon">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <span className="block text-xs text-gray-400 uppercase tracking-wider">Email</span>
                <span className="text-white font-bold group-hover:text-brand-neon transition-colors font-mono tracking-wide">ankput20@gmail.com</span>
              </div>
            </div>
             <ArrowRight size={18} className="text-gray-500 group-hover:text-brand-neon group-hover:translate-x-1 transition-all" />
          </a>

        </div>

        {/* Footer / Socials */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center relative z-10">
           <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Or follow me on</p>
           <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/ankit-kumar-370933350" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/editspenguin/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
           </div>
        </div>

      </div>
    </div>
  );
};