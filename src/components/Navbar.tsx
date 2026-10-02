import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 animate-navbar-slide-down ${
        isScrolled 
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-3 text-white transition-opacity"
          >
            <span className="font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-emerald-400 transition-colors uppercase font-mono">
              {HERO_DATA.name}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {HERO_DATA.statusBadge}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0f1420]/80 p-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-emerald-950/80 text-emerald-300 font-semibold border border-emerald-800/60 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="btn-micro inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 rounded-lg transition-all shadow-sm"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0f17] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl animate-fadeIn">
          <div className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/40 rounded border border-emerald-800/40 mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>{HERO_DATA.statusBadge}</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg transition-colors"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/80 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
