import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#07090e] py-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-base font-bold text-white tracking-wider uppercase font-mono">
              {HERO_DATA.name}
            </h3>
            <p className="text-xs text-slate-400">
              Software Developer · MCA Student at VNSGU
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a 
              href={HERO_DATA.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href={HERO_DATA.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href={`mailto:${HERO_DATA.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Copyright & Scroll Back Top */}
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span>© 2026 {HERO_DATA.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
