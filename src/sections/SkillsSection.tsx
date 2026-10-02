import React, { useState } from 'react';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryIcon = (title: string) => {
    if (title.includes('Frontend')) return <Layout className="w-4 h-4 text-cyan-400" />;
    if (title.includes('Backend')) return <Server className="w-4 h-4 text-emerald-400" />;
    if (title.includes('Database')) return <Database className="w-4 h-4 text-blue-400" />;
    return <Wrench className="w-4 h-4 text-amber-400" />;
  };

  const categories = SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 bg-[#090d14] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <RevealOnScroll>
          <div className="space-y-2 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Cpu className="w-3.5 h-3.5" />
              <span>04 — Technical Stack</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Categorized Engineering Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Structured view of core languages, frameworks, databases, and workflow tools used in production development.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Pills */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`btn-micro px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                selectedCategory === null
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setSelectedCategory(cat.title)}
                className={`btn-micro px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                  selectedCategory === cat.title
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/80 font-bold'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories
            .filter(cat => selectedCategory === null || cat.title === selectedCategory)
            .map((cat, idx) => (
              <RevealOnScroll key={cat.title} delay={150 + idx * 80}>
                <div 
                  className="card-hover-micro bg-[#0e121b] border border-slate-800/90 rounded-xl p-6 space-y-4 shadow-lg hover:border-slate-700 transition-all flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                        {getCategoryIcon(cat.title)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{cat.title}</h3>
                        <p className="text-[11px] text-slate-400">{cat.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.skills.map((skill, sIdx) => (
                        <div 
                          key={sIdx}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            skill.isPrimary
                              ? 'bg-emerald-950/50 text-emerald-300 border border-emerald-800/50 font-semibold'
                              : 'bg-[#111622] text-slate-300 border border-slate-800'
                          }`}
                        >
                          {skill.isPrimary && <CheckCircle className="w-3 h-3 text-emerald-400" />}
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
                    {cat.skills.filter(s => s.isPrimary).length} Primary Technologies
                  </div>
                </div>
              </RevealOnScroll>
            ))}
        </div>

      </div>
    </section>
  );
};
