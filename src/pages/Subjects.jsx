import React from 'react';
import { BookOpen, Plus, Search, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Subjects() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Subjects & Curriculum
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Organize academic courses, syllabi topics, and tracked study hours.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Subject</span>
        </button>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <div className="w-12 h-12 rounded-2xl bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 flex items-center justify-center mx-auto mb-3">
          <BookOpen className="w-6 h-6" />
        </div>
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Subject Management Module
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-4">
          In Phase 5, this page will host full CRUD operations for subjects, topic completion checklists, real-time progress calculations, and direct navigation into Subject Details.
        </p>
        <Link
          to="/subjects/demo"
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline"
        >
          <span>Preview Subject Details page route</span>
          <Layers className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
