import React, { useState } from 'react';
import { X, Download, Mail, Phone, MapPin, Loader2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    const original = document.getElementById('resume-content');
    
    if (!original) {
        setIsDownloading(false);
        return;
    }
    
    // 1. Create a container for the PDF content to ensure it renders correctly
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100vw'; // Use viewport width
    container.style.height = '100vh'; // Use viewport height
    container.style.zIndex = '-9999'; // Hide behind everything
    container.style.backgroundColor = 'white';
    container.style.overflow = 'auto'; // Allow content to flow
    document.body.appendChild(container);

    // 2. Clone the content
    const clone = original.cloneNode(true) as HTMLElement;
    clone.id = 'resume-content-clone';
    clone.classList.add('pdf-print-mode');
    
    // 3. Force layout styles on the clone to match A4 width constraints
    clone.style.width = '800px'; 
    clone.style.margin = '0 auto';
    clone.style.padding = '40px';
    clone.style.backgroundColor = 'white';
    clone.style.color = 'black';
    clone.style.position = 'relative'; // Reset position
    clone.style.display = 'block';

    container.appendChild(clone);
    
    // 4. PDF Configuration
    const opt = {
      margin: [0.3, 0.3], // margins in inches
      filename: 'Ankit_Kumar_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2, 
        useCORS: true, 
        scrollY: 0,
        windowWidth: 1200 // Simulate desktop width for layout
      },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    try {
        // @ts-ignore
        if (window.html2pdf) {
            // @ts-ignore
            await window.html2pdf().set(opt).from(clone).save();
        } else {
            console.error("html2pdf library not loaded");
            window.print();
        }
    } catch (err) {
        console.error("PDF generation failed", err);
        window.print();
    } finally {
        // Cleanup
        document.body.removeChild(container);
        setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="relative bg-neutral-900 w-full max-w-4xl max-h-full overflow-y-auto rounded-lg border border-white/10 shadow-2xl flex flex-col animate-fade-in-up">
        
        {/* Header / Actions */}
        <div className="sticky top-0 z-10 bg-neutral-900/95 border-b border-white/10 p-4 flex justify-between items-center backdrop-blur-md">
           <h2 className="text-xl font-display font-bold text-white uppercase tracking-wider">Resume</h2>
           <div className="flex gap-4">
              <button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-neon hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                    <>
                        <Loader2 size={16} className="animate-spin" /> Generating PDF...
                    </>
                ) : (
                    <>
                        <Download size={16} /> Print / Save PDF
                    </>
                )}
              </button>
              <button onClick={onClose} className="text-white hover:text-brand-neon transition-colors">
                <X size={24} />
              </button>
           </div>
        </div>

        {/* Resume Content Body */}
        <div id="resume-content" className="p-8 md:p-12 text-gray-300 font-sans leading-relaxed">
           
           {/* Header */}
           <div className="text-center mb-12 border-b border-white/10 pb-8 resume-header">
              <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-2 resume-name">ANKIT KUMAR</h1>
              <p className="text-brand-neon font-medium text-lg uppercase tracking-widest mb-6 resume-title">
                Graphic Designer | Motion Graphics Artist | Video Editor
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 resume-contact">
                 <span className="flex items-center gap-2"><MapPin size={14} className="text-brand-neon icon" /> New Delhi</span>
                 <span className="flex items-center gap-2"><Phone size={14} className="text-brand-neon icon" /> 8368855353</span>
                 <span className="flex items-center gap-2"><Mail size={14} className="text-brand-neon icon" /> ankput20@gmail.com</span>
              </div>
           </div>

           {/* Profile */}
           <div className="mb-10 resume-section">
              <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Profile</h3>
              <p className="text-gray-300 leading-relaxed section-text">
                Creative and ambitious Graphic Designer with a strong focus on motion graphics and video editing. Skilled in creating visually engaging content for digital platforms and social media using clean visuals, smooth transitions, and effective storytelling. Passionate about learning new trends and techniques to consistently deliver high-quality creative work.
              </p>
           </div>

           {/* Professional Summary */}
           <div className="mb-10 resume-section">
              <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Professional Summary</h3>
              <ul className="space-y-3 section-text">
                 <li><strong className="text-white strong-text">1. Graphic Design:</strong> Proficient in creating social media posts, posters, thumbnails, and digital creatives with a strong sense of layout, color, and typography.</li>
                 <li><strong className="text-white strong-text">2. Motion Graphics:</strong> Skilled in designing basic to intermediate motion graphics, animations, and visual effects using Adobe After Effects.</li>
                 <li><strong className="text-white strong-text">3. Video Editing:</strong> Experienced in editing short-form videos, Reels, and promotional content using Adobe Premiere Pro with smooth cuts, transitions, and timing.</li>
                 <li><strong className="text-white strong-text">4. Design Software:</strong> Proficient in Adobe Photoshop, Illustrator, After Effects, and Premiere Pro for complete visual content creation.</li>
                 <li><strong className="text-white strong-text">5. Creativity & Communication:</strong> Strong creative thinking with the ability to understand requirements and convert ideas into visually impactful designs.</li>
              </ul>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 resume-grid">
              
              {/* Left Column */}
              <div>
                 {/* Education */}
                 <div className="mb-10 resume-section">
                    <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Education</h3>
                    
                    <div className="mb-6">
                       <h4 className="font-bold text-white text-lg item-title">B A (PROG) WITH COMPUTER - NEP</h4>
                       <p className="text-sm italic text-gray-500 mb-2 item-subtitle">School of Open Learning (SOL), University of Delhi, New Delhi</p>
                       <p className="text-sm text-gray-300 mb-2 item-text">Pursuing Bachelor of Arts (Programme) with Computer under the National Education Policy (NEP). Currently in 3rd Year.</p>
                       <div className="pl-4 border-l border-white/10 mt-2 border-sub">
                          <p className="text-xs text-gray-400 item-subtext"><strong>Coursework:</strong> Computer Applications, Programming Basics, Data Handling</p>
                       </div>
                    </div>

                    <div className="mb-6">
                       <h4 className="font-bold text-white text-lg item-title">Senior Secondary (Class XII)</h4>
                       <p className="text-sm italic text-gray-500 item-subtitle">2022 - 2023</p>
                       <p className="text-sm text-gray-300 item-text">CBSE - PM SHRI Kendriya Vidyalaya No. 1, Delhi Cantt-10</p>
                    </div>

                    <div>
                       <h4 className="font-bold text-white text-lg item-title">Secondary (Class X)</h4>
                       <p className="text-sm italic text-gray-500 item-subtitle">2020 - 2021</p>
                       <p className="text-sm text-gray-300 item-text">CBSE - PM SHRI Kendriya Vidyalaya No. 1, Delhi Cantt-10</p>
                    </div>
                 </div>

                 {/* Courses */}
                 <div className="mb-10 resume-section">
                    <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Courses & Certifications</h3>
                    <div className="mb-4">
                       <h4 className="font-bold text-white item-title">Motion Graphics & Video Editing Course</h4>
                       <p className="text-xs text-brand-neon uppercase tracking-wider mb-1 highlight-text">MAAC India, Rajouri Garden, New Delhi</p>
                       <p className="text-xs text-gray-500 item-subtitle">October 2024</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-white item-title">ADSE (CTT – Advance Diploma in Software Engineering)</h4>
                       <p className="text-xs text-brand-neon uppercase tracking-wider mb-1 highlight-text">LBSTI, Palam, New Delhi</p>
                       <p className="text-xs text-gray-500 item-subtitle">May 2023</p>
                    </div>
                 </div>
              </div>

              {/* Right Column */}
              <div>
                 {/* Skills */}
                 <div className="mb-10 resume-section">
                    <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Skills</h3>
                    
                    <div className="mb-6">
                       <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 sub-section-title">Design Suite</h4>
                       <ul className="space-y-2">
                          <li className="flex justify-between items-center bg-white/5 p-2 rounded px-3 skill-item"><span>Adobe Photoshop</span> <span className="text-xs font-bold text-brand-neon bg-brand-neon/10 px-2 py-1 rounded skill-badge">Advanced</span></li>
                          <li className="flex justify-between items-center bg-white/5 p-2 rounded px-3 skill-item"><span>Adobe Illustrator</span> <span className="text-xs font-bold text-brand-neon bg-brand-neon/10 px-2 py-1 rounded skill-badge">Advanced</span></li>
                          <li className="flex justify-between items-center bg-white/5 p-2 rounded px-3 skill-item"><span>Adobe After Effects</span> <span className="text-xs font-bold text-brand-neon bg-brand-neon/10 px-2 py-1 rounded skill-badge">Advanced</span></li>
                          <li className="flex justify-between items-center bg-white/5 p-2 rounded px-3 skill-item"><span>Adobe Premiere Pro</span> <span className="text-xs font-bold text-brand-neon bg-brand-neon/10 px-2 py-1 rounded skill-badge">Advanced</span></li>
                       </ul>
                    </div>

                    <div className="mb-6">
                       <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 sub-section-title">Software & Computer</h4>
                       <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 marker:text-brand-neon bullet-list">
                          <li>ADSE (Advance Diploma in Software Engineering)</li>
                          <li>Microsoft Office (Word, Excel, PowerPoint) — Advanced</li>
                          <li>Computer Applications & Digital Tools</li>
                       </ul>
                    </div>

                    <div className="mb-6">
                       <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 sub-section-title">Communication</h4>
                       <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 marker:text-brand-neon bullet-list">
                          <li>English Communication (Fluent – Written & Verbal)</li>
                          <li>Professional & Client Communication</li>
                          <li>Academic Writing Skills</li>
                       </ul>
                    </div>
                 </div>

                 {/* Languages */}
                 <div className="mb-10 resume-section">
                    <h3 className="text-xl font-bold text-white uppercase mb-4 border-l-4 border-brand-neon pl-4 section-title">Languages</h3>
                    <div className="flex gap-4">
                       <div className="bg-white/5 p-4 rounded min-w-[120px] language-box">
                          <span className="block text-xl font-bold text-white item-title">Hindi</span>
                          <span className="text-xs text-gray-500 uppercase item-subtitle">Native</span>
                       </div>
                       <div className="bg-white/5 p-4 rounded min-w-[120px] language-box">
                          <span className="block text-xl font-bold text-white item-title">English</span>
                          <span className="text-xs text-gray-500 uppercase item-subtitle">Fluent</span>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
      
      {/* 
        This style block is critical. 
        It forces all text elements to black when the .pdf-print-mode class is applied (during generation).
        This overrides the Tailwind utility classes (like text-white) because of the !important flag.
      */}
      <style>{`
        .pdf-print-mode {
          background-color: white !important;
          color: black !important;
        }
        .pdf-print-mode .resume-header {
            border-bottom-color: #eee !important;
        }
        .pdf-print-mode .resume-name {
            color: #000 !important;
        }
        .pdf-print-mode .resume-title {
            color: #444 !important;
            border-bottom: 2px solid #b6ff00;
            display: inline-block;
            margin-bottom: 20px;
        }
        .pdf-print-mode .resume-contact {
            color: #555 !important;
        }
        .pdf-print-mode .text-brand-neon {
            color: #000 !important; /* Make icons black or dark gray */
        }
        .pdf-print-mode .icon {
            color: #b6ff00 !important; /* Keep icons neon if desired, or black */
            stroke: #000 !important;
        }
        
        .pdf-print-mode .section-title {
            color: #000 !important;
            border-left-color: #000 !important;
        }
        .pdf-print-mode .section-text,
        .pdf-print-mode .item-text,
        .pdf-print-mode .item-subtext, 
        .pdf-print-mode .bullet-list li {
            color: #333 !important;
        }
        .pdf-print-mode .strong-text,
        .pdf-print-mode .item-title {
            color: #000 !important;
        }
        .pdf-print-mode .item-subtitle {
            color: #666 !important;
        }
        .pdf-print-mode .highlight-text {
            color: #222 !important;
            font-weight: bold;
        }
        .pdf-print-mode .sub-section-title {
            color: #555 !important;
        }
        
        .pdf-print-mode .skill-item {
            background-color: transparent !important;
            border: 1px solid #ddd !important;
            color: #000 !important;
        }
        .pdf-print-mode .skill-item span {
            color: #000 !important;
        }
        .pdf-print-mode .skill-badge {
            background-color: #f0f0f0 !important;
            color: #000 !important;
            border: 1px solid #ccc;
        }
        
        .pdf-print-mode .language-box {
            background-color: transparent !important;
            border: 1px solid #ddd !important;
        }
        
        .pdf-print-mode .border-sub {
             border-left-color: #ccc !important;
        }

        /* Fallback for print command */
        @media print {
          body * { visibility: hidden; }
          #resume-content, #resume-content * {
            visibility: visible;
            color: black !important;
          }
          #resume-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .resume-section { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
};