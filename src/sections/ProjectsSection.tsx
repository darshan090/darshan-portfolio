import React from 'react';
import { FolderGit2, ArrowRight, Layers, Database, CheckCircle2, Terminal } from 'lucide-react';
import { FEATURED_WMS_PROJECT, OTHER_PROJECTS } from '../data/portfolioData';
import { RevealOnScroll } from '../components/animations/RevealOnScroll';

interface ProjectsSectionProps {
  onOpenCaseStudy: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const wms = FEATURED_WMS_PROJECT;

  return (
    <section id="projects" className="py-20 bg-[#07090e] border-t border-slate-800/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <RevealOnScroll>
          <div className="space-y-2 mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 — Featured Projects</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Software & Systems Engineering
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              Detailed case study of business logistics applications and backend API architectures.
            </p>
          </div>
        </RevealOnScroll>

        {/* HERO CASE STUDY CARD — WAREHOUSE MANAGEMENT SYSTEM */}
        <RevealOnScroll delay={100}>
          <div className="card-hover-micro bg-[#0c101a] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl mb-16 relative">
            
            {/* Card Top Label Bar */}
            <div className="bg-[#111724] px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-mono font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-800/70 rounded-md uppercase tracking-wider">
                  FEATURED CASE STUDY
                </span>
                <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                  Digital Dreams Infotech · Production WMS
                </span>
              </div>
              <div className="flex items-center gap-2">
                {wms.techStack.slice(0, 4).map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Content Column */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono text-emerald-400">{wms.category}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {wms.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-1">
                    {wms.summary}
                  </p>
                </div>

                {/* Inbound & Outbound Workflow Breakdown Chips */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    Core Inbound & Outbound Workflows Implemented:
                  </span>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'ASN Intake', 'GRN Receiving', 'Quality Inspection', 
                      'Directed Putaway', 'Inventory Engine', 'Replenishment',
                      'Sales Orders', 'Pick Lists', 'Packing Station'
                    ].map((mod, idx) => (
                      <div 
                        key={idx}
                        className="p-2 rounded-lg bg-[#111622] border border-slate-800/80 text-[11px] font-mono text-slate-200 flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Roles Preview */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                    6 Role-Based Operator Workflows (RBAC):
                  </span>
                  <div className="flex flex-wrap gap-1.5 text-xs font-mono text-slate-300">
                    {['Admin', 'GRN Manager', 'Inspection Worker', 'Putaway Worker', 'Picker', 'Packer'].map((role) => (
                      <span key={role} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800/80 text-emerald-300">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Trigger */}
                <div className="pt-4">
                  <button
                    onClick={onOpenCaseStudy}
                    className="btn-micro inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-950/40"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>View Full WMS Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Visual Architecture Box */}
              <div className="lg:col-span-5 bg-[#080b11] border border-slate-800 rounded-xl p-6 space-y-6 flex flex-col justify-between">
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                      System Architecture Snapshot
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">PostgreSQL Schema</span>
                  </div>

                  {/* Micro Visual Nodes */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 bg-[#0d121c] border border-cyan-900/40 rounded-lg space-y-1">
                      <div className="flex items-center justify-between text-cyan-300">
                        <span className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" /> Frontend Layer
                        </span>
                        <span className="text-[10px] text-slate-400">React + TS</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        Typed WMS forms, station scanning views, state management.
                      </p>
                    </div>

                    <div className="p-3 bg-[#0d121c] border border-emerald-900/40 rounded-lg space-y-1">
                      <div className="flex items-center justify-between text-emerald-300">
                        <span className="flex items-center gap-1.5">
                          <Terminal className="w-3.5 h-3.5" /> Backend Service
                        </span>
                        <span className="text-[10px] text-slate-400">FastAPI</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        UOM conversions, putaway routes, picklist batching APIs.
                      </p>
                    </div>

                    <div className="p-3 bg-[#0d121c] border border-blue-900/40 rounded-lg space-y-1">
                      <div className="flex items-center justify-between text-blue-300">
                        <span className="flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5" /> Relational Storage
                        </span>
                        <span className="text-[10px] text-slate-400">PostgreSQL</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-tight">
                        Normalized stock levels, bin IDs, PO audit tables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#111622] border border-slate-800/80 rounded-lg text-xs text-slate-300">
                  <span className="text-emerald-400 font-mono font-semibold block mb-1">
                    Darshan's Core Role:
                  </span>
                  Full-Stack WMS Developer responsible for React frontend interfaces, FastAPI microservice controllers, and PostgreSQL database schema integrations.
                </div>

              </div>

            </div>

          </div>
        </RevealOnScroll>

        {/* SECONDARY PROJECTS GRID */}
        <div className="space-y-6">
          <RevealOnScroll delay={150}>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Additional Technical Systems
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_PROJECTS.map((proj, idx) => (
              <RevealOnScroll key={proj.id} delay={200 + idx * 100}>
                <div 
                  className="card-hover-micro bg-[#0d111a] border border-slate-800/90 hover:border-slate-700 rounded-xl p-6 space-y-4 shadow-lg transition-all flex flex-col justify-between h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-emerald-400">{proj.category}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-800 text-slate-400 rounded">
                        Technical System
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {proj.summary}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase block">Key Focus:</span>
                      <p className="text-xs text-slate-300 bg-[#111622] p-3 rounded-lg border border-slate-800/60">
                        {proj.overview}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
