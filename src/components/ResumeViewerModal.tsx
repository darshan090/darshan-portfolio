import React, { useEffect } from 'react';
import { X, Printer } from 'lucide-react';
import { HERO_DATA, EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Format skills as a semicolon-separated string matching the ATS template
  const allSkills = SKILL_CATEGORIES.flatMap(cat => cat.skills.map(s => s.name)).join('; ');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 font-sans">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-[#0c0f17] border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-labelledby="resume-title"
        aria-modal="true"
      >
        {/* Top Control Bar (Dark Modal Header) */}
        <div className="no-print flex items-center justify-between px-4 sm:px-6 py-3 border-b border-slate-800 bg-[#111622] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
              ATS Resume Preview (Arial Template)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-md transition-colors font-sans font-semibold shadow"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area (Top-aligned using mx-auto, fixing flex top-clipping) */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-[#07090e] flex-1">
          
          {/* Exact ATS Resume Sheet (Arial Font, High Contrast White Paper) */}
          <div 
            id="printable-resume"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
            className="w-full max-w-[800px] mx-auto bg-white text-gray-900 p-6 sm:p-10 shadow-2xl rounded-sm text-sm leading-normal font-sans border border-gray-200"
          >
            {/* Header Section */}
            <div className="text-center mb-5">
              <h1 id="resume-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-black mb-1">
                {HERO_DATA.name}
              </h1>
              <div className="text-base font-normal text-gray-800 mb-2">
                Software Developer
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-gray-700 font-normal">
                <span>{HERO_DATA.email}</span>
                <span>•</span>
                <span>linkedin.com/in/darshan-jariwala</span>
                <span>•</span>
                <span>{HERO_DATA.location}</span>
              </div>
              <div className="border-b-2 border-gray-900 mt-3"></div>
            </div>

            {/* WORK EXPERIENCE */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-900 pb-0.5 mb-3">
                WORK EXPERIENCE
              </h2>
              
              <div className="space-y-4">
                {EXPERIENCE_DATA.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex items-baseline justify-between flex-wrap text-sm">
                      <div>
                        <strong className="font-bold text-black">{exp.company}</strong>
                        <span className="text-gray-700"> - </span>
                        <span className="italic text-gray-900">{exp.role}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1.5">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-900 leading-relaxed">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-900 pb-0.5 mb-3">
                EDUCATION
              </h2>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex items-baseline justify-between flex-wrap text-sm">
                      <div>
                        <strong className="font-bold text-black">{edu.institution}</strong>
                        <span className="text-gray-700"> - </span>
                        <span className="italic text-gray-900">{edu.degree}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span>{edu.period}</span>
                      <span>Surat, India</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-6">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-900 pb-0.5 mb-2">
                SKILLS
              </h2>
              <p className="text-xs text-gray-900 leading-relaxed">
                {allSkills}
              </p>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black border-b border-gray-900 pb-0.5 mb-2">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc pl-5 text-xs text-gray-900 space-y-1">
                {CERTIFICATIONS_DATA.map((cert, idx) => (
                  <li key={idx}>
                    <strong className="font-bold text-black">{cert.title}</strong> — {cert.issuer} (Issued {cert.issueDate})
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Footer info */}
        <div className="no-print px-6 py-3 bg-[#111622] border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 shrink-0">
          <span>Arial ATS Resume Format</span>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white underline font-mono text-[11px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
