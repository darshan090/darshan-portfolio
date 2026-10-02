import React from 'react';
import { ArrowRight, FileText, Mail, Code, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { HERO_DATA } from '../data/portfolioData';
import { SystemArchitectureVisual } from '../components/SystemArchitectureVisual';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenCaseStudy: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume, onOpenCaseStudy }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Tech Line Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <RevealOnScroll delay={50}>
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Software Developer · MCA Student at VNSGU</span>
              </div>
            </RevealOnScroll>

            {/* Main Headline */}
            <RevealOnScroll delay={120}>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Software Developer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">practical systems</span> for real-world problems.
              </h1>
            </RevealOnScroll>

            {/* Subheadline */}
            <RevealOnScroll delay={190}>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                {HERO_DATA.subheadline}
              </p>
            </RevealOnScroll>

            {/* Tech Badges */}
            <RevealOnScroll delay={260}>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                  <Code className="w-3.5 h-3.5 text-slate-500" /> Core Stack:
                </span>
                {HERO_DATA.techBadges.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2.5 py-1 text-xs font-mono text-slate-200 bg-[#111622] border border-slate-800 rounded-md transition-colors hover:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </RevealOnScroll>

            {/* CTAs */}
            <RevealOnScroll delay={330}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#projects"
                  className="btn-micro inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={onOpenCaseStudy}
                  className="btn-micro inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#111622] border border-slate-700 hover:border-emerald-500/50 rounded-xl transition-all"
                >
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  <span>Explore WMS Case Study</span>
                </button>

                <button
                  onClick={onOpenResume}
                  className="btn-micro inline-flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
                >
                  <FileText className="w-4 h-4 text-slate-400" />
                  <span>Resume</span>
                </button>
              </div>
            </RevealOnScroll>

            {/* Social Links */}
            <RevealOnScroll delay={400}>
              <div className="flex items-center gap-6 pt-4 text-slate-400 text-xs font-mono">
                <a 
                  href={HERO_DATA.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-400" />
                  <span>GitHub</span>
                </a>
                <a 
                  href={HERO_DATA.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={`mailto:${HERO_DATA.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Email</span>
                </a>
              </div>
            </RevealOnScroll>

          </div>

          {/* Right Architecture Graphic Column */}
          <div className="lg:col-span-5">
            <RevealOnScroll delay={250}>
              <SystemArchitectureVisual />
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
