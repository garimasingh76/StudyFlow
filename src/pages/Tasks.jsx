import React from 'react';
import { CheckSquare, Plus, Filter, Search, ArrowUpDown } from 'lucide-react';

export default function Tasks() {
  const filterPills = ['All', 'Pending', 'Completed', 'High Priority', 'Due Today'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Task Management
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Organize assignments, syllabus readings, and revision deadlines.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-primary-600 hover:bg-primary-700 text-white shadow-xs transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
          {filterPills.map((pill, idx) => (
            <button
              key={pill}
              type="button"
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                idx === 0 
                  ? 'bg-primary-600 text-white shadow-xs' 
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
        
        <div className="w-full sm:w-64 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            readOnly
            placeholder="Search tasks..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 placeholder-slate-400 focus:outline-none"
          />
        </div>
      </div>

      <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-center">
        <CheckSquare className="w-8 h-8 text-slate-400 mx-auto mb-2" />
        <h2 className="text-base font-bold text-slate-900 dark:text-white mb-1">
          Task Management System
        </h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          In Phase 7, full CRUD task capabilities, real-time priority badges, due date sorting, and interactive completion checkboxes with localStorage will be introduced.
        </p>
      </div>
    </div>
  );
}
