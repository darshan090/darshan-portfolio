import React, { useEffect, useState } from 'react';
import { Terminal, Layers } from 'lucide-react';
import { HERO_DATA, FEATURED_WMS_PROJECT } from '../../data/portfolioData';

interface ProjectTransitionLoaderProps {
  isOpen: boolean;
  onComplete: () => void;
  projectTitle?: string;
}

export const ProjectTransitionLoader: React.FC<ProjectTransitionLoaderProps> = ({
  isOpen,
  onComplete,
  projectTitle = FEATURED_WMS_PROJECT.title,
}) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setIsFadingOut(false);
      return;
    }

    // Animate progress smoothly 0% -> 100% over ~650ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 12;
      });
    }, 60);

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 750);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e]/95 backdrop-blur-md transition-opacity duration-300 ease-out font-sans ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading project case study"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex flex-col items-center space-y-5 px-6 max-w-md text-center">
        {/* Top Developer Mark */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/50">
          <Terminal className="w-3.5 h-3.5" />
          <span>{HERO_DATA.name.toUpperCase()} · CASE STUDY</span>
        </div>

        {/* Project Title */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>{projectTitle}</span>
          </h3>
          <p className="text-xs font-mono text-slate-400">
            Initializing architecture models & modules...
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-64 h-1 bg-slate-800/90 rounded-full overflow-hidden mt-3 relative">
          <div
            className="h-full bg-emerald-400 transition-all duration-100 ease-out rounded-full shadow-lg shadow-emerald-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] font-mono text-emerald-400 font-medium">
          {progress}%
        </span>
      </div>
    </div>
  );
};
