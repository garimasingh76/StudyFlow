import React from 'react';
import { Calendar, Plus, Clock, Sparkles } from 'lucide-react';

export default function Planner() {
  const tabs = ['Upcoming', 'Today', 'Completed', 'All'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Study Planner
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Schedule revision blocks, lectures, PYQ sessions, and mock tests.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Schedule Session</span>
        </button>
      </div>

      <div className="flex gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            type="button"
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              idx === 0 
                ? 'bg-primary-50 text-primary-700 dark:bg-primary-950/60 dark:text-primary-300' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <Calendar className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Study Planner Module
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          In Phase 8, the study planner will feature automatic duration calculation, session types (Lecture, Revision, PYQ, Mock Test), and one-click session completion logging.
        </p>
      </div>
    </div>
  );
}
