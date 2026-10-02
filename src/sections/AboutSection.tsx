import React from 'react';
import { User, CheckCircle2, BookOpen } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#07090e] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <RevealOnScroll>
          <div className="space-y-2 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <User className="w-3.5 h-3.5" />
              <span>01 — About Me</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Software for Real-World Business Needs
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
            <RevealOnScroll delay={100}>
              <p className="bg-[#0e131d] p-6 rounded-xl border border-slate-800/80">
                {ABOUT_DATA.bio}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <p>
                {ABOUT_DATA.experienceSummary} My work centers on crafting end-to-end applications using modern web stacks—building responsive UIs with <strong className="text-white">React</strong> and <strong className="text-white">TypeScript</strong>, architecting robust backend APIs with <strong className="text-white">FastAPI</strong>, <strong className="text-white">Django</strong>, and <strong className="text-white">Node.js</strong>, and structuring reliable database models in <strong className="text-white">PostgreSQL</strong> and <strong className="text-white">MongoDB</strong>.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <p>
                I rely on version control with <strong className="text-white">Git</strong> and interface prototyping in <strong className="text-white">Figma</strong> to bridge developer workflows with user experience standards. Whether diagnosing edge-case state synchronizations or optimizing multi-table SQL joins, my priority is delivering dependable, maintainable software.
              </p>
            </RevealOnScroll>

            {/* VNSGU MCA Highlight Box */}
            <RevealOnScroll delay={250}>
              <div className="card-hover-micro flex items-start gap-4 p-4 rounded-xl bg-[#111622] border border-emerald-900/40">
                <div className="p-2 rounded-lg bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 mt-0.5 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-white">Current Academic Pursuit</h4>
                  <p className="text-xs text-slate-300">
                    Master of Computer Applications (MCA) — First Year at Veer Narmad South Gujarat University (VNSGU). Combining advanced CS theory with active industry application building.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Core Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <RevealOnScroll delay={120}>
              <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Engineering Core Focus
              </h3>
            </RevealOnScroll>

            {ABOUT_DATA.principles.map((pr, idx) => (
              <RevealOnScroll key={idx} delay={160 + idx * 80}>
                <div 
                  className="card-hover-micro p-5 rounded-xl bg-[#0d111a] border border-slate-800/80 hover:border-slate-700 transition-all space-y-2"
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{pr.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {pr.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}

            {/* Tech badges pill wall */}
            <RevealOnScroll delay={350}>
              <div className="p-5 rounded-xl bg-[#0d111a] border border-slate-800/80 space-y-3">
                <span className="text-xs font-mono text-slate-400 uppercase">Primary Stack</span>
                <div className="flex flex-wrap gap-2">
                  {ABOUT_DATA.techHighlights.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-800/40 rounded-md transition-colors hover:border-emerald-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>

      </div>
    </section>
  );
};
