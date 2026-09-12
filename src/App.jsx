import React from 'react';
import { BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700/80 p-8 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 shadow-sm ring-1 ring-primary-500/20 mx-auto">
          <BookOpen className="w-8 h-8" />
        </div>
        
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Phase 1 Setup Complete
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            StudyFlow
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Student Study-Management & Productivity Dashboard
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2 font-mono">
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Framework:</span>
            <span className="font-semibold text-primary-600 dark:text-primary-400">React + Vite</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Styling:</span>
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">Tailwind CSS v3</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Routing:</span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">React Router DOM</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Icons:</span>
            <span className="font-semibold text-amber-600 dark:text-amber-400">Lucide React</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
            <span>Analytics:</span>
            <span className="font-semibold text-violet-600 dark:text-violet-400">Chart.js</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
          <span>Foundation initialized successfully. Ready for Phase 2.</span>
        </div>
      </div>
    </div>
  );
}
