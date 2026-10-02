import React, { useState, useEffect } from 'react';
import { X, Layers, Server, Database, ShieldCheck, CheckCircle, ArrowRight, Code2, Users, AlertTriangle } from 'lucide-react';
import { FEATURED_WMS_PROJECT } from '../data/portfolioData';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'Inbound' | 'Outbound' | 'Storage & Inventory'>('Inbound');
  const project = FEATURED_WMS_PROJECT;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredModules = project.modules?.filter(m => m.category === activeTab || (activeTab === 'Inbound' && m.category === 'Inbound'));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
        aria-hidden="true"
      />

      {/* Main Dialog Container */}
      <div 
        className="relative w-full max-w-5xl bg-[#090d14] border border-slate-800 rounded-xl shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
        role="dialog"
        aria-labelledby="case-study-title"
        aria-modal="true"
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0d121b]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 text-xs font-mono font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 rounded">
              CASE STUDY 01
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Production Architecture Deep-Dive
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Main Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12 text-slate-300 font-sans">
          
          {/* Header Banner */}
          <div className="space-y-4 border-b border-slate-800/80 pb-8">
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">{project.category}</span>
              <span>•</span>
              <span>Surat, India</span>
            </div>
            <h1 id="case-study-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Section 01: Overview */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span>01</span>
              <span className="w-8 h-px bg-emerald-800/60"></span>
              <span>Overview</span>
            </div>
            <h2 className="text-xl font-bold text-white">System Concept & Scope</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </section>

          {/* Section 02 & 03: Problem vs Solution Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 02 Problem */}
            <div className="bg-[#111622] p-6 rounded-xl border border-red-900/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-red-400 uppercase tracking-widest">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>02 — Problem Statement</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Legacy Operational Friction</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* 03 Solution */}
            <div className="bg-[#111622] p-6 rounded-xl border border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>03 — Engineered Solution</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Deterministic Task Automation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Section 04: System Architecture Diagram */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span>04</span>
              <span className="w-8 h-px bg-emerald-800/60"></span>
              <span>Architecture</span>
            </div>
            <h2 className="text-xl font-bold text-white">System Architecture & Data Pipelines</h2>
            <p className="text-sm text-slate-300">
              {project.architectureDescription}
            </p>

            {/* Clean Architecture Graphic */}
            <div className="bg-[#0b0e15] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
                {/* Node 1 */}
                <div className="bg-[#121723] p-5 rounded-lg border border-slate-800 text-center space-y-2">
                  <div className="inline-flex p-2 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-800/50">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Frontend Client</h4>
                  <p className="text-xs font-mono text-cyan-300">React + TypeScript</p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Typed components, role-specific layouts, optimistic state updates.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="hidden md:flex flex-col items-center justify-center text-slate-600">
                  <span className="text-[10px] font-mono text-emerald-400">REST APIs / JSON</span>
                  <ArrowRight className="w-5 h-5 text-emerald-500 animate-pulse" />
                </div>

                {/* Node 2 */}
                <div className="bg-[#121723] p-5 rounded-lg border border-slate-800 text-center space-y-2">
                  <div className="inline-flex p-2 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                    <Server className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Backend Microservice</h4>
                  <p className="text-xs font-mono text-emerald-300">FastAPI (Python)</p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Async controllers, UOM conversion engine, RBAC middleware.
                  </p>
                </div>

                {/* Arrow Connector */}
                <div className="hidden md:flex flex-col items-center justify-center text-slate-600">
                  <span className="text-[10px] font-mono text-emerald-400">SQL Queries / ORM</span>
                  <ArrowRight className="w-5 h-5 text-emerald-500 animate-pulse" />
                </div>

                {/* Node 3 */}
                <div className="bg-[#121723] p-5 rounded-lg border border-slate-800 text-center space-y-2 md:col-span-1">
                  <div className="inline-flex p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-800/50">
                    <Database className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">Database Engine</h4>
                  <p className="text-xs font-mono text-blue-300">PostgreSQL</p>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    Normalized tables, row indexing, audit history logging.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 05: Key Modules Breakdown */}
          <section className="space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <span>05</span>
                <span className="w-8 h-px bg-emerald-800/60"></span>
                <span>WMS Core Modules</span>
              </div>
              <div className="flex gap-2">
                {(['Inbound', 'Outbound', 'Storage & Inventory'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                      activeTab === tab
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/60'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredModules?.map((mod, idx) => (
                <div key={idx} className="bg-[#111622] p-5 rounded-lg border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white">{mod.name}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-emerald-400 rounded">
                      {mod.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>
                  <ul className="pt-2 space-y-1">
                    {mod.details.map((d, di) => (
                      <li key={di} className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section 06: User Roles & Workflows */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              <span>06 — Persona Workflows (RBAC)</span>
            </div>
            <h2 className="text-xl font-bold text-white">6 Distinct Operational Roles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {project.userRoles?.map((r, idx) => (
                <div key={idx} className="bg-[#0e121b] p-4 rounded-lg border border-slate-800/80 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    {r.role}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {r.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 07 & 08: Challenges & Darshan's Contributions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 07 Technical Challenges */}
            <div className="bg-[#111622] p-6 rounded-xl border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <span>07 — Key Challenges</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Complex Technical Edge Cases</h3>
              <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc marker:text-amber-400">
                {project.engineeringChallenges.map((ch, idx) => (
                  <li key={idx} className="leading-relaxed">{ch}</li>
                ))}
              </ul>
            </div>

            {/* 08 Contributions */}
            <div className="bg-[#111622] p-6 rounded-xl border border-emerald-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
                <Code2 className="w-3.5 h-3.5" />
                <span>08 — Exact Contributions</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Engineering Deliverables</h3>
              <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc marker:text-emerald-400">
                {project.contributions.map((con, idx) => (
                  <li key={idx} className="leading-relaxed">{con}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 09: Outcome */}
          <section className="bg-[#0d131f] p-6 rounded-xl border border-emerald-800/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <span>09 — Production Outcome</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </section>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 bg-[#0d121b] border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">Darshan Jariwala — WMS Case Study</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
