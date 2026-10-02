import React from 'react';
import { Target, Layers, Server, Briefcase, Wrench, CheckCircle2 } from 'lucide-react';
import { ENGINEERING_FOCUS_DATA } from '../data/portfolioData';

export const EngineeringFocusSection: React.FC = () => {
  const getFocusIcon = (id: string) => {
    switch (id) {
      case 'full-stack': return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'backend-systems': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'business-software': return <Briefcase className="w-5 h-5 text-purple-400" />;
      default: return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#07090e] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>05 — Core Engineering Focus</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Build & Engineer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Key areas of software development where I focus my problem solving, software design, and engineering effort.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_FOCUS_DATA.map((focus) => (
            <div 
              key={focus.id}
              className="bg-[#0e121b] border border-slate-800/90 hover:border-slate-700 rounded-xl p-6 sm:p-8 space-y-4 shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                    {getFocusIcon(focus.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{focus.title}</h3>
                    <p className="text-xs font-mono text-emerald-400">{focus.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {focus.description}
                </p>
              </div>

              {/* Key Points */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <span className="text-[11px] font-mono text-slate-400 uppercase block">Implementation Highlights:</span>
                {focus.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
