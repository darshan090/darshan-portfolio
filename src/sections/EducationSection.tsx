import React from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

export const EducationSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#090d14] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>06 — Academic Background</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Education
                </h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <RevealOnScroll key={idx} delay={100 + idx * 80}>
                  <div 
                    className={`card-hover-micro p-6 rounded-xl border ${
                      edu.isPrimary 
                        ? 'bg-[#0f1420] border-slate-800 shadow-md' 
                        : 'bg-[#0b0e15] border-slate-800/60'
                    } space-y-2`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <span className="text-xs font-mono text-emerald-400 px-2.5 py-0.5 bg-emerald-950/60 border border-emerald-800/60 rounded">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-300">
                      {edu.institution}
                    </p>
                    
                    <div className="text-xs text-slate-400 font-mono">
                      Status: <span className="text-emerald-300 font-medium">{edu.status}</span>
                    </div>

                    <ul className="pt-2 space-y-1 text-xs text-slate-400">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Right: Certifications Column */}
          <div className="lg:col-span-5 space-y-6">
            <RevealOnScroll delay={120}>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                  <Award className="w-3.5 h-3.5" />
                  <span>07 — Professional Credentials</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Certifications
                </h2>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <RevealOnScroll key={idx} delay={180 + idx * 80}>
                  <div 
                    className="card-hover-micro p-6 rounded-xl bg-[#0f1420] border border-slate-800/90 space-y-3 shadow-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-400 mt-0.5 shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{cert.title}</h3>
                        <p className="text-xs font-mono text-emerald-400">{cert.issuer} • Issued {cert.issueDate}</p>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {cert.description}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400 border-t border-slate-800">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      <span>UX Research · Usability Testing · Wireframing</span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
