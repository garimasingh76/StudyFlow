import React from 'react';
import { FileText, Plus, Search, Tag } from 'lucide-react';

export default function Notes() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Study Notes
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Store key formulas, concept summaries, and lecture notes organized by subject.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Note</span>
        </button>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Simple Subject Notes Module
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          In Phase 12, clean note cards with subject categorization, real-time search, and plain text editing will be introduced.
        </p>
      </div>
    </div>
  );
}
