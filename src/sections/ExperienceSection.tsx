import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2, Code2, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

interface ExperienceSectionProps {
  onOpenCaseStudy: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenCaseStudy }) => {
  return (
    <section id="experience" className="py-20 bg-[#090d14] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>02 — Professional Experience</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Software Engineering Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Hands-on work building production business applications and complex warehouse logistics software.
          </p>
        </div>

        {/* Timeline Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp) => (
            <div 
              key={exp.id}
              className="bg-[#0f1420] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all"
            >
              {/* Card Top Row */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                    <span className="px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded-full">
                      Current Position
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onOpenCaseStudy}
                  className="self-start lg:self-center inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 hover:bg-emerald-900/60 rounded-lg transition-colors"
                >
                  <span>View WMS Architecture Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Role Summary */}
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {exp.summary}
              </p>

              {/* Achievement Bullet Points Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  Engineering Deliverables & Workflows Implemented
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {exp.achievements.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0b0e15] border border-slate-800/60 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Pill Wall */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Technologies Used:</span>
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
