import React, { useEffect, useState } from 'react';
import { HERO_DATA } from '../../data/portfolioData';

interface InitialPageLoaderProps {
  onComplete: () => void;
}

export const InitialPageLoader: React.FC<InitialPageLoaderProps> = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if loader has already run in this session
    const hasLoadedThisSession = sessionStorage.getItem('portfolio_initial_loaded');
    if (hasLoadedThisSession) {
      onComplete();
      return;
    }

    // Progress timeline: 650ms progress fill, then fadeout
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      sessionStorage.setItem('portfolio_initial_loaded', 'true');
      setTimeout(() => {
        onComplete();
      }, 350); // Fadeout duration
    }, 700);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#07090e] transition-opacity duration-350 ease-out font-sans ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading portfolio"
    >
      <div className="flex flex-col items-center space-y-4 px-4 text-center">
        {/* Name Mark */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-lg sm:text-xl font-bold font-mono tracking-widest text-white uppercase">
            {HERO_DATA.name}
          </span>
        </div>

        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
          Software Developer · MCA Student
        </p>

        {/* Minimal Progress Line */}
        <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden mt-2">
          <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 animate-loaderProgress rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
