import React, { useState } from 'react';
import { Layers, Server, Database, ArrowRight, Terminal, Activity } from 'lucide-react';

export const SystemArchitectureVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<'client' | 'api' | 'db'>('api');

  const nodeDetails = {
    client: {
      title: 'React 18 + TypeScript Client',
      type: 'Presentation & Operator Workflows',
      tech: 'React · TypeScript · Tailwind CSS',
      items: [
        'Typed state management for multi-step ASN & GRN forms',
        'Role-scoped dashboard navigation (Admin, Picker, Packer)',
        'Optimistic state updates for scan feedback'
      ]
    },
    api: {
      title: 'FastAPI Backend Service',
      type: 'Business Logic & Task Routing',
      tech: 'Python 3.11 · FastAPI · Pydantic',
      items: [
        'UOM unit conversion routines (Cases → Inner Bins → Units)',
        'Directed putaway algorithm for rack assignment',
        'Role-Based Access Control (RBAC) middleware'
      ]
    },
    db: {
      title: 'PostgreSQL Database Engine',
      type: 'Relational Data & Audit Trails',
      tech: 'PostgreSQL 16 · SQL Indexes',
      items: [
        'Normalized inventory, SKU, bin location & order schemas',
        'Row-level transactional safety during stock transfers',
        'Historical movement audit logging for quality inspection'
      ]
    }
  };

  return (
    <div className="w-full bg-[#0b0e15] border border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden font-sans">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none"></div>

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5 mb-5 relative z-10">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
          <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider truncate">
            SYSTEM ARCHITECTURE & DATA PIPELINES
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-800/40 shrink-0 ml-2">
          <Activity className="w-3 h-3 text-emerald-400" />
          <span className="hidden sm:inline">WMS Core Loop</span>
          <span className="sm:hidden">Core</span>
        </div>
      </div>

      {/* Interactive System Flow Map */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 relative z-10 mb-5">
        {/* Node 1: Client */}
        <button
          type="button"
          onClick={() => setActiveNode('client')}
          className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
            activeNode === 'client'
              ? 'bg-[#121926] border-cyan-500/70 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/30'
              : 'bg-[#0d121c] border-slate-800/80 hover:border-slate-700 hover:bg-[#111724]'
          }`}
        >
          <div className="flex items-center justify-between gap-1 mb-2">
            <div className="p-1.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-1.5 py-0.5 rounded">
              01
            </span>
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight truncate">
              React + TS
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 truncate">
              UI Client
            </p>
          </div>
        </button>

        {/* Node 2: API */}
        <button
          type="button"
          onClick={() => setActiveNode('api')}
          className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
            activeNode === 'api'
              ? 'bg-[#121926] border-emerald-500/70 shadow-lg shadow-emerald-950/40 ring-1 ring-emerald-500/30'
              : 'bg-[#0d121c] border-slate-800/80 hover:border-slate-700 hover:bg-[#111724]'
          }`}
        >
          <div className="flex items-center justify-between gap-1 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 shrink-0">
              <Server className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-medium text-emerald-300 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 rounded">
              02
            </span>
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight truncate">
              FastAPI Services
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 truncate">
              Backend
            </p>
          </div>
        </button>

        {/* Node 3: DB */}
        <button
          type="button"
          onClick={() => setActiveNode('db')}
          className={`p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-full relative overflow-hidden ${
            activeNode === 'db'
              ? 'bg-[#121926] border-blue-500/70 shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/30'
              : 'bg-[#0d121c] border-slate-800/80 hover:border-slate-700 hover:bg-[#111724]'
          }`}
        >
          <div className="flex items-center justify-between gap-1 mb-2">
            <div className="p-1.5 rounded-lg bg-blue-950/60 border border-blue-800/50 text-blue-400 shrink-0">
              <Database className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono font-medium text-blue-300 bg-blue-950/60 border border-blue-800/40 px-1.5 py-0.5 rounded">
              03
            </span>
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight truncate">
              PostgreSQL
            </h4>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono mt-0.5 truncate">
              Database
            </p>
          </div>
        </button>
      </div>

      {/* Selected Node Details Box */}
      <div className="bg-[#101520] border border-slate-800/90 rounded-xl p-4 sm:p-5 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-3.5">
          <div>
            <h5 className="text-sm font-bold text-white flex items-center gap-2">
              <span>{nodeDetails[activeNode].title}</span>
            </h5>
            <p className="text-xs text-slate-400 mt-0.5">{nodeDetails[activeNode].type}</p>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">
            {nodeDetails[activeNode].tech}
          </span>
        </div>

        <ul className="space-y-2 text-xs text-slate-300">
          {nodeDetails[activeNode].items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <ArrowRight className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>

        {/* Dynamic code snippet simulation */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 truncate mr-2">
            <Terminal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-slate-300 truncate">
              {activeNode === 'client' && 'src/hooks/useWmsPutaway.ts'}
              {activeNode === 'api' && 'app/routers/wms_inbound.py'}
              {activeNode === 'db' && 'migrations/004_wms_inventory_schema.sql'}
            </span>
          </span>
          <span className="text-emerald-400 font-semibold shrink-0">200 OK</span>
        </div>
      </div>
    </div>
  );
};
